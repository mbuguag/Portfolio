import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-20 bg-gray-50 dark:bg-gray-900"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            About <span className="text-green-500">Me</span>
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            I'm <span className="font-semibold text-green-600 dark:text-green-400">Joseph Mbugua</span> — a software engineer specializing in Java Spring Boot and React.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Passionate about building scalable and sustainable software solutions that drive impact.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-60 h-60 rounded-2xl overflow-hidden ring-2 ring-green-400 shadow-xl">
            <img
              src="/Profile.jpg"
              alt="Joseph Mbugua"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
