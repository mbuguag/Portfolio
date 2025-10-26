import React, { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    // simple mailto fallback (replace with EmailJS or backend later)
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;
    window.location.href = `mailto:your.email@example.com?subject=Portfolio%20Contact%20from%20${encodeURIComponent(name)}&body=${encodeURIComponent(message + "\n\nFrom: " + email)}`;
    setSent(true);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container max-w-xl">
        <h2 className="section-title text-center">Contact</h2>

        <form onSubmit={onSubmit} className="mt-8 space-y-4">
          <input name="name" required placeholder="Your name" className="w-full p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800" />
          <input name="email" type="email" required placeholder="Your email" className="w-full p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800" />
          <textarea name="message" rows="6" required placeholder="Your message" className="w-full p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"></textarea>
          <button className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg">Send message</button>
          {sent && <p className="text-sm text-green-600">Mail client opened — you can send the email now.</p>}
        </form>
      </div>
    </section>
  );
}
