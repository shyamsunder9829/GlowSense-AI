import { X, Sun, Moon } from "lucide-react";

const Sidebar = ({ isOpen, setIsOpen, theme, setTheme }) => {
  return (
    <>
      {/* BACKDROP */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-900
        z-50 transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* CLOSE BUTTON */}
        <button
          className="absolute top-4 right-4 dark:text-white"
          onClick={() => setIsOpen(false)}
        >
          <X />
        </button>

        {/* CONTENT */}
        <nav className="mt-16 flex flex-col gap-6 px-6 text-lg dark:text-white">
          <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#scan" onClick={() => setIsOpen(false)}>Scan</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>

          {/* THEME TOGGLE */}
          <button
            onClick={() =>
              setTheme(theme === "dark" ? "light" : "dark")
            }
            className="mt-6 flex items-center gap-3 px-4 py-2 rounded-lg
            bg-gray-100 dark:bg-gray-800"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            <span className="text-sm">
              {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </span>
          </button>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
