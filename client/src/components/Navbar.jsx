import { Sun, Moon, Menu } from "lucide-react";

export default function Navbar({ theme, setTheme, setOpen }) {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white dark:bg-slate-900 shadow">
      <div className="h-16 px-6 flex items-center">
        <img className="h-6 object-cover w-6 mt-1" src="Logo.png" alt="" />
        <h1 className="text-3xl pl-2 font-extrabold bg-linear-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
          GlowSense AI
        </h1>

        {/* DESKTOP */}
        <div className="hidden md:flex ml-auto gap-8 items-cente dark:text-white font-medium">
          <a href="#home">Home</a>
          <a href="#scan">Scan</a>
          <a href="#contact">Contact</a>

          <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "dark" ? <Sun /> : <Moon />}
          </button>
        </div>

        {/* MOBILE */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden ml-auto dark:text-white"
        >
          <Menu />
        </button>
      </div>
    </nav>
  );
}
