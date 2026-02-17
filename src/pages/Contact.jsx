import React, { useEffect, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const isEmailConfigured = Boolean(
  EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY
);

export default function Contact() {
  const form = useRef();
  const resetTimer = useRef(null);
  const [status, setStatus] = useState({
    type: "idle",
    message: "",
  });

  useEffect(() => {
    return () => {
      if (resetTimer.current) {
        clearTimeout(resetTimer.current);
      }
    };
  }, []);

  const setTransientStatus = (type, message, timeout = 4000) => {
    setStatus({ type, message });
    if (resetTimer.current) {
      clearTimeout(resetTimer.current);
    }
    resetTimer.current = setTimeout(() => {
      setStatus({ type: "idle", message: "" });
    }, timeout);
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    if (status.type === "sending") return;

    if (!isEmailConfigured) {
      setStatus({
        type: "error",
        message:
          "Contact form is temporarily unavailable. Please use email: mbuguajoseph498@gmail.com",
      });
      return;
    }

    const formElement = form.current;
    if (!formElement) {
      setTransientStatus("error", "Form not ready. Please refresh and try again.");
      return;
    }

    const formData = new FormData(formElement);
    const userName = String(formData.get("user_name") || "").trim();
    const userEmail = String(formData.get("user_email") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const website = String(formData.get("website") || "").trim();

    if (website) {
      setStatus({ type: "sent", message: "Message sent successfully." });
      formElement.reset();
      return;
    }

    if (userName.length < 2 || message.length < 10) {
      setTransientStatus(
        "error",
        "Please provide your full name and a more detailed message."
      );
      return;
    }

    setStatus({ type: "sending", message: "Sending your message..." });

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          user_name: userName,
          user_email: userEmail,
          message,
          reply_to: userEmail,
        },
        EMAILJS_PUBLIC_KEY
      );

      formElement.reset();
      setTransientStatus("sent", "Message sent successfully.");
    } catch (error) {
      console.error("Email send failed:", error);
      setTransientStatus(
        "error",
        "Failed to send message. Please try again or email me directly."
      );
    }
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
            name="website"
            type="text"
            tabIndex="-1"
            autoComplete="off"
            className="hidden"
            aria-hidden="true"
          />
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
            disabled={status.type === "sending" || !isEmailConfigured}
            className="w-full flex justify-center items-center bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status.type === "sending"
              ? "Sending..."
              : status.type === "sent"
                ? "Message Sent"
                : "Send Message"}
          </button>
        </form>

        {status.type === "error" && (
          <p className="text-red-500 mt-4">{status.message}</p>
        )}
        {status.type === "sent" && (
          <p className="text-green-600 dark:text-green-400 mt-4">
            {status.message}
          </p>
        )}
        {!isEmailConfigured && status.type !== "error" && (
          <p className="text-amber-600 dark:text-amber-400 mt-4">
            Email service is not configured. Add EmailJS environment variables
            to enable this form.
          </p>
        )}

        <motion.div
          className="flex justify-center gap-6 mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <a
            href="mailto:mbuguajoseph498@gmail.com"
            className="text-gray-600 dark:text-gray-300 hover:text-green-500"
          >
            <Mail size={24} />
          </a>
          <a
            href="https://github.com/mbuguag"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-green-500"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/mbuguag"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-green-500"
          >
            <Linkedin size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
