import { motion } from "framer-motion";
import { ServerCog, Network, Database, Cpu } from "lucide-react";

const highlights = [
  {
    title: "Systems Administration",
    description:
      "Windows Server operations, virtualization support, backup planning, and uptime-focused troubleshooting.",
    icon: ServerCog,
    accent: "text-cyan-600 dark:text-cyan-300",
  },
  {
    title: "Networking & Telephony",
    description:
      "Cisco ecosystem support, packet tracer-based diagnostics, and enterprise IP telephony maintenance.",
    icon: Network,
    accent: "text-emerald-600 dark:text-emerald-300",
  },
  {
    title: "Backend Engineering",
    description:
      "Java Spring Boot APIs, microservice design, JWT security, and reliable integrations for production systems.",
    icon: Database,
    accent: "text-indigo-600 dark:text-indigo-300",
  },
  {
    title: "ERP & Automation",
    description:
      "Odoo customization across business modules and AI-assisted workflows for faster incident resolution.",
    icon: Cpu,
    accent: "text-amber-600 dark:text-amber-300",
  },
];

export default function HomeHighlights() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
            Core Strengths
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Modern Engineering, End-to-End
          </h2>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-gray-800 dark:bg-gray-950"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-gray-100 p-3 dark:bg-gray-800">
                    <Icon className={`h-6 w-6 ${item.accent}`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      {item.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
