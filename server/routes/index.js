import express from "express";
import authRouter from "./auth.routes"; 

const router = express.Router();

// DEFAULT INDEX ROUTER
router.get('/', (req, res) => { res.status(200).send({ message: 'WELCOME T-SERVICE ENDPOINT' }); });

// router.use('/auth', authRouter);
// router.use('/user', userRouter);

module.exports = router;