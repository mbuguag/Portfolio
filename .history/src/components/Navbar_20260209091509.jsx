import React, { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const location = useLocation();

  // Apply theme to HTML element
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Resume", path: "/resume" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        <Link
          to="/"
          className="text-2xl font-bold text-green-600 dark:text-green-400"
        >
          JMG<span className="text-gray-700 dark:text-gray-300">.dev</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`hover:text-green-600 ${
                location.pathname === link.path
                  ? "text-green-600 font-semibold"
                  : "text-gray-700 dark:text-gray-200"
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? (
              <Moon className="text-gray-800" size={20} />
            ) : (
              <Sun className="text-yellow-400" size={20} />
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
          <div className="flex flex-col items-center py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={`block text-lg hover:text-green-600 ${
                  location.pathname === link.path
                    ? "text-green-600 font-semibold"
                    : "text-gray-700 dark:text-gray-200"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 text-gray-700 dark:text-gray-200"
            >
              {theme === "light" ? (
                <>
                  <Moon size={18} /> Dark Mode
                </>
              ) : (
                <>
                  <Sun size={18} /> Light Mode
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
