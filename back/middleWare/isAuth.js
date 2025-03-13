const jwt = require("jsonwebtoken");
const users = require("../schema/userSchema");

const isAuth = async (req, res, next) => {
  try {
    // const token = req.header("token");LOCALSTORAGE
    const token = req.cookies.token;

    console.log(token);
    const secretKey = "abc123";
    const verify = jwt.verify(token, secretKey);

    const user = await users.findById(verify.id).populate("panier.product");

    if (user) {
      req.user = user;
      next();
    } else {
      res.status(400).send({ msg: "u r not authetificated" });
    }
  } catch (error) {
    res.status(500).send({ msg: "error while trying to authetificate u " });
  }
};

module.exports = isAuth;
