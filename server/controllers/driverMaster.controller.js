// import { Op } from "sequelize";
import model from "../models";
const { driverMaster } = model;

const fetchAll = async (req, res) => {
  try {
    const driverMasterList = await driverMaster.findAll();
    // console.log(driverMasterList, 'driverMasterList-LIST');
    if (!driverMasterList) {
      return res.status(422).send({ status: 422, message: `Something wrong` });
    }

    return res.status(200).send({ status: 200, data: driverMasterList });
  } catch (e) {
    return res
      .status(500)
      .send({ message: `Error ${e}`, });
  }
};

const fetchById = async (req, res) => {
  try {
    const uniqueID = req.params.id;
    // Vehical ID : Not Provide
    if(uniqueID == null || uniqueID == undefined) {
      return res.status(422).send({ status: 422, message: `Driver Id Can not be blank or null` });
    } else {
      const driverMasterList = await driverMaster.findByPk(uniqueID);
      if (!driverMasterList) {
        return res.status(422).send({ status: 422, message: `Driver Id : ${uniqueID} Not Exists` });
      } else {
        return res.status(200).send({ status: 200, data: driverMasterList });
      }
    }    
  } catch (e) {
    return res.status(500).send({ message: `Error ${e}`, });
  }
};

const removeById = async (req, res) => {
  try {
    const uniqueID = req.params.id;
    // Vehical ID : Not Provide
    if(uniqueID == null || uniqueID == undefined) {
      return res.status(422).send({ status: 422, message: `Driver Id Can not be blank or null` });
    } else {
      driverMaster.destroy({
        where :{
          id: uniqueID
        }
      }).then((rowsDeleted) => {
        if(rowsDeleted === 1) {
          return res.status(200).send({ status: 200, message: `Driver Id : ${uniqueID} Removed Successfully` });
        }
      }).catch(() => {
        return res.status(422).send({ status: 422, message: `Driver Id : ${uniqueID} Not Exists` });
      });
    }    
  } catch (e) {
    return res.status(500).send({ message: `Error ${e}`, });
  }
};

const insert = async (req, res) => {
  const { name , licenceNo, birthDate, isActive } = req.body;

  const newDriver = driverMaster.build({
    name, 
    licenceNo, 
    birthDate, 
    isActive
  });

  newDriver.validate()
    .then(() => {
      newDriver.save().then((rows) => {
        res.status(201).send({ status: 201, response: newDriver });
      });
    }).catch((err) => {
      const errObj = {};
      err.errors.map( er => {
        errObj[er.path] = er.message;
      })
      res.status(422).send({ status: 422, error: errObj, url: req.baseUrl });
    });
};

export default {
  fetchAll,
  fetchById,
  removeById,
  insert
};
