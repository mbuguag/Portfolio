import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-gray-50 dark:bg-gray-950 transition-colors"
    >
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT: Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            About <span className="text-green-500">Me</span>
          </h2>

          <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            I'm{" "}
            <span className="font-semibold text-green-500">Joseph Mbugua</span>{" "}
            — a software engineer specializing in Java Spring Boot, React, and
            modern full-stack web applications.
          </p>

          <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            I build scalable, secure, and maintainable software solutions that
            solve real-world problems. Passionate about learning, AI
            integration, and delivering clean code.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            My mission is to turn complex ideas into elegant, high-performing
            applications that create impact for businesses and users alike.
          </p>
        </motion.div>

        {/* RIGHT: Photo */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-3xl overflow-hidden ring-2 ring-green-400 shadow-2xl">
            <img
              src="/Profile.jpg"
              alt="Joseph Mbugua"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
