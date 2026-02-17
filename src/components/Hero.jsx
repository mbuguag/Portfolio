import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-950 transition-colors"
    >
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT: Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-green-500 font-medium mb-3">
             Hi, I’m
          </p>

          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
            Joseph <span className="text-green-500">Mbugua</span>
          </h1>

          <h2 className="mt-4 text-xl md:text-2xl text-gray-600 dark:text-gray-400">
            Software Engineer • Java Spring Boot • Angular • Odoo ERP
          </h2>

          <p className="mt-6 text-gray-700 dark:text-gray-300 max-w-xl leading-relaxed">
            I build scalable, secure, and user-centric web applications
            from enterprise backend systems to modern, high-performance frontends.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-green-600 hover:bg-green-700 text-white font-medium transition"
            >
              View Projects
            </a>

            <a
              href="/Joseph_Mbugua_Gitau_Resume.pdf"
              download
              className="px-6 py-3 rounded-full border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              Download CV
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-8 flex items-center gap-5">
            <a
              href="https://github.com/mbuguag"
              target="_blank"
              rel="noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-green-500 transition"
            >
              <Github size={22} />
            </a>

            <a
              href="https://linkedin.com/in/mbuguag"
              target="_blank"
              rel="noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-green-500 transition"
            >
              <Linkedin size={22} />
            </a>

            <a
              href="mailto:mbuguajoseph498@gmail.com"
              className="text-gray-600 dark:text-gray-300 hover:text-green-500 transition"
            >
              <Mail size={22} />
            </a>
          </div>
        </motion.div>

        {/* RIGHT: Visual / Image */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-green-500 blur-3xl opacity-20 rounded-full"></div>

            <div className="w-72 h-72 md:w-80 md:h-80 rounded-3xl overflow-hidden ring-2 ring-green-400 shadow-2xl relative z-10">
              <img
                src="/Profile.jpg"
                alt="Joseph Mbugua"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 flex justify-center w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <a
          href="#about"
          className="flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-green-500 transition"
        >
          <ArrowDown className="animate-bounce" />
          <span className="text-xs mt-1">Scroll</span>
        </a>
      </motion.div>
    </section>
  );
}
