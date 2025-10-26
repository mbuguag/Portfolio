import React from "react";

const skills = [
  "Java", "Spring Boot", "React", "JavaScript", "Tailwind CSS",
  "Odoo ERP", "PostgreSQL", "Docker", "REST APIs", "Git"
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <h2 className="section-title text-center">Skills</h2>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {skills.map((s) => (
            <span key={s} className="px-4 py-2 rounded-lg bg-white dark:bg-gray-700 shadow text-sm">
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
