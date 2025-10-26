import React from "react";

export default function Resume() {
  return (
    <section className="py-20 container mx-auto">
      <h2 className="text-3xl font-bold mb-4">My Resume</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Here you can download or preview my resume.
      </p>
      <a
        href="/resume.pdf"
        download
        className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        Download Resume
      </a>
    </section>
  );
}
