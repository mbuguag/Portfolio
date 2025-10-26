import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award, Download } from "lucide-react";

import React from "react";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container">
        <h2 className="section-title text-center">Selected Projects</h2>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {projects.map((p) => (
            <article key={p.id} className="card p-0 overflow-hidden">
              <div className="md:flex">
                <img src={p.image} alt={p.title} className="w-full md:w-56 h-44 object-cover" />
                <div className="p-6 flex-1">
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">{p.description}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <small key={t} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs">{t}</small>
                    ))}
                  </div>

                  <div className="mt-4 flex gap-3">
                    {p.live ? (
                      <a href={p.live} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">Live</a>
                    ) : null}
                    {p.github ? (
                      <a href={p.github} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">GitHub</a>
                    ) : null}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

