// export default function(app) {
//   app.use(function(req, res, next) {
//     res.header(
//       "Access-Control-Allow-Headers",
//       "x-access-token, Origin, Content-Type, Accept"
//     );
//     next();
//   });

//   app.post("auth/signup", [ verifySignUp.checkDuplicateUsernameOrEmail ], signup );
//   app.post("auth/login", signin);
// };


import { Router } from 'express';
import verifySignUp from "../middleware/verifySignUp";
import authController from "../controllers/auth.controller";
// import signUpController from "../controllers/signup.controller";

const defaultResponse = (req, res, next) => {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
};

const router = Router();
// router.use(defaultResponse);
// router.post('/', signUpController.registrations );
router.post("/signup", [verifySignUp.duplicateEmail], authController.signupRoute );
router.post("/signin", authController.signInRoute);


export default router;