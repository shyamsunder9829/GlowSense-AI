import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    console.log("CONTACT BODY:", req.body);

    const contact = new Contact(req.body);
    await contact.save();

    res.status(201).json({ message: "Contact saved successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to save contact" });
  }
});

export default router;
