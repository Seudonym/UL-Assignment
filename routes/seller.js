import express from "express";

import { createCatalog, orders } from "../controllers/sellerController.js";
import { protect } from "../middleware/protect.js";

const router = express.Router();

router.post("/create-catalog", protect, createCatalog); 
router.get("/orders", protect, orders);


export default router;
