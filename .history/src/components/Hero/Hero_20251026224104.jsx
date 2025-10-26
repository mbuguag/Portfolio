import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail, ChevronDown, Code2, Database, Zap, ArrowRight } from "lucide-react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const techStack = [
    { icon: Code2, label: "Spring Boot", color: "text-green-500" },
    { icon: Zap, label: "React", color: "text-blue-400" },
    { icon: Database, label: "Odoo ERP", color: "text-purple-500" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: "transform 0.3s ease-out",
          }}
        />
        <div
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse"
          style={{
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
            transition: "transform 0.3s ease-out",
            animationDelay: "1s",
          }}
        />
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container relative z-10 text-center py-24 px-4">
        {/* Main content */}
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Greeting badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Available for opportunities
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-gradient">
              Joseph Mbugua Gitau
            </span>
          </h1>

          <p className="mt-6 text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Software Engineer specializing in{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              scalable backends
            </span>{" "}
            and{" "}
            <span className="font-semibold text-purple-600 dark:text-purple-400">
              intuitive frontends
            </span>
            . Crafting robust solutions with modern technologies.
          </p>

          {/* Tech stack pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {techStack.map((tech, index) => (
              <div
                key={tech.label}
                className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <tech.icon className={`w-5 h-5 ${tech.color}`} />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {tech.label}
                </span>
              </div>
            ))}
          </div>

          {/* CTA buttons - Update these hrefs to match your routing */}
          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/projects"
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 font-semibold"
            >
              <span className="flex items-center justify-center gap-2">
                View Projects
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <a
              href="/contact"
              className="group px-8 py-4 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 font-semibold text-gray-700 dark:text-gray-300 hover:border-blue-500 dark:hover:border-blue-400"
            >
              <span className="flex items-center justify-center gap-2">
                <Mail className="w-5 h-5" />
                Contact Me
              </span>
            </a>
          </div>

          {/* Social links - Update with your actual profiles */}
          <div className="mt-12 flex justify-center gap-6">
            <a
              href="https://github.com/josephmbugua"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-xl hover:scale-110 transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/joseph-mbugua"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-xl hover:scale-110 transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:mbugua@example.com"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-xl hover:scale-110 transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gray-400 dark:text-gray-600" />
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
}