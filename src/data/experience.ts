export type Experience = {
  company: string;
  role: string;
  location?: string;
  period: string;
  highlights: string[];
};

export const experience: Experience[] = [
  {
    company: "Nielsen",
    role: "Member of Technical Staff - 2",
    location: "Gurugram, India",
    period: "Mar 2026 - Present",
    highlights: [
      "Working on large-scale data and analytics systems powering media measurement platforms.",
      "Building backend services and internal tools to improve data processing reliability and system performance.",
    ],
  },
  {
    company: "NuvertOS",
    role: "Full Stack Developer (SDE-1)",
    location: "Noida, India",
    period: "Jan 2025 - Feb 2026",
    highlights: [
      "Built and optimized workflows for ophthalmic diagnosis, keratometry, and optometry systems.",
      "Designed and developed a procurement module used across 100+ hospital centers.",
      "Reduced stock-out incidents by 25% by improving supply-chain tracking.",
    ],
  },
  {
    company: "BYJU'S",
    role: "Member of Technical Staff - 1",
    location: "Gurugram, India",
    period: "Oct 2023 - Dec 2024",
    highlights: [
      "Implemented server-driven UI nesting logic enabling complex layouts across 4+ device types.",
      "Reduced API latency by 50% by redesigning exam-prep data models.",
      "Managed backend services supporting 1M+ users.",
    ],
  },
  {
    company: "BYJU'S",
    role: "Member of Technical Staff - Trainee",
    location: "Gurugram, India",
    period: "Jan 2023 - Sep 2023",
    highlights: [
      "Contributed to full-stack development of the BTLA platform.",
      "Optimized Node.js APIs and PostgreSQL queries for faster dashboard performance.",
    ],
  },
];
