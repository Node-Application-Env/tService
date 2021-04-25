import { Op } from "sequelize";
import authConfig from "../config/auth.config";
import model from "../models";

const { User } = model;

import { sign } from "jsonwebtoken";
import { hashSync, compareSync } from "bcryptjs";

const signup = async (req, res) => {
  try {
    const { email, name, password } = req.body;
    const user = await User.findOne({ where: { [Op.or]: [{ email }] } });
    // console.log(req.body, 'REQ-BODY');
    // console.log(user, 'USER-OBJ');
    if (user) {
      return res.status(422)
        .send({
          responseCode: 422,
          message: `USER ALREADY REGISTERED WITH : ${email}`,
        });
    }

    await User.create({ 
      name: name, 
      email: email, 
      password: hashSync(req.body.password, 8) });
    return res.status(201).send({ responseCode: 200, response: "USER ACCOUNT CREATED SUCCESSFULLY" });
    
  } catch (e) {
    return res
      .status(500)
      .send({
        message:
          `Could not perform operation at this time, kindly try again later. <br/> ${e}`,
      });
  }
};

const signIn = (req, res) => {
  User.findOne({ where: { email: req.body.email } })
    .then(user => {
        if (!user) {
            return res.status(404).send({ message: "User Not found." });
        }
        var passwordIsValid = compareSync(req.body.password, user.password);
        if (!passwordIsValid) {
            return res.status(401).send({ accessToken: null, message: "Incorrect Credential!" });
        }
        // console.log(authConfig.secret, 'SECRET');
        var token = sign({ id: user.id }, authConfig.secret, { expiresIn: 86400 });
        res.status(200).send({ id: user.id, name: user.name, email: user.email, accessToken: token });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

export default {
  signupRoute: signup, 
  signInRoute: signIn
}