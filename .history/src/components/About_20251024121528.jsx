import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left text section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            About <span className="text-green-500">Me</span>
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            I'm <span className="font-semibold text-green-600 dark:text-green-400">Joseph Mbugua</span> —
            a software engineer specializing in Java Spring Boot and React. 
            My expertise includes building scalable APIs, modern frontends, and integrating
            business systems like Odoo ERP for process automation.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            I’m passionate about developing clean, efficient, and sustainable software solutions
            that bridge technology and everyday life. I also enjoy working on 
            eco-focused projects and platforms that create social impact.
          </p>

          <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-gray-600 dark:text-gray-400">
            <li><strong>🌍 Location:</strong> Nairobi, Kenya</li>
            <li><strong>📬 Email:</strong> mbuguajoseph498@gmail.com</li>
            <li><strong>💼 Availability:</strong> Open to opportunities</li>
            <li><strong>💻 GitHub:</strong> <a href="https://github.com/mbuguag" className="text-green-500 hover:underline">mbuguag</a></li>
          </ul>

          <div className="mt-8">
            <a
              href="/resume.pdf"
              download
              className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg shadow-md transition-transform hover:scale-105"
            >
              Download Resume
            </a>
          </div>
        </motion.div>

        {/* Right image section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="w-60 h-60 rounded-2xl overflow-hidden ring-2 ring-green-400 shadow-xl">
            <img
              src="/Profile.jpg"
              alt="Joseph Mbugua"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
