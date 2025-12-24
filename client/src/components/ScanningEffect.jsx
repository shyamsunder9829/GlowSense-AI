import { motion } from "framer-motion";

const ScanningEffect = () => {
  return (
    <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />

      {/* Scanning line */}
      <motion.div
        initial={{ y: "-100%" }}
        animate={{ y: "100%" }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-0 w-full h-70 bg-linear-to-r from-pink-400 via-purple-500 to-pink-400 shadow-lg animate-ping opacity-40"
      />

      {/* Text */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm font-semibold text-white tracking-wide">
        Analyzing face...
      </div>
    </div>
  );
};

export default ScanningEffect;
