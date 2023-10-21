// POST /api/auth/register
// POST /api/auth/login

import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import envHandler from "../helpers/envHandler.js";
import catchAsync from "../helpers/catchAsync.js";
import User from "../models/User.js";
import Catalog from "../models/Catalog.js";

export const registerController = catchAsync(async (req, res) => {
  const username = req.body.username.trim();
  const password = req.body.password.trim();
  const role = req.body.role.trim();

  // Validate inputs
  if (role !== "buyer" && role !== "seller") {
    return res
      .status(400)
      .json({ error: "Role must be either buyer or seller" });
  }

  if (!validator.isAlphanumeric(username)) {
    return res.status(400).json({ error: "Username must be alphanumeric" });
  }

  if (
    !validator.isStrongPassword(password, {
      minLength: 8,
      minLowercase: 0,
      minUppercase: 0,
      minNumbers: 0,
      minSymbols: 0,
      returnScore: false,
    })
  ) {
    return res.status(400).json({ error: "Password is not strong enough" });
  }

  // Check if username already exists
  const user = await User.findOne({ username });
  if (user) {
    return res.status(400).json({ error: "Username already exists" });
  }

  // Hash Password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create new user
  const newUser = new User({
    _id: new mongoose.Types.ObjectId(),
    username,
    password: hashedPassword,
    role,
  });
  await newUser.save();

  if (role === "seller") {
    const newCatalog = new Catalog({
      _id: new mongoose.Types.ObjectId(),
      seller: newUser._id,
      products: [],
    });
    await newCatalog.save();
    console.log("saved");
  }

  // Create token
  const token = jwt.sign({ id: newUser._id }, envHandler("JWT_SECRET"), {
    expiresIn: "30d",
  });

  res.status(201).json({ token });
});

export const loginController = async (req, res) => {
  const username = req.body.username.trim();
  const password = req.body.password.trim();

  const user = await User.findOne({ username });
  if (!user) {
    return res.status(400).json({ error: "Username does not exist" });
  }

  const isPasswordCorrect = await bcrypt.compare(password, user.password);
  if (!isPasswordCorrect) {
    return res.status(400).json({ error: "Password is incorrect" });
  }

  const token = jwt.sign({ id: user._id }, envHandler("JWT_SECRET"));
  res.status(200).json({ token });
};
