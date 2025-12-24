import express from "express";
import Scan from "../models/Scan.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    console.log("SCAN BODY:", req.body);

    const scan = new Scan(req.body);
    await scan.save();

    res.status(201).json({ message: "Scan saved successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to save scan" });
  }
});

export default router;
