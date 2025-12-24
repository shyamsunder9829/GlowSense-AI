import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();

/**
 * @route   POST /api/contact
 * @desc    Save contact form message
 */
router.post("/", async (req, res) => {
  try {
    console.log("CONTACT BODY:", req.body);

    const { name, email, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const contact = new Contact({
      name,
      email,
      message,
    });

    await contact.save();

    res.status(201).json({
      success: true,
      message: "Contact saved successfully",
    });
  } catch (error) {
    console.error("CONTACT SAVE ERROR:", error);
    res.status(500).json({
      success: false,
      message: "Failed to save contact",
    });
  }
});

export default router;
