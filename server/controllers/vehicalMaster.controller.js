// import { Op } from "sequelize";
import model from "../models";
const { vehicalMaster } = model;

const fetchAll = async (req, res) => {
  try {
    const vehicalMasterList = await vehicalMaster.findAll();
    // console.log(vehicalMasterList, 'vehicalMasterList-LIST');
    if (!vehicalMasterList) {
      return res.status(422).send({ status: 422, message: `Something wrong` });
    }

    return res.status(200).send({ status: 200, data: vehicalMasterList });
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
      return res.status(422).send({ status: 422, message: `Vehical Id Can not be blank or null` });
    } else {
      const vehicalMasterList = await vehicalMaster.findByPk(uniqueID);
      if (!vehicalMasterList) {
        return res.status(422).send({ status: 422, message: `Vehical Id : ${uniqueID} Not Exists` });
      } else {
        return res.status(200).send({ status: 200, data: vehicalMasterList });
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
      return res.status(422).send({ status: 422, message: `Vehical Id Can not be blank or null` });
    } else {
      vehicalMaster.destroy({
        where :{
          id: uniqueID
        }
      }).then((rowsDeleted) => {
        if(rowsDeleted === 1) {
          return res.status(200).send({ status: 200, message: `Vehical Id : ${uniqueID} Removed Successfully` });
        }
      }).catch(() => {
        return res.status(422).send({ status: 422, message: `Vehical Id : ${uniqueID} Not Exists` });
      });
    }    
  } catch (e) {
    return res.status(500).send({ message: `Error ${e}`, });
  }
};


export default {
  fetchAll,
  fetchById,
  removeById
};
