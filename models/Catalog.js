import mongoose from "mongoose";

const catalogSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  products: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
  },
  seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    unique: true,
  },
});

const Catalog = mongoose.model("Catalog", catalogSchema);

export default Catalog;
