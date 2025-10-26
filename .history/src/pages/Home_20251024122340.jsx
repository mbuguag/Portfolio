import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container text-center space-y-8 px-6 max-w-3xl">
        {/* Animated Heading */}
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
              >
                  
                  
          Hi, I’m{" "}
          <span className="text-green-600 dark:text-green-400">
            Joseph Mbugua
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Software Engineer specializing in{" "}
          <span className="font-semibold text-green-600 dark:text-green-400">
            Java Spring Boot
          </span>
          ,{" "}
          <span className="font-semibold text-green-600 dark:text-green-400">
            React
          </span>
          , and{" "}
          <span className="font-semibold text-green-600 dark:text-green-400">
            Odoo ERP Integration
          </span>
          .
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <a
            href="/projects"
            className="bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 transition"
          >
            View My Work
          </a>
          <a
            href="/contact"
            className="border border-green-600 text-green-600 dark:text-green-400 px-6 py-3 rounded-lg hover:bg-green-600 hover:text-white transition"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-6 pt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <a
            href="mailto:youremail@example.com"
            className="text-gray-600 dark:text-gray-300 hover:text-green-500"
          >
            <Mail size={26} />
          </a>
          <a
            href="https://github.com/yourgithub"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-green-500"
          >
            <Github size={26} />
          </a>
          <a
            href="https://linkedin.com/in/yourlinkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-green-500"
          >
            <Linkedin size={26} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
