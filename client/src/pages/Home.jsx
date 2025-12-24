import { motion } from "framer-motion";

const Home = () => {
  const goToScan = () => {
    document.getElementById("scan").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-pink-200 via-purple-200 to-indigo-200 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"
    >
      {/* Moving Background */}
      <motion.div
        className="absolute -top-20 -left-20 w-96 h-96 bg-pink-400/30 rounded-full blur-3xl"
        animate={{ x: [0, 100, 0], y: [0, 80, 0] }}
        transition={{ repeat: Infinity, duration: 12 }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/30 rounded-full blur-3xl"
        animate={{ x: [0, -100, 0], y: [0, -80, 0] }}
        transition={{ repeat: Infinity, duration: 14 }}
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 text-center px-6 max-w-4xl"
      >
        <motion.img
          src="/Hero.png"
          alt="GlowSense AI Logo"
          className="w-screen dark:text-white"/>
       

        <p className="mt-6 text-lg md:text-xl text-slate-700 dark:text-slate-300">
          Scan your face, understand your skin, and discover beauty products
          that truly suit you.
        </p>

        <button
          onClick={goToScan}
          className="mt-10 px-10 py-4 rounded-full bg-pink-500 hover:bg-pink-600 text-white text-lg shadow-lg transition"
        >
          Start Scanning ✨
        </button>
      </motion.div>
    </section>
  );
};

export default Home;
