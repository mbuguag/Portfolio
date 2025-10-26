import React from "react";

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="section-title">About Me</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            I'm Joseph — a software engineer with practical experience building
            Java Spring Boot backends and React frontends.
            I enjoy designing systems that solve real-world problems and integrating
            them with tools like Odoo ERP.
          </p>

          <ul className="mt-6 grid grid-cols-2 gap-2 text-sm text-gray-600 dark:text-gray-400">
            <li><strong>Location:</strong> Nairobi, Kenya</li>
            <li><strong>Availability:</strong> Open to opportunities</li>
            <li><strong>Email:</strong> </li>
            <li><strong>GitHub:</strong> github.com/mbuguag</li>
          </ul>
        </div>

        <div className="flex justify-center">
          <div className="w-56 h-56 rounded-xl overflow-hidden ring-1 ring-gray-200 dark:ring-gray-700">
            <img
              src="/Profile.jpg"
              alt="Joseph Mbugua"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
