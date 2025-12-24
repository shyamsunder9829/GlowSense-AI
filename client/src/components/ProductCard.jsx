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

export default ProductCard;
