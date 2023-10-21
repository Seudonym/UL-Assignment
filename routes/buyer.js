import express from "express";

import { listOfSellers, sellerCatalog, createOrder } from "../controllers/buyerController.js";

const router = express.Router();

router.get("/list-of-sellers", listOfSellers);
router.get("/seller-catalog/:seller_id", sellerCatalog);
router.post("/create-order/:seller_id", createOrder);

export default router;
