// GET /api/buyer/list-of-sellers
// GET /api/buyer/seller-catalog/:seller_id
// POST /api/buyer/create-order/:seller_id

import mongoose from "mongoose";
import validator from "validator";

import User from "../models/User.js";
import Catalog from "../models/Catalog.js";
import Product from "../models/Product.js";
import Order from "../models/Order.js";

import catchAsync from "../helpers/catchAsync.js";

export const listOfSellers = catchAsync(async (req, res) => {
  const sellers = await User.find({ role: "seller" }).select(
    "-password -__v -role",
  );
  return res.status(200).json(sellers);
});

export const sellerCatalog = catchAsync(async (req, res) => {
  if (!validator.isMongoId(req.params.seller_id)) {
    return res.status(400).json({ error: "Invalid seller ID" });
  }

  const seller = await User.findById(req.params.seller_id);
  if (!seller) {
    return res.status(400).json({ error: "Seller does not exist" });
  }

  const catalog = await Catalog.find({ seller: req.params.seller_id }).select(
    "-seller -__v",
  );
  return res.status(200).json(catalog);
});

export const createOrder = catchAsync(async (req, res) => {
  if (!validator.isMongoId(req.params.seller_id)) {
    return res.status(400).json({ error: "Invalid seller ID" });
  }

  const seller = await User.findById(req.params.seller_id);
  if (!seller) {
    return res.status(400).json({ error: "Seller does not exist" });
  }

  const products = req.body.products;

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

  const order = new Order({
    _id: new mongoose.Types.ObjectId(),
    buyer: req.userID,
    seller: req.params.seller_id,
    products: productIDs,
  });

  await order.save();

  return res.status(201).json({ message: "Order created!" });
});
