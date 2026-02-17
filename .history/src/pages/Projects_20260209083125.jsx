import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "../data/projects"; // make sure this file exports your project list

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-950 transition-colors">
      <div className="container">
        <motion.h2
          className="section-title text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>

        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.article
              key={p.id || i}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-52 object-cover border-b dark:border-gray-800"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">{p.title}</h3>
                <p className="mt-3 text-gray-600 dark:text-gray-400">{p.description}</p>

                {/* Tech tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech?.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded text-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-5 flex items-center gap-4">
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center text-green-600 dark:text-green-400 hover:underline"
                    >
                      <ExternalLink size={16} className="mr-1" /> Live Demo
                    </a>
                  )}
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center text-gray-700 dark:text-gray-300 hover:underline"
                    >
                      <Github size={16} className="mr-1" /> Source Code
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
