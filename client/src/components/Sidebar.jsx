import { X } from "lucide-react";
import { Sun, Moon } from "lucide-react";


export default function Sidebar({  theme, setTheme,  open, setOpen }) {
  return (
    <div
      className={`fixed inset-0 z-50 transition dark:text-white ${
        open ? "block" : "hidden"
      }`}
    >
      <div
        onClick={() => setOpen(false)}
        className="absolute inset-0 bg-black/40"
      />

      <aside className="relative w-64 h-full bg-white dark:bg-slate-900 p-6">
        <button onClick={() => setOpen(false)} className="mb-6">
          <X />
        </button>

        <nav className="flex flex-col gap-4">
          <a onClick={() => setOpen(false)} href="#home">Home</a>
          <a onClick={() => setOpen(false)} href="#scan">Scan</a>
          <a onClick={() => setOpen(false)} href="#contact">Contact</a>
           
        </nav>
      </aside>
    </div>
  );
}
