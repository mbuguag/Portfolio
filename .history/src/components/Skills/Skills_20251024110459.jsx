import React from "react";

const skills = [
  "Java", "Spring Boot", "React", "JavaScript", "Odoo ERP", "PostgreSQL", "TailwindCSS", "Docker", "Git", "REST APIs"
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <h2 className="section-title text-center">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mt-10">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-white dark:bg-gray-800 text-center p-4 rounded-xl shadow hover:shadow-lg transition"
            >
              <p className="text-gray-800 dark:text-gray-200 font-medium">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
