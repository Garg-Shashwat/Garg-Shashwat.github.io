/** Sikka: an expense and shared-money tracking app (Android). Public pages live under /sikka/. */
export const sikka = {
  developer: "Shashwat Garg",
  /** Footer links. Own copy rather than siteConfig, so the site's contact email isn't bundled into these pages. */
  links: {
    github: "https://github.com/Garg-Shashwat/",
    linkedin: "https://www.linkedin.com/in/g-shashwat/",
  },
  /** City whose courts handle disputes under the terms. Empty: "the courts of India". */
  jurisdictionCity: "",
  pages: [
    { id: "overview", label: "Overview", href: "/sikka/" },
    { id: "changelog", label: "What's new", href: "/sikka/changelog/" },
    { id: "privacy", label: "Privacy", href: "/sikka/privacy/" },
    { id: "terms", label: "Terms", href: "/sikka/terms/" },
    {
      id: "delete-account",
      label: "Delete account",
      href: "/sikka/delete-account/",
    },
  ],
} as const;

export type SikkaPage = (typeof sikka.pages)[number]["id"];
