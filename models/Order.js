import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  products: {
    type: [
      {
        product: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
  },
  buyer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Order = mongoose.model("Catalog", catalogSchema);

export default Order;
