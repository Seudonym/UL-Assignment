import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import authRoutes from "./routes/auth.js";
import buyerRoutes from "./routes/buyer.js";
import sellerRoutes from "./routes/seller.js";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
  }),
);

app.use("/api/auth", authRoutes);
app.use("/api/buyer", buyerRoutes);
app.use("/api/seller", sellerRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
