const skills = [
  "Java", "Spring Boot", "Python", "React", "Tailwind CSS",
  "Odoo ERP", "PostgreSQL", "Docker", "REST APIs", "Git"
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-800">
      <h2 className="text-3xl font-bold mb-10 text-center">Skills</h2>
      <div className="flex flex-wrap justify-center gap-3">
        {skills.map((skill) => (
          <span key={skill} className="px-4 py-2 bg-white dark:bg-gray-700 shadow rounded-lg">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
