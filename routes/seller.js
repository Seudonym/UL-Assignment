import express from "express";
import { createCatalog, orders } from "../controllers/sellerController.js";

const router = express.Router();

router.post("/create-catalog", createCatalog); 
router.get("/orders", orders);


export default router;
