import express from "express";

import {
  listOfSellers,
  sellerCatalog,
  createOrder,
} from "../controllers/buyerController.js";
import { protect } from "../middleware/protect.js";

const router = express.Router();

router.get("/list-of-sellers", protect, listOfSellers);
router.get("/seller-catalog/:seller_id", protect, sellerCatalog);
router.post("/create-order/:seller_id", protect, createOrder);

export default router;
