
import model from "../models";
const { User } = model;

const duplicateEmail = (req, res, next) => {
    
    // EMAIL VALIDATIONS
    const email = req.body.email || undefined;
    if(email === undefined) {
        res.status(422).send({ responseCode: 422, response: 'Invalid Request (Please verify)' });
    } else {
        User.findOne({
            where: {
                email: req.body.email
            }
        }).then(user => {
            if(user) {
                res.status(400).send({ responseCode: 400, response: `MIDDLEWARE001 : Email already registered!` });
            }
        });
    }
    next();
};

// checkRolesExisted = (req, res, next) => {
//   if (req.body.roles) {
//     for (let i = 0; i < req.body.roles.length; i++) {
//       if (!ROLES.includes(req.body.roles[i])) {
//         res.status(400).send({
//           message: "Failed! Role does not exist = " + req.body.roles[i]
//         });
//         return;
//       }
//     }
//   }
  
//   next();
// };



export default {
    duplicateEmail,
  };