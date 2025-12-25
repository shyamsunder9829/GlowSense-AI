import { useEffect, useState } from "react";
import { Moon, Sun, X } from "lucide-react";

const Sidebar = ({ open, setOpen }) => {
  const [dark, setDark] = useState(true);

  // Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      document.documentElement.classList.remove("dark");
      setDark(false);
    }
  }, []);

  const toggleTheme = () => {
    if (dark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDark(!dark);
  };

  return (
    <div
      className={`fixed inset-y-0 left-0 z-40 w-64 bg-white dark:bg-slate-900 shadow-xl
      transform transition-transform duration-300
      ${open ? "translate-x-0" : "-translate-x-full"}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4 border-b dark:border-slate-700">
        <h2 className="text-xl font-bold text-pink-500">GlowSense AI</h2>
        <button onClick={() => setOpen(false)}>
          <X className="text-gray-600 dark:text-gray-300" />
        </button>
      </div>

      {/* Links */}
      <nav className="flex flex-col gap-4 px-6 py-6 dark:text-white text-xl">
        <a href="#home" className="hover:text-pink-500">Home</a>
        <a href="#scan" className="hover:text-pink-500">Scan</a>
        <a href="#contact" className="hover:text-pink-500">Contact</a>
      </nav>

      {/* Theme Toggle */}
      <div className="mt-auto px-6 py-6 border-t dark:border-slate-700">
        <button
          onClick={toggleTheme}
          className="flex items-center gap-3 px-4 py-2 rounded-lg
          bg-pink-500 text-white w-full justify-center hover:bg-pink-600"
        >
          {dark ? <Sun size={18} /> : <Moon size={18} />}
          {dark ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
