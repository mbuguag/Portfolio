import bionixImg from "../assets/bionix.png";
import norqproImg from "../assets/norqpro.png";
// optional placeholder for backend projects
// import backendImg from "../assets/backend.png";

export const projects = [
  {
    id: 1,
    title: "Bionix HSE Platform",
    type: "fullstack",
    description:
      "A full-stack Health, Safety & Environment management platform with incident reporting, dashboards, and role-based access.",
    image: bionixImg,
    tech: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "React",
      "Tailwind CSS",
      "REST API",
    ],
    live: "https://www.bionix-hse.co.ke",
    github: "https://github.com/mbuguag",
  },

  {
    id: 2,
    title: "Norqpro Africa Website",
    type: "fullstack",
    description:
      "Corporate website with backend services, CMS-style content management, and optimized SEO for a consultancy firm.",
    image: norqproImg,
    tech: ["Java", "Spring Boot", "PostgreSQL", "React", "Tailwind CSS"],
    live: "https://norqproafrica.co.ke",
    github: "https://github.com/mbuguag",
  },

  {
    id: 3,
    title: "TakaRide 2.0 API",
    type: "backend",
    description:
      "Backend for a ride-sharing application handling user management, ride booking, and driver workflows.",
    image: backendImg, // optional but recommended
    tech: ["Java", "Spring Boot", "REST API", "PostgreSQL", "JWT"],
    github:
      "https://github.com/mbuguag/TakaRide2.0/tree/master/src/main/java/com/example/TakaApp",
  },

  {
    id: 4,
    title: "User Management Service",
    type: "backend",
    description:
      "Enterprise-grade user and role management service with authentication, authorization, and audit logging.",
    image: backendImg,
    tech: ["Java", "Spring Boot", "Spring Security", "JWT", "PostgreSQL"],
    github: "https://github.com/mbuguag",
  },

  {
    id: 5,
    title: "Projects & Tasks API",
    type: "backend",
    description:
      "RESTful API for managing projects, tasks, and assignments with pagination and role-based access control.",
    image: backendImg,
    tech: ["Java", "Spring Boot", "REST API", "PostgreSQL"],
    github: "https://github.com/mbuguag",
  },
];
