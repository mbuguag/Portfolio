export default function Hero() {
  return (
    <section id="home" className="flex flex-col items-center justify-center text-center min-h-screen px-6">
      <h1 className="text-4xl sm:text-6xl font-bold mb-4">
        Hi, I'm <span className="text-blue-600">Joseph Mbugua Gitau</span>
      </h1>
      <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
        A passionate Software Engineer specializing in modern web applications, Odoo ERP, and Spring Boot systems integration.
      </p>
      <div className="mt-8 flex gap-4">
        <a href="#projects" className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">View Projects</a>
        <a href="#contact" className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition">Get In Touch</a>
      </div>
    </section>
  );
}
