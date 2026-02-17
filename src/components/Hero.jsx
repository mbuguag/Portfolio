import { motion } from "framer-motion";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  ServerCog,
  ShieldCheck,
  Network,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-gray-950 transition-colors"
    >
      <div className="pointer-events-none absolute -left-28 top-20 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-28 bottom-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* LEFT: Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700 dark:border-emerald-900 dark:bg-emerald-900/20 dark:text-emerald-300">
            Junior Systems Engineer | Backend Engineer
          </p>

          <h1 className="mt-5 text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
            Joseph <span className="text-green-500">Mbugua</span>
          </h1>

          <p className="mt-4 text-xl md:text-2xl text-gray-700 dark:text-gray-300">
            Building secure enterprise systems from infrastructure to APIs.
          </p>

          <p className="mt-5 text-gray-700 dark:text-gray-300 max-w-xl leading-relaxed">
            Hands-on with Windows Server, virtualization, network support, and
            backend engineering using Java Spring Boot, REST APIs, and Odoo ERP
            customization.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <span className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 text-gray-700 dark:bg-gray-900 dark:text-gray-300">
              <ServerCog size={16} /> Systems Infrastructure
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 text-gray-700 dark:bg-gray-900 dark:text-gray-300">
              <Network size={16} /> Network Operations
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 text-gray-700 dark:bg-gray-900 dark:text-gray-300">
              <ShieldCheck size={16} /> Secure API Engineering
            </span>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-green-600 hover:bg-green-700 text-white font-medium transition"
            >
              View Projects
            </a>
            <Link
              to="/about"
              className="px-6 py-3 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 dark:border-emerald-800 dark:bg-emerald-900/20 dark:text-emerald-300 dark:hover:bg-emerald-900/40 transition"
            >
              About Me
            </Link>

            <a
              href="/Joseph_Mbugua_Gitau_CV_IT.pdf"
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
          <div className="relative w-full max-w-md">
            <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-br from-emerald-500/25 to-cyan-500/25 blur-2xl" />

            <div className="relative z-10 overflow-hidden rounded-[2rem] border border-emerald-100 bg-white/80 p-5 shadow-2xl backdrop-blur dark:border-emerald-900 dark:bg-gray-900/70">
              <img
                src="/Profile.jpg"
                alt="Joseph Mbugua"
                className="h-72 w-full rounded-2xl object-cover"
              />
              <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                <div className="rounded-lg bg-gray-50 px-2 py-2 dark:bg-gray-800">
                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">3+</p>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400">Core Roles</p>
                </div>
                {/* <div className="rounded-lg bg-gray-50 px-2 py-2 dark:bg-gray-800">
                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">4</p>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400">Certifications</p>
                </div> */}
                <div className="rounded-lg bg-gray-50 px-2 py-2 dark:bg-gray-800">
                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">4</p>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400">Key Projects</p>
                </div>
              </div>
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
          href="#skills"
          className="flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-green-500 transition"
        >
          <ArrowDown className="animate-bounce" />
          <span className="text-xs mt-1">Scroll</span>
        </a>
      </motion.div>
    </section>
  );
}
