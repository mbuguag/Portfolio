import React from "react";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-gray-200 dark:border-gray-800 mt-12">
      <div className="container text-center text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} Joseph Mbugua Gitau • Built with React & Tailwind
      </div>
    </footer>
  );
}
