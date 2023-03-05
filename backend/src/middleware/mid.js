const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");

const mid = async (req, res, next) => {
  let { authorization } = req.headers;

  if (authorization && authorization.startsWith("Bearer")) {
    let token = authorization.split(" ")[1];
    let { userID } = jwt.verify(token, "sonukumaryadavKEY");
    req.user = await userModel.findById(userID).select("--password");
    next();
  } else {
    res.status(401).send({ status: false, msg: "Unauthorized User" });
  }
};
