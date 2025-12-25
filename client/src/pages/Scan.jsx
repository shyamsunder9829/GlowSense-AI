import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import ScanningEffect from "../components/ScanningEffect";
import api from "../api/axios";

export default function Scan() {
  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  /* ---------------- IMAGE UPLOAD ---------------- */
  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setImageFile(file);

    const url = URL.createObjectURL(file);
    setPreview(url);
  };

  /* ---------------- CLEAN OBJECT URL ---------------- */
  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  /* ---------------- START SCAN ---------------- */
  const startScan = async () => {
    if (!imageFile) {
      alert("Please upload an image first");
      return;
    }

    setLoading(true);
    setProducts([]);

    setTimeout(async () => {
      const generatedProducts = [
        {
          name: "Cetaphil Oily Skin Cleanser",
          amazon: "https://www.amazon.in/dp/B01CCGW4OE",
          flipkart: "https://www.flipkart.com/search?q=cetaphil+cleanser",
          myntra: "https://www.myntra.com/cetaphil",
        },
        {
          name: "Minimalist Niacinamide 10%",
          amazon: "https://www.amazon.in/dp/B08L5T8KJ9",
          flipkart: "https://www.flipkart.com/search?q=minimalist+niacinamide",
          myntra: "https://www.myntra.com/minimalist",
        },
        {
          name: "Neutrogena Hydro Boost Gel",
          amazon: "https://www.amazon.in/dp/B01M4MCUAF",
          flipkart: "https://www.flipkart.com/search?q=neutrogena+hydro+boost",
          myntra: "https://www.myntra.com/neutrogena",
        },
      ];


      setProducts(generatedProducts);
      setLoading(false);

      /* -------- SAVE SCAN TO MONGODB -------- */
      try {
        await api.post("https://glowsense-ai.onrender.com/api/scan", {
          image: preview,
          skinType: "Oily",
          products: generatedProducts,
        });

      } catch (err) {
        console.error("Scan save failed", err);
      }
    }, 2500);
  };

  /* ---------------- UI ---------------- */
  return (
    <section
      id="scan"
      className="relative min-h-screen px-6 py-24
      bg-linear-to-br from-indigo-200 via-pink-100 to-purple-300
      dark:from-slate-900 dark:to-slate-800"
    >
      <div className="max-w-5xl mx-auto">
        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-center mb-12
          bg-linear-to-r from-pink-500 to-purple-500
          bg-clip-text text-transparent"
        >
          AI Face Scan
        </motion.h2>

        {/* SCAN CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white/70 dark:bg-slate-800/80
          backdrop-blur-xl rounded-3xl shadow-2xl p-8"
        >
          {/* UPLOAD */}
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="block mx-auto mb-6"
          />

          {/* PREVIEW */}
          {preview && (
            <div className="relative w-56 mx-auto mb-6">
              <img
                src={preview}
                alt="Preview"
                className="rounded-3xl shadow-lg"
              />
              {loading && <ScanningEffect />}
            </div>
          )}

          {/* BUTTON */}
          <button
            onClick={startScan}
            disabled={loading}
            className="w-full py-3 rounded-full text-white font-semibold
            bg-linear-to-r from-pink-500 to-purple-500
            hover:scale-105 transition disabled:opacity-50"
          >
            {loading ? "Scanning..." : "Start Scan"}
          </button>
        </motion.div>

        {/* RESULTS */}
        {products.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-16"
          >
            <h3 className="text-3xl font-bold text-center mb-8">
              Recommended Products
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products
                .filter(Boolean)
                .map((item, index) => (
                  <ProductCard key={index} product={item} />
                ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
