const jwt = require("jsonwebtoken");
const users = require("../schema/userSchema");

const isAuthAdmin = async (req, res, next) => {
  try {
    const token = req.header("token");
    const secretKey = "abc123";
    const verify = jwt.verify(token, secretKey);
    console.log(verify);
    const user = await users.findById(verify.id);
    if (verify.role === "admin" && user) {
      req.user = user;
      next();
    } else {
      res.status(400).send({ msg: "u r not an admin" });
    }
  } catch (error) {
    res.status(500).send({ msg: "error while trying to authetificate u " });
  }
};

module.exports = isAuthAdmin;
