import React from "react";

const projects = [
  {
    title: "Ecoviron - Eco Products Shop",
    desc: "React + Spring Boot eCommerce platform with eco product listings, filters, and dynamic carts.",
    link: "#",
  },
  {
    title: "Taka Ride App",
    desc: "Uber-like solid waste collection platform with real-time driver tracking and bookings.",
    link: "#",
  },
  {
    title: "Odoo ERP Integration",
    desc: "Custom Odoo module integrations for CRM and inventory synchronization.",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container">
        <h2 className="section-title text-center">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold text-green-600 dark:text-green-400">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-3">{project.desc}</p>
              <a
                href={project.link}
                className="inline-block mt-4 text-green-600 dark:text-green-400 hover:underline"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
