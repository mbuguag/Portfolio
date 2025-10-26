import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import Reveal from "./Reveal";

export default function Contact() {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => setSent(true),
        (error) => console.error(error)
      );
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container max-w-3xl text-center">
        <Reveal>
          <h2 className="section-title">Get In Touch</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Let’s connect! I’m open to collaborations, projects, and opportunities.
          </p>

          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <input
              name="user_name"
              type="text"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
            />
            <input
              name="user_email"
              type="email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
            >
              {sent ? "Message Sent!" : "Send Message"}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
