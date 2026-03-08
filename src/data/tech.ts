import {
  FaAngular,
  FaDocker,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import {
  SiExpress,
  SiGodotengine,
  SiMysql,
  SiPostgresql,
  SiTypescript,
} from "react-icons/si";

import type { Tech } from "@/types/tech";

export const tech = {
  angular: { name: "Angular", icon: FaAngular },
  react: { name: "React", icon: FaReact },
  typescript: { name: "TypeScript", icon: SiTypescript },
  node: { name: "Node.js", icon: FaNodeJs },
  python: { name: "Python", icon: FaPython },
  go: { name: "Go", icon: FaGolang },
  docker: { name: "Docker", icon: FaDocker },
  godot: { name: "Godot", icon: SiGodotengine },

  express: { name: "Express", icon: SiExpress },
  postgres: { name: "PostgreSQL", icon: SiPostgresql },
  mysql: { name: "MySQL", icon: SiMysql },
} satisfies Record<string, Tech>;
