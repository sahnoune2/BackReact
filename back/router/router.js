const express = require("express");

const {
  signUp,
  signIn,
  getCurrent,
  emailValidation,
  updateUser,
  logOut,
} = require("../control/control");
const isAuth = require("../middleWare/isAuth");
const {
  signUpValidation,
  validation,
  signInValidation,
} = require("../middleWare/validation");
const {
  addProduct,
  getProduct,
  getOneProduct,
  deleteOneProduct,
  addPanier,
  addOrder,
  removeFromPanier,
  clearPanier,
  updateQuantity,
} = require("../control/productControl");
const isAuthAdmin = require("../middleWare/isAuthAdmin");

const userRouter = express.Router();
const productRouter = express.Router();

userRouter.post("/addUser", signUp);
userRouter.post("/signIn", signInValidation, validation, signIn);
userRouter.get("/auth", isAuth, getCurrent);
userRouter.post("/email", signUpValidation, validation, emailValidation);
userRouter.put("/updateUser", isAuth, updateUser);
userRouter.post("/logout", logOut);

productRouter.post("/add", addProduct);
productRouter.get("/list", getProduct);
productRouter.get("/One/:id", getOneProduct);
productRouter.delete("/del/:id", deleteOneProduct);
productRouter.post("/addPanier", isAuth, addPanier);
productRouter.post("/addOrder", isAuth, addOrder);
productRouter.delete("/deleteOne/:productID", isAuth, removeFromPanier);
productRouter.delete("/deleteAll", isAuth, clearPanier);
productRouter.put("/updateQuantity", updateQuantity);

module.exports = { userRouter, productRouter };
