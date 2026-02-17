// import React from "react";
// import { motion } from "framer-motion";
// import { ExternalLink, Github, Server } from "lucide-react";
// import { projects } from "../data/projects";

// export default function Projects() {
//   return (
//     <section
//       id="projects"
//       className="py-20 bg-gray-50 dark:bg-gray-950 transition-colors"
//     >
//       <div className="container mx-auto px-4">
//         <motion.h2
//           className="section-title text-center mb-12"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           Featured Project
//         </motion.h2>

//         <div className="grid gap-10 md:grid-cols-2">
//           {projects.map((p, i) => (
//             <motion.article
//               key={p.id || i}
//               className="group bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all"
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: i * 0.1 }}
//             >
//               {/* Image (optional for backend projects) */}
//               {p.image && (
//                 <img
//                   src={p.image}
//                   alt={p.title}
//                   className="w-full h-52 object-cover border-b dark:border-gray-800"
//                   loading="lazy"
//                 />
//               )}

//               <div className="p-6">
//                 {/* Title + Type */}
//                 <div className="flex items-start justify-between gap-4">
//                   <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
//                     {p.title}
//                   </h3>

//                   {p.type === "backend" && (
//                     <span className="inline-flex items-center gap-1 px-2 py-1 text-xs rounded bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
//                       <Server size={14} />
//                       Backend
//                     </span>
//                   )}
//                 </div>

//                 {/* Description */}
//                 <p className="mt-3 text-gray-600 dark:text-gray-400 leading-relaxed">
//                   {p.description}
//                 </p>

//                 {/* Tech stack */}
//                 <div className="mt-4 flex flex-wrap gap-2">
//                   {p.tech?.map((t) => (
//                     <span
//                       key={t}
//                       className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded text-xs"
//                     >
//                       {t}
//                     </span>
//                   ))}
//                 </div>

//                 {/* Links */}
//                 <div className="mt-6 flex flex-wrap items-center gap-4">
//                   {p.live && (
//                     <a
//                       href={p.live}
//                       target="_blank"
//                       rel="noreferrer"
//                       className="inline-flex items-center gap-1 text-green-600 dark:text-green-400 hover:underline"
//                     >
//                       <ExternalLink size={16} />
//                       Live Demo
//                     </a>
//                   )}

//                   {p.github && (
//                     <a
//                       href={p.github}
//                       target="_blank"
//                       rel="noreferrer"
//                       className="inline-flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:underline"
//                     >
//                       <Github size={16} />
//                       Source Code
//                     </a>
//                   )}
//                 </div>
//               </div>
//             </motion.article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
