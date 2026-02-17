import { motion } from "framer-motion";
import { ExternalLink, Github, Server } from "lucide-react";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 bg-gray-50 dark:bg-gray-950 transition-colors"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>

        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover border-b dark:border-gray-800"
              />

              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
                    {project.title}
                  </h3>

                  {project.type === "backend" && (
                    <span className="flex items-center gap-1 text-xs px-2 py-1 rounded bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                      <Server size={14} />
                      Backend
                    </span>
                  )}
                </div>

                <p className="mt-3 text-gray-600 dark:text-gray-400">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-6 flex items-center gap-5">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center text-green-600 dark:text-green-400 hover:underline"
                    >
                      <ExternalLink size={16} className="mr-1" />
                      Live Demo
                    </a>
                  )}

                  {/* {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center text-gray-700 dark:text-gray-300 hover:underline"
                    >
                      <Github size={16} className="mr-1" />
                      Source Code
                    </a>
                  )} */}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

