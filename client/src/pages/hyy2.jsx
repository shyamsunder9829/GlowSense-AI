// Scan.jsx 


import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ScanningEffect from "../components/ScanningEffect";
import ProductCard from "../components/ProductCard";

const Scan = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  /* ---------------- IMAGE UPLOAD ---------------- */
  const handleImage = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setImage(file);

    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);
  };

  /* ---------------- CLEANUP OBJECT URL ---------------- */
  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  /* ---------------- START SCAN ---------------- */
  const startScan = () => {
    if (!image) {
      alert("Please upload an image first");
      return;
    }

    setLoading(true);
    setProducts([]);

    setTimeout(() => {
      const generatedProducts = [
        {
          name: "Cetaphil Oily Skin Cleanser",
          amazon: "https://www.amazon.in/dp/B01CCGW4OE",
          flipkart:
            "https://www.flipkart.com/cetaphil-gentle-cleanser/p/itm",
          myntra:
            "https://www.myntra.com/face-wash/cetaphil",
        },
        {
          name: "Minimalist Niacinamide 10%",
          amazon: "https://www.amazon.in/dp/B08L5T8KJ9",
          flipkart:
            "https://www.flipkart.com/minimalist-niacinamide-serum/p/itm",
          myntra:
            "https://www.myntra.com/serum/minimalist",
        },
        {
          name: "Neutrogena Hydro Boost Gel",
          amazon: "https://www.amazon.in/dp/B01M4MCUAF",
          flipkart:
            "https://www.flipkart.com/neutrogena-hydro-boost/p/itm",
          myntra:
            "https://www.myntra.com/moisturizer/neutrogena",
        },
      ];

      setProducts(generatedProducts);
      setLoading(false);
    }, 2500);
  };

  /* ---------------- UI ---------------- */
  return (
    <section
      id="scan"
      className="relative min-h-screen px-6 py-20 bg-linear-to-br from-indigo-100 via-pink-100 to-purple-100 dark:from-slate-800 dark:to-slate-900"
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-10 bg-linear-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text"
        >
          AI Face Scan
        </motion.h2>

        <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-8">
          <input
            type="file"
            accept="image/*"
            onChange={handleImage}
            className="block mb-4"
          />

          {preview && (
            <img
              src={preview}
              alt="Preview"
              className="w-48 mx-auto rounded-xl mb-6"
            />
          )}

          <button
            onClick={startScan}
            disabled={loading}
            className="w-full bg-pink-500 hover:bg-pink-600 disabled:opacity-50 text-white py-3 rounded-xl transition"
          >
            {loading ? "Scanning..." : "Start Scan"}
          </button>

          {loading && <ScanningEffect />}

          {products.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
              {products
                .filter(Boolean)
                .map((item, index) => (
                  <ProductCard key={index} product={item} />
                ))}

            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Scan;







// ProductCard.jsx


const ProductCard = ({ product }) => {
  // 🛑 SAFETY CHECK
  if (!product) return null;

  const { name, amazon, flipkart, myntra } = product;

  return (
    <div className="bg-white dark:bg-slate-700 rounded-2xl p-5 shadow-lg hover:shadow-2xl transition">
      <h3 className="font-semibold text-lg text-slate-800 dark:text-white">
        {name || "Recommended Product"}
      </h3>

      <div className="flex flex-wrap gap-3 mt-4">
        {amazon && (
          <a
            href={amazon}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-full text-sm bg-orange-500 text-white"
          >
            Amazon
          </a>
        )}

        {flipkart && (
          <a
            href={flipkart}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-full text-sm bg-blue-500 text-white"
          >
            Flipkart
          </a>
        )}

        {myntra && (
          <a
            href={myntra}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-full text-sm bg-pink-500 text-white"
          >
            Myntra
          </a>
        )}
      </div>
    </div>
  );
};

// export default ProductCard;
