import { Router } from 'express';
import phoneMasterController from "../controllers/phoneMaster.controller";

const defaultResponse = (req, res, next) => {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
};

const router = Router();
router.get('/', phoneMasterController.fetchAll);
router.get('/byId/:id', phoneMasterController.fetchById);
router.get('/:driverId', phoneMasterController.fetchPhoneNumberByDriverId);
router.post("/:driverId", phoneMasterController.insert );

export default router;