import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Ecoviron E-commerce",
    description:
      "An eco-products e-commerce platform built with HTML5, CSS, JavaScript & Spring Boot backend. Features product catalog, SEO optimization, and order management.",
    image: "/Bionix.png",
    tech: ["HTML5", "CSS", "JavaScript", "Spring Boot"],
    link: "https://www.bionix-hse.co.ke",
  },
  {
    title: "Odoo ERP Customization",
    description:
      "Customized and implemented Odoo ERP modules for CRM, Sales, Inventory, and HR to automate business processes and improve efficiency.",
    image: "/Odoo.png",
    tech: ["Odoo ERP", "Python", "PostgreSQL"],
    link: "#",
  },
  {
    title: "Taka Ride Backend",
    description:
      "A Spring Boot REST API backend for a waste collection ride-hailing platform with JWT auth, WebSockets, and FCM notifications.",
    image: "/TakaApp.png",
    tech: ["Spring Boot", "JWT", "WebSocket", "PostgreSQL"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((proj, index) => (
            <motion.div
              key={proj.title}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:-translate-y-2 transition transform duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="overflow-hidden">
                <motion.img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {proj.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                  {proj.description}
                </p>

                {/* Tech stack badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {proj.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 px-2 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-green-600 dark:text-green-400 font-medium hover:underline"
                >
                  View Project <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
