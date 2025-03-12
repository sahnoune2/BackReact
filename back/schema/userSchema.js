const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  phone: { type: Number, required: true },
  address: { type: String, required: true },
  role: { type: String, default: "client", enum: ["admin", "client"] },
  panier: {
    type: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Products",
        },
        quantity: Number,
      },
    ],
    default: [],
  },
  orders: {type:[
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "orders",
    },
  ],default:[]},
});

collectionUser = mongoose.model("users", userSchema);
module.exports = collectionUser;
