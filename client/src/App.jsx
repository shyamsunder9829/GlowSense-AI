import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Scan from "./pages/Scan";
import Contact from "./pages/Contact";
import { useState, useEffect } from "react";

export default function App() {
  const [theme, setTheme] = useState("light");
  const [open, setOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <>
      <Navbar theme={theme} setTheme={setTheme} setOpen={setIsOpen} />
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} theme={theme} setTheme={setTheme} />

      <Home />
      <Scan />
      <Contact />
    </>
  );
}
