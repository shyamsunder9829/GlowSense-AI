import { motion } from "framer-motion";

export default function LoaderScan() {
  return (
    <div className="relative w-60 h-60 md:w-80 md:h-80 border-4 border-pink-500 rounded-xl overflow-hidden">
      
      <motion.div
        className="absolute top-0 left-0 w-full h-1 bg-pink-500"
        animate={{ y: ["0%", "100%", "0%"] }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      <p className="absolute bottom-3 w-full text-center font-semibold text-pink-500">
        Scanning Face...
      </p>
    </div>
  );
}
