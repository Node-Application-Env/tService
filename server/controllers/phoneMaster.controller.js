// import { Op } from "sequelize";
import model from "../models";
const { phoneMaster, driverMaster } = model;

const fetchAll = async (req, res) => {
  try {
    const phoneMasterList = await phoneMaster.findAll();
    // console.log(phoneMasterList, 'phoneMasterList-LIST');
    if (!phoneMaster) {
      return res.status(422).send({ status: 422, message: `Something wrong` });
    }

    return res.status(200).send({ status: 200, data: phoneMasterList });
  } catch (e) {
    return res
      .status(500)
      .send({ message: `Error ${e}`, });
  }
};

const fetchById = async (req, res) => {
  try {
    const uniqueID = req.params.id;
    // Driver ID : Not Provide
    if(uniqueID == null || uniqueID == undefined) {
      return res.status(422).send({ status: 422, message: `Invalid Request : ${uniqueID} Not Found` });
    } else {
      const phoneMasterList = await phoneMaster.findAll({ where: { id: uniqueID, isActive: true } });
      if (!phoneMasterList) {
        return res.status(422).send({ status: 422, message: `Phone Id : ${uniqueID} Not Exists` });
      } else {
        return res.status(200).send({ status: 200, data: phoneMasterList });
      }
    }    
  } catch (e) {
    return res.status(500).send({ message: `Error ${e}`, });
  }
};

const fetchPhoneNumberByDriverId = async (req, res) => {
  try {
    const uniqueID = req.params.driverId;
    // Driver ID : Not Provide
    if(uniqueID == null || uniqueID == undefined) {
      return res.status(422).send({ status: 422, message: `Invalid Request : DriverId Not Found` });
    } else {
      const driverMasterList = await phoneMaster.findAll({ where: { driverId: uniqueID, isActive: true } });
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

// const removeById = async (req, res) => {
//   try {
//     const uniqueID = req.params.id;
//     // Vehical ID : Not Provide
//     if(uniqueID == null || uniqueID == undefined) {
//       return res.status(422).send({ status: 422, message: `Vehical Id Can not be blank or null` });
//     } else {
//       vehicalMaster.destroy({
//         where :{
//           id: uniqueID
//         }
//       }).then((rowsDeleted) => {
//         if(rowsDeleted === 1) {
//           return res.status(200).send({ status: 200, message: `Vehical Id : ${uniqueID} Removed Successfully` });
//         }
//       }).catch(() => {
//         return res.status(422).send({ status: 422, message: `Vehical Id : ${uniqueID} Not Exists` });
//       });
//     }    
//   } catch (e) {
//     return res.status(500).send({ message: `Error ${e}`, });
//   }
// };

const insert = async (req, res) => {

  const { phoneNumber, isDefault, isActive } = req.body;
  const driverId = req.params.driverId;
  const driverObj = await driverMaster.findByPk(driverId);
  
  if(driverObj == null) {
    res.status(400).send({ status: 400, message: `Driver Not Exists ${driverID}` });
  } else {
    const newPhone = phoneMaster.build({ driverId, phoneNumber, isDefault, isActive });
    newPhone.validate().then((rows) => {
      newPhone.save().then((rows) => {
        res.status(201).send({ status: 201, response: newPhone });
      });
    }).catch((err) => {
      const errObj = {};
      err.errors.map( er => { errObj[er.path] = er.message; });
      res.status(422).send({ status: 422, error: errObj, url: req.baseUrl });
    });
  }
  

  // newPhone.validate()
  //   .then((rows) => {
  //     // newVehical.save().then((rows) => {
  //     //   res.status(201).send({ status: 201, response: newVehical });
  //     // });
  //   }).catch((err) => {
  //     const errObj = {};
  //     err.errors.map( er => { errObj[er.path] = er.message; });
  //     res.status(422).send({ status: 422, error: errObj, url: req.baseUrl });
  //   });
};

export default {
  fetchAll,
  fetchPhoneNumberByDriverId,
  fetchById,
  // removeById,
  insert
};
