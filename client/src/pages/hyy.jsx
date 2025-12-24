// Scan.jsx 

import { useState } from "react";
import ImageUpload from "../components/ImageUpload";
import ProductGrid from "../components/ProductGrid";
import ScanningEffect from "../components/ScanningEffect";

export default function Scan() {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const startScan = () => {
    if (!image) return;

    setLoading(true);
    setProducts([]);

    setTimeout(() => {
      setProducts([
        {
          name: "Neutrogena Face Wash (Oily Skin)",
          amazon: "https://www.amazon.in/",
          flipkart: "https://www.flipkart.com/",
          myntra: "https://www.myntra.com/"
        },
        {
          name: "Cetaphil Moisturizer (Dry Skin)",
          amazon: "https://www.amazon.in/",
          flipkart: "https://www.flipkart.com/",
          myntra: "https://www.myntra.com/"
        },
        {
          name: "Minimalist Sunscreen SPF 50",
          amazon: "https://www.amazon.in/",
          flipkart: "https://www.flipkart.com/",
          myntra: "https://www.myntra.com/"
        }
      ]);

      setLoading(false);
    }, 2500);
  };

  return (
    <section
      id="scan"
      className="min-h-screen pt-28 bg-white dark:bg-slate-800 px-6"
    >
      <h2 className="text-4xl font-bold text-center text-slate-800 dark:text-white">
        Face Scan
      </h2>

      <p className="text-center mt-3 text-slate-600 dark:text-slate-300">
        Upload your image and let GlowSense AI analyze your beauty
      </p>

      <div className="mt-10 flex flex-col items-center gap-6">
        {/* IMAGE UPLOAD */}
        <ImageUpload setImage={setImage} />

        {/* PREVIEW */}
        {image && (
          <div className="relative w-64">
            <img
              src={image}
              className="rounded-xl shadow-xl"
            />
            {loading && <ScanningEffect />}
          </div>
        )}

        {/* START SCAN BUTTON */}
        <button
          onClick={startScan}
          disabled={!image}
          className={`px-8 py-3 rounded-full text-white font-semibold transition
          ${
            image
              ? "bg-linear-to-r from-pink-500 to-purple-500 hover:scale-105"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Start Scan
        </button>
      </div>

      {/* RESULT */}
      {products.length > 0 && (
        <div className="mt-16">
          <h3 className="text-3xl font-semibold text-center mb-8">
            Recommended Products
          </h3>

          <ProductGrid products={products} />
        </div>
      )}
    </section>
  );
}










// ProductCard.jsx 

export default function ProductCard({ item }) {
  return (
    <div className="bg-white dark:bg-slate-800 p-5 rounded-xl shadow">
      <h3 className="font-semibold text-lg">{item.name}</h3>

      <div className="flex flex-wrap gap-3 mt-4">
        <a
          href={item.amazon}
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2 bg-yellow-400 rounded"
        >
          Amazon
        </a>

        <a
          href={item.flipkart}
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Flipkart
        </a>

        <a
          href={item.myntra}
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2 bg-pink-500 text-white rounded"
        >
          Myntra
        </a>
      </div>
    </div>
  );
}
