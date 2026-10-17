import type { Tech } from "@/types/tech";

export type Project = {
  title: string;
  description: string;
  tech: Tech[];
  /** Repo name under the GitHub profile; omit for a private repo. */
  github?: string;
  demo?: string;
  highlights?: string[];
};
