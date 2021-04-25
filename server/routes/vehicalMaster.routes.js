import { Router } from 'express';
import vehicalMasterController from "../controllers/vehicalMaster.controller";

const defaultResponse = (req, res, next) => {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
};

const router = Router();
router.get("/", vehicalMasterController.fetchAll );
router.get("/:id", vehicalMasterController.fetchById );
router.delete("/:id", vehicalMasterController.removeById );

export default router;