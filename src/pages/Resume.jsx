import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award, Download } from "lucide-react";

const experiences = [
  {
    role: "Software Engineer (Full Stack)",
    company: "Ecoviron / BionixEHS",
    period: "2024 — Present",
    description:
      "Developed scalable Spring Boot APIs, integrated with React frontends, and implemented real-time features such as notifications, chat, and location tracking.",
  },
  {
    role: "Odoo ERP Developer (Freelance)",
    company: "Various Clients",
    period: "2023 — 2024",
    description:
      "Configured and customized Odoo modules (CRM, Sales, Inventory), integrated REST APIs, and automated workflows for business efficiency.",
  },
];

const education = [
  {
    degree: "BSc. Computer Science",
    school: "Kenyatta University",
    period: "2020 — 2024",
    description:
      "Studied software engineering principles, data structures, databases, and full-stack development with Java, Python, and JavaScript.",
  },
];

const certifications = [
  {
    title: "Spring Boot & Microservices",
    issuer: "Udemy / Coursera",
    year: "2024",
  },
  {
    title: "Modern React & Next.js",
    issuer: "Frontend Masters",
    year: "2024",
  },
];

export default function Resume() {
  return (
    <section id="resume" className="py-20 bg-white dark:bg-gray-950 transition-colors">
      <div className="container">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title mb-4">Resume</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here’s an overview of my professional journey, education, and achievements.
          </p>
          <a
            href="/Joseph_Mbugua_Gitau_Resume.pdf"
            download
            className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors"
          >
            <Download className="w-5 h-5" />
            Download CV
          </a>
        </motion.div>

        {/* Experience */}
        <motion.div
          className="grid md:grid-cols-2 gap-10 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.2 }}
          viewport={{ once: true }}
        >
          <div>
            <h3 className="flex items-center gap-2 text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
              <Briefcase className="w-6 h-6 text-blue-500" />
              Experience
            </h3>
            <ul className="space-y-6">
              {experiences.map((exp, i) => (
                <motion.li
                  key={i}
                  className="border-l-2 border-blue-500 pl-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-semibold text-lg">{exp.role}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {exp.company} • {exp.period}
                  </p>
                  <p className="mt-2 text-gray-700 dark:text-gray-300 leading-relaxed">
                    {exp.description}
                  </p>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Education */}
          <div>
            <h3 className="flex items-center gap-2 text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
              <GraduationCap className="w-6 h-6 text-green-500" />
              Education
            </h3>
            <ul className="space-y-6">
              {education.map((edu, i) => (
                <motion.li
                  key={i}
                  className="border-l-2 border-green-500 pl-4"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-semibold text-lg">{edu.degree}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {edu.school} • {edu.period}
                  </p>
                  <p className="mt-2 text-gray-700 dark:text-gray-300 leading-relaxed">
                    {edu.description}
                  </p>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="flex items-center gap-2 text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
            <Award className="w-6 h-6 text-yellow-500" />
            Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                className="p-4 rounded-lg bg-gray-50 dark:bg-gray-900 ring-1 ring-gray-200 dark:ring-gray-800"
                whileHover={{ scale: 1.03 }}
              >
                <h4 className="font-semibold text-gray-800 dark:text-gray-100">
                  {cert.title}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {cert.issuer} • {cert.year}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
