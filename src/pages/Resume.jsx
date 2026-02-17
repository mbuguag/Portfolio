import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award, Download, FolderKanban } from "lucide-react";

const experiences = [
  {
    role: "Software Developer & Systems Administrator",
    company: "Smoothtel and Data Solutions",
    period: "October 2024 — Present",
    description:
      "Manage Windows Server infrastructure and virtualization environments, implement backup and monitoring solutions, administer Odoo ERP modules, and develop backend services using Spring Boot and REST APIs.",
  },
  {
    role: "Software Engineer Graduate Trainee",
    company: "Tangazoletu Limited",
    period: "February 2024 — May 2024",
    description:
      "Completed enterprise software engineering training focused on Java Spring Boot and Angular, and designed secure REST APIs with microservices architecture.",
  },
  {
    role: "ICT Intern",
    company: "Caritas Microfinance Bank",
    period: "June 2023 — August 2023",
    description:
      "Provided hardware/software support, system maintenance, and operational assistance for internal digital banking workflows.",
  },
];

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    school: "Kirinyaga University",
    period: "2020 — 2024",
    description:
      "Second Class Honours (Lower Division), GPA 3.1.",
  },
];

const certifications = [
  {
    title: "Cisco DevNet Associate (201-900)",
    issuer: "Cisco",
    year: "Completed",
  },
  {
    title: "Spring Boot Fundamentals",
    issuer: "Amigoscode",
    year: "Completed",
  },
  {
    title: "Frontend Development with Angular",
    issuer: "freeCodeCamp",
    year: "Completed",
  },
  {
    title: "Python Essentials",
    issuer: "Cisco Networking Academy",
    year: "Completed",
  },
];

const keyProjects = [
  {
    title: "Norqpro Africa - HSE Compliance & Safety Solutions Platform",
    tech: "Odoo v19",
    description:
      "Developed an Odoo-powered compliance platform with service catalog, e-commerce flows, and customized modules for compliance tracking, training management, and client portal operations.",
  },
  {
    title: "Ecoviron - E-commerce & Environmental Consultancy Platform",
    tech: "Spring Boot, JavaScript, HTML/CSS, PostgreSQL",
    description:
      "Built backend APIs for product management, authentication, order processing, and content publishing, with secure payments, automated notifications, and SEO-focused responsive UI integration.",
  },
  {
    title: "Taka Ride - Waste Collection & Ride-Hailing Platform",
    tech: "Java, Spring Boot, PostgreSQL, WebSocket, JWT",
    description:
      "Engineered backend services with JWT-based role access, real-time driver tracking via WebSocket, and booking workflows with status updates and automated notifications.",
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
            Junior Systems Engineer and Backend Engineer with hands-on experience in systems infrastructure, networking, enterprise support, and backend development.
          </p>
          <a
            href="/Joseph_Mbugua_Gitau_CV_IT.pdf"
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

        {/* Key Projects */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="flex items-center gap-2 text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
            <FolderKanban className="w-6 h-6 text-indigo-500" />
            Key Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {keyProjects.map((project, i) => (
              <motion.div
                key={i}
                className="p-5 rounded-lg bg-gray-50 dark:bg-gray-900 ring-1 ring-gray-200 dark:ring-gray-800"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="font-semibold text-gray-800 dark:text-gray-100">{project.title}</h4>
                <p className="text-sm text-indigo-600 dark:text-indigo-300 mt-1">{project.tech}</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2 leading-relaxed">
                  {project.description}
                </p>
              </motion.div>
            ))}
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
