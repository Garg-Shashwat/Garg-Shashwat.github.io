import type { Project } from "@/types/project";

import { tech } from "./tech";

export const projects: Project[] = [
  {
    title: "Go User Authentication",
    description:
      "JWT-based authentication microservice supporting signup, login, token refresh and revocation.",
    github: "Go-User-Authentication",

    tech: [tech.go, tech.postgres, tech.docker],

    highlights: [
      "JWT authentication workflow",
      "Token refresh and revocation",
      "PostgreSQL persistence",
      "Dockerized deployment",
    ],
  },

  {
    title: "Express Compounds Display",
    description:
      "Full-stack chemical compound database with Express API, Angular frontend and MySQL backend.",
    github: "Express-Compounds-Display",

    tech: [tech.angular, tech.express, tech.mysql, tech.docker],

    highlights: [
      "REST API for compound data",
      "Angular frontend interface",
      "Docker Compose multi-service setup",
      "Sequelize ORM integration",
    ],
  },

  {
    title: "RL Snake Agent",
    description:
      "Reinforcement learning environment where two snake agents compete for food and survival.",
    github: "RL-snake-agent",

    tech: [tech.python],

    highlights: [
      "Multi-agent reinforcement learning",
      "Competitive grid simulation",
      "Food collection and combat behaviour",
      "Developed for Shaastra 2022",
    ],
  },

  {
    title: "Developer Portfolio",
    description:
      "Personal portfolio website built with React, Vite, Tailwind and Framer Motion.",
    github: "Garg-Shashwat.github.io",

    tech: [tech.react, tech.typescript],

    highlights: [
      "Animated UI using Framer Motion",
      "Responsive layout",
      "Component-driven architecture",
    ],
  },
];
