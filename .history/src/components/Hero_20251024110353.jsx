import React from "react";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="text-center space-y-6 px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white">
          Hi, I’m <span className="text-green-600 dark:text-green-400">Joseph Mbugua</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
          Software Engineer | Java Spring Boot | React | Odoo ERP Integration
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#projects"
            className="bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 transition"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="border border-green-600 text-green-600 dark:text-green-400 px-6 py-3 rounded-lg hover:bg-green-600 hover:text-white transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
