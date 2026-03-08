import type { Tech } from "@/types/tech";

export type Project = {
  title: string;
  description: string;
  tech: Tech[];
  github: string;
  demo?: string;
  highlights?: string[];
};
