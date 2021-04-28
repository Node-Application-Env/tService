import express from "express";
import authRouter from "./auth.routes"; 

import vehicalMasterRoute from "./vehicalMaster.routes";
import driverMasterRoute from "./driverMaster.routes";
import phoneMasterRoute from "./phoneMaster.routes";

const router = express.Router();

// DEFAULT INDEX ROUTER
router.get('/', (req, res) => { res.status(200).send({ message: 'WELCOME T-SERVICE ENDPOINT' }); });

// router.use('/auth', authRouter);
// router.use('/user', userRouter);
router.use('/vehical', vehicalMasterRoute);
router.use('/driver', driverMasterRoute);
router.use('/phone', phoneMasterRoute);

module.exports = router;