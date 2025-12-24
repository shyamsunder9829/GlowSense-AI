import mongoose from "mongoose";

const scanSchema = new mongoose.Schema(
  {
    image: String,
    skinType: String,
    products: [
      {
        name: String,
        amazon: String,
        flipkart: String,
        myntra: String,
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Scan", scanSchema);
