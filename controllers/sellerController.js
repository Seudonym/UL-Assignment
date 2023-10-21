// POST /api/seller/create-catalog
// GET /api/seller/orders

import mongoose from "mongoose";

import catchAsync from "../helpers/catchAsync.js";

import Product from "../models/Product.js";
import Catalog from "../models/Catalog.js";
import Order from "../models/Order.js";

export const createCatalog = catchAsync(async (req, res) => {
  const products = req.body.products;
  const userID = req.userID;

  const catalog = await Catalog.findOne({ seller: userID });
  if (!catalog) {
    return res.status(400).json({ error: "Catalog does not exist" });
  }

  const productIDs = [];
  for (let i = 0; i < products.length; i++) {
    const product = new Product({
      _id: new mongoose.Types.ObjectId(),
      name: products[i].name,
      price: products[i].price,
    });
    productIDs.push(product._id);
    product.save();
  }

  catalog.products = productIDs;
  await catalog.save();

  res.json({ message: "Catalog updated!" });
});

export const orders = async (req, res) => {
  const userID = req.userID;
  const orders = await Order.find({ seller: userID });
  res.json(orders);
};
