/** Sikka: an expense and shared-money tracking app (Android). Public pages live under /sikka/. */
export const sikka = {
  /** Support contact shown on these pages. Empty until it's decided. */
  supportEmail: "",
  developer: "Shashwat Garg",
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
