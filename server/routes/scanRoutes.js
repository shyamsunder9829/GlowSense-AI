import express from "express";
import Scan from "../models/Scan.js";

const router = express.Router();

/**
 * @route   POST /api/scan
 * @desc    Save skin scan result
 */
router.post("/", async (req, res) => {
  try {
    console.log("SCAN BODY:", req.body);

    const { image, skinType, products } = req.body;

    // Basic validation
    if (!image || !skinType || !products) {
      return res.status(400).json({
        message: "Missing required scan fields",
      });
    }

    const scan = new Scan({
      image,
      skinType,
      products,
    });

    await scan.save();

    res.status(201).json({
      success: true,
      message: "Scan saved successfully",
    });
  } catch (error) {
    console.error("SCAN SAVE ERROR:", error);
    res.status(500).json({
      success: false,
      message: "Failed to save scan",
    });
  }
});

export default router;
