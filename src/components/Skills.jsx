import React from "react";
import { motion } from "framer-motion";
import { Code, Database, Globe, Layers } from "lucide-react";

const skillsData = [
  {
    category: "Frontend",
    icon: <Globe className="w-6 h-6 text-blue-500" />,
    skills: [
      { name: "React / Next.js", level: 90 },
      { name: "JavaScript (ES6+)", level: 85 },
      { name: "Tailwind CSS", level: 80 },
      { name: "HTML / CSS", level: 95 },
    ],
  },
  {
    category: "Backend",
    icon: <Database className="w-6 h-6 text-green-500" />,
    skills: [
      { name: "Java Spring Boot", level: 90 },
      { name: "RESTful APIs", level: 88 },
      { name: "PostgreSQL / MySQL", level: 80 },
      { name: "JWT / OAuth Security", level: 75 },
    ],
  },
  {
    category: "Tools & DevOps",
    icon: <Layers className="w-6 h-6 text-purple-500" />,
    skills: [
      { name: "Git / GitHub", level: 90 },
      { name: "Docker", level: 75 },
      { name: "CI/CD (GitHub Actions)", level: 70 },
      { name: "Linux / Ubuntu", level: 85 },
    ],
  },
  {
    category: "Other Technologies",
    icon: <Code className="w-6 h-6 text-yellow-500" />,
    skills: [
      { name: "Odoo ERP (CRM, Sales, Inventory)", level: 80 },
      { name: "Firebase / FCM", level: 70 },
      { name: "Flutter Integration", level: 65 },
      { name: "WebSockets / Real-time Systems", level: 78 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-950 transition-colors">
      <div className="container">
        <motion.h2
          className="section-title text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Skills & Expertise
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillsData.map((group, i) => (
            <motion.div
              key={i}
              className="p-6 rounded-2xl bg-white dark:bg-gray-900 shadow-sm ring-1 ring-gray-100 dark:ring-gray-800"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                {group.icon}
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                  {group.category}
                </h3>
              </div>

              <div className="space-y-4">
                {group.skills.map((skill, j) => (
                  <div key={j}>
                    <div className="flex justify-between mb-1 text-sm text-gray-700 dark:text-gray-300">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-green-400 to-blue-500 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
