const { findOne } = require("../schema/codes");
const Products = require("../schema/productSchema");
const users = require("../schema/userSchema");
const orders = require("../schema/orderShema");

const addProduct = async (req, res) => {
  try {
    const newProduct = new Products(req.body);
    await newProduct.save();
    res.status(200).send({ Msg: "Product Added Successfully" });
  } catch (error) {
    res.status(500).send({ Msg: "Failed !!", error });
  }
};

const getProduct = async (req, res) => {
  try {
    const allProducts = await Products.find();
    res.status(200).send({ Msg: "This is our List of Products", allProducts });
  } catch (error) {
    res.status(500).send({ Msg: "Empty", error });
  }
};

const getOneProduct = async (req, res) => {
  try {
    const oneProduct = await Products.findById(req.params.id);
    res.status(200).send({ Msg: "this is our Product", oneProduct });
  } catch (error) {
    res.status(500).send({ Msg: "Failed to get Product", error });
  }
};

const deleteOneProduct = async (req, res) => {
  try {
    const found = await Products.findById(req.params.id);
    console.log(found);
    if (found == null) {
      res.status(400).send("Product Not Found");
    } else {
      await Products.findByIdAndDelete(req.params.id);
      res.status(200).send({ Msg: "Product Deleted Successfully" });
    }
  } catch (error) {
    res.status(500).send({ Msg: "Failed to Delete / Not Found", error });
  }
};

const addPanier = async (req, res) => {
  const { productID, quantity } = req.body;

  try {
    const userFound = req.user;
    console.log("userfound is:", userFound);
    const productFound = await Products.findById(productID);
    console.log("productfound is :", productFound);

    if (userFound && productFound) {
      const exist = userFound.panier.find(
        (el) => el.product._id.toString() === productID
      );
      if (exist) {
        userFound.panier = userFound.panier.map((el) =>
          el.product._id.toString() === productID
            ? { ...el, quantity: quantity }
            : el
        );
      } else {
        userFound.panier.push({ product: productFound._id, quantity });
      }

      await userFound.save();
      res.status(200).send({ msg: "product added to panier " });
    } else {
      res.status(400).status({ msg: "user or product not found" });
    }
  } catch (error) {
    res.status(500).send({ msg: "error while trying to add to panier" });
  }
};

const addOrder = async (req, res) => {
  const { panier ,total} = req.body;
  try {
    for (let item of panier) {
      console.log(item);
      const productFound = await Products.findById(item.product);
      console.log(productFound);
      if (!productFound) {
        console.log("hhhhh");
        return res
          .status(400)
          .send({ msg: `This ${item.product} is not registered` });
      }
      if (productFound.stock === "out-of-stock") {
        return res
          .status(400)
          .send({ msg: `Product ${item.product} is out of stock` });
      }
    }

    const userFound = req.user;
    if (!userFound) {
      return res.status(400).send({ msg: "User is not found" });
    } else {
      const order = new orders({ userID: userFound._id, panier,total });
      await order.save();
      await order.populate("userID");

      await order.populate("panier.product");
      res
        .status(200)
        .send({ msg: "Success populating the order", Orders: order });
    }
  } catch (error) {
    res.status(500).send({ msg: "Error while populating the order" });
  }
};

const getOrder = async (req, res) => {
  try {
    const allOrders = await orders.find().populate("userID panier.product");
    res.status(200).send({ msg: "all orders r here", orders: allOrders });
  } catch (error) {
    res.status(500).send({ msg: "error while trying to get ur orders" });
  }
};
const removeFromPanier = async (req, res) => {
  const { productID } = req.params;
  console.log(req.params);
  try {
    const userFound = req.user;
    console.log(userFound);
    if (!userFound) {
      return res.status(400).send({ msg: "User not found" });
    }
    userFound.panier = userFound.panier.filter(
      (item) => item.product._id.toString() !== productID
    );

    userFound.save();
    res.status(200).send({ msg: "Product removed from panier" });
  } catch (error) {
    res.status(500).send({ msg: "Error while removing from panier", error });
  }
};

const clearPanier = async (req, res) => {
  try {
    const userFound = req.user;
    userFound.panier = [];
    await userFound.save();
    res.status(200).send({ msg: "Panier cleared successfully" });
  } catch (error) {
    res.status(500).send({ msg: "Error while clearing panier", error });
  }
};

const updateQuantity = async (req, res) => {
  const { userID, product, newQuantity } = req.body;
  try {
    const userFound = await users.findById(userID);
    const productFound = await Products.findById(product);

    if (productFound && userFound) {
      await userFound.save();
      res.status(200).send({ msg: "quantity updated" });
    } else {
      res.status(400).send({ msg: "product not found or user not found  " });
    }
  } catch (error) {
    res.status(500).send({ msg: "error while trying to modify quantity" });
  }
};

module.exports = {
  addProduct,
  getProduct,
  getOneProduct,
  deleteOneProduct,
  addPanier,
  addOrder,
  removeFromPanier,
  clearPanier,
  updateQuantity,
  getOrder,
};
