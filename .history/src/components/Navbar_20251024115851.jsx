import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Moon, Sun } from "lucide-react";

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm z-50">
      <nav className="container flex items-center justify-between py-4">
        <h1 className="text-xl font-bold text-green-600 dark:text-green-400">Joseph Mbugua</h1>

        <ul className="hidden md:flex gap-8 text-gray-700 dark:text-gray-200">
          {["Home", "About", "Skills",  "Projects", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-green-500 transition-colors duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Toggle button */}
        <button
          onClick={toggleTheme}
          className="ml-6 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition"
        >
          {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
        </button>
      </nav>
    </header>
  );
}
