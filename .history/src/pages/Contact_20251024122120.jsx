import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("idle");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("sent");
          form.current.reset();
          setTimeout(() => setStatus("idle"), 4000);
        },
        (error) => {
          console.error(error);
          setStatus("error");
          setTimeout(() => setStatus("idle"), 4000);
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container max-w-3xl text-center px-4 mx-auto">
        <motion.h2
          className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>

        <motion.p
          className="text-gray-600 dark:text-gray-400 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Let’s connect! I’m open to collaborations, projects, and opportunities.
        </motion.p>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-4 text-left"
        >
          <input
            name="user_name"
            type="text"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-green-500 outline-none transition"
          />
          <input
            name="user_email"
            type="email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-green-500 outline-none transition"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-green-500 outline-none transition"
          ></textarea>

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full flex justify-center items-center bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition disabled:opacity-60"
          >
            {status === "sending" ? "Sending..." : status === "sent" ? "✅ Message Sent!" : "Send Message"}
          </button>
        </form>

        {status === "error" && (
          <p className="text-red-500 mt-4">❌ Failed to send message. Please try again.</p>
        )}

        <motion.div
          className="flex justify-center gap-6 mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <a href="mailto:youremail@example.com" className="text-gray-600 dark:text-gray-300 hover:text-green-500">
            <Mail size={24} />
          </a>
          <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-green-500">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-green-500">
            <Linkedin size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
