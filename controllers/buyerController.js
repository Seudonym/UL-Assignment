// GET /api/buyer/list-of-sellers
// GET /api/buyer/seller-catalog/:seller_id
// POST /api/buyer/create-order/:seller_id

import mongoose from "mongoose";

import User from "../models/User.js";

export const listOfSellers = async (req, res) => {
  const sellers = await User.find({ role: "seller" }).select("-password -__v -role");
  res.json(sellers);
}

export const sellerCatalog = async (req, res) => {
  res.send("GET: Seller catalog");
}

export const createOrder = async (req, res) => {
  res.send("POST: Create order");
}
