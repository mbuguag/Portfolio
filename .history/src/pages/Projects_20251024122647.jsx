import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award, Download } from "lucide-react";

const experiences = [
  {
    role: "Software Engineer (Full Stack)",
    company: "Ecoviron / BionixEHS",
    period: "2024 — Present",
    description:
      "Developed scalable Spring Boot APIs, integrated React frontends, and built real-time modules including chat, notifications, and location tracking.",
    skills: ["Spring Boot", "React", "PostgreSQL", "WebSockets"],
  },
  {
    role: "Odoo ERP Developer (Freelance)",
    company: "Various Clients",
    period: "2023 — 2024",
    description:
      "Configured and customized Odoo modules (CRM, Sales, Inventory), integrated REST APIs, and optimized business workflows for automation.",
    skills: ["Odoo ERP", "Python", "XML", "API Integration"],
  },
];

const education = [
  {
    degree: "BSc. Computer Science",
    school: "Kenyatta University",
    period: "2020 — 2024",
    description:
      "Studied software engineering, data structures, algorithms, and full-stack development in Java, Python, and JavaScript.",
  },
];

const certifications = [
  { title: "Spring Boot & Microservices", issuer: "Udemy / Coursera", year: "2024" },
  { title: "Modern React & Next.js", issuer: "Frontend Masters", year: "2024" },
];

export default function Resume() {
  return (
    <section id="resume" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 transition-colors">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
            Resume
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A snapshot of my professional journey, education, and certifications.
          </p>
          <a
            href="/Joseph_Mbugua_Gitau_Resume.pdf"
            download
            className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg hover:shadow-xl transition-transform hover:scale-105"
          >
            <Download className="w-5 h-5" />
            Download CV
          </a>
        </motion.div>

        {/* Experience & Education */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="flex items-center gap-2 text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
              <Briefcase className="w-6 h-6 text-green-500" />
              Experience
            </h3>
            <div className="space-y-8 relative before:absolute before:left-2 before:top-0 before:bottom-0 before:w-0.5 before:bg-green-500/40">
              {experiences.map((exp, i) => (
                <motion.div
                  key={i}
                  className="pl-8 relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute left-0 w-3 h-3 rounded-full bg-green-500 mt-2.5"></div>
                  <h4 className="font-semibold text-lg text-gray-900 dark:text-white">
                    {exp.role}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {exp.company} • {exp.period}
                  </p>
                  <p className="mt-2 text-gray-700 dark:text-gray-300 leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-2 py-1 rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="flex items-center gap-2 text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
              <GraduationCap className="w-6 h-6 text-blue-500" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  className="p-5 bg-gray-100 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm"
                  whileHover={{ scale: 1.02 }}
                >
                  <h4 className="font-semibold text-lg text-gray-900 dark:text-white">
                    {edu.degree}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {edu.school} • {edu.period}
                  </p>
                  <p className="mt-2 text-gray-700 dark:text-gray-300 leading-relaxed">
                    {edu.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

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
                className="p-5 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-green-500 dark:hover:border-green-600 transition-all"
                whileHover={{ scale: 1.03 }}
              >
                <h4 className="font-semibold text-gray-900 dark:text-white">
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
