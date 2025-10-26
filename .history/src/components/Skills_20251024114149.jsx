import React from "react";
import { motion } from "framer-motion";
import { SiSpringboot, SiReact, SiJavascript, SiTailwindcss, SiPostgresql, SiDocker, SiGithub, SiPython } from "react-icons/si";
import { FaJava, FaLinux } from "react-icons/fa";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", icon: <SiReact className="text-sky-500" />, level: 90 },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" />, level: 85 },
      { name: "JavaScript (ES6+)", icon: <SiJavascript className="text-yellow-400" />, level: 88 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Java Spring Boot", icon: <SiSpringboot className="text-green-500" />, level: 92 },
      { name: "Python", icon: <SiPython className="text-blue-500" />, level: 80 },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" />, level: 75 },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "Docker", icon: <SiDocker className="text-sky-400" />, level: 70 },
      { name: "Git & GitHub", icon: <SiGithub className="text-gray-800 dark:text-gray-200" />, level: 88 },
      { name: "Linux / Ubuntu", icon: <FaLinux className="text-orange-400" />, level: 78 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Technical Skills
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, i) => (
            <motion.div
              key={i}
              className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-6 text-green-600 dark:text-green-400 border-b border-gray-200 dark:border-gray-700 pb-2">
                {category.title}
              </h3>

              <ul className="space-y-4">
                {category.skills.map((skill, j) => (
                  <motion.li
                    key={j}
                    className="flex items-center justify-between"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: j * 0.15 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{skill.icon}</span>
                      <span className="font-medium text-gray-800 dark:text-gray-200">
                        {skill.name}
                      </span>
                    </div>
                    <div className="w-1/2 bg-gray-200 dark:bg-gray-700 h-2 rounded-full overflow-hidden ml-4">
                      <motion.div
                        className="bg-green-500 h-full rounded-full"
                        style={{ width: `${skill.level}%` }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.2, delay: 0.2 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
