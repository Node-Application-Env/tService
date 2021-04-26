import { Router } from 'express';
import driverMasterController from "../controllers/driverMaster.controller";

const defaultResponse = (req, res, next) => {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
};

const router = Router();
router.get("/", driverMasterController.fetchAll );
router.get("/:id", driverMasterController.fetchById );
router.delete("/:id", driverMasterController.removeById );
router.post("/", driverMasterController.insert );

export default router;