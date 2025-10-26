import React from "react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <div className="container flex items-center justify-between py-3">
        <a href="#home" className="text-xl font-bold text-blue-600">Mbugua.Dev</a>

        <nav className="hidden md:flex gap-6 items-center text-sm text-gray-700 dark:text-gray-300">
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#skills" className="hover:text-blue-600">Skills</a>
          <a href="#projects" className="hover:text-blue-600">Projects</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
          <a
            href="/resume.pdf"
            className="ml-4 inline-block px-4 py-2 text-sm border rounded-md border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition"
            download
          >
            Resume
          </a>
        </nav>

        {/* mobile placeholder (expand later if you want a menu) */}
        <div className="md:hidden text-sm text-gray-700 dark:text-gray-300">
          <a href="#projects" className="px-3 py-1 bg-blue-600 text-white rounded-md">View Work</a>
        </div>
      </div>
    </header>
  );
}
