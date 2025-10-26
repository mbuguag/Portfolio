const projects = [
  {
    title: "Ecoviron E-commerce",
    description: "An eco-products e-commerce platform built with HTML5, CSS , JavaScript & Spring Boot backend.",
    image: "/project1.png",
    link: "https://www.bionix-hse.co.ke",
  },
  {
    title: "Odoo ERP Customization",
    description: "Implemented Odoo modules for CRM, Sales, Inventory & HR for business automation.",
    image: "/project2.png",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 container">
      <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((proj) => (
          <div key={proj.title} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            <img src={proj.image} alt={proj.title} className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{proj.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{proj.description}</p>
              <a href={proj.link} target="_blank" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200">View Project →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
