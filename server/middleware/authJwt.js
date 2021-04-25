import { verify } from "jsonwebtoken";
import authConfig from "../config/auth.config.js";
// import model from "../models";
// const { User } = model;

const verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];
  if (!token) {
    return res.status(403).send({
      responseCode: 403,
      response: "No token provided!"
    });
  }

  verify(token, authConfig.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        responseCode: 401,
        response: "Unauthorized!"
      });
    }
    req.userId = decoded.id;
    next();
  });
};

const authJwt = { verifyToken: verifyToken };

export default authJwt