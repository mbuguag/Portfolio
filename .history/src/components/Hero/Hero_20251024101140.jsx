import React from "react";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container text-center py-24">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
          Hi, I’m <span className="text-blue-600">Joseph Mbugua Gitau</span>
        </h1>
        <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Software Engineer — I build scalable backends and clean frontends.
          Main stack: Spring Boot, React, Odoo ERP integrations.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <a href="#projects" className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
            View Projects
          </a>
          <a href="mailto:your.email@example.com" className="px-6 py-3 border rounded-lg border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
