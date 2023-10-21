import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  products: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
    required: true,
  },
  buyer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Order = mongoose.model("Order", orderSchema);

export default Order;
