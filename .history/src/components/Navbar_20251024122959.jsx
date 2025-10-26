import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-sm z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-green-600 dark:text-green-400">
          Joseph Mbugua
        </Link>

        <div className="space-x-6 hidden md:flex">
          <NavLink to="/" className="hover:text-green-500" end>Home</NavLink>
          <NavLink to="/about" className="hover:text-green-500">About</NavLink>
          <NavLink to="/projects" className="hover:text-green-500">Projects</NavLink>
          <NavLink to="/resume" className="hover:text-green-500">Resume</NavLink>
          <NavLink to="/contact" className="hover:text-green-500">Contact</NavLink>
        </div>
      </div>
    </nav>
  );
}
