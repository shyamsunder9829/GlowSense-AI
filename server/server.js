import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import contactRoutes from "./routes/contactRoutes.js";
import scanRoutes from "./routes/scanRoutes.js";

dotenv.config();

const app = express();

// middlewares
app.use(cors({
  origin: "*",
  methods: ["GET", "POST"],
}));
app.use(express.json({ limit: "10mb" }));

// routes
app.use("/api/contact", contactRoutes);
app.use("/api/scan", scanRoutes);

app.get("/", (req, res) => {
  res.send("GlowSense AI Server is running!");
});

// mongodb connect
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected (Cluster0)"))
  .catch((err) => console.log("❌ Mongo Error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
