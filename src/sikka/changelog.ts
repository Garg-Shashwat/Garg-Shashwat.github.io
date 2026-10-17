/** What changed in each version of the app, newest first. Shown on /sikka/changelog/. */
export type Release = {
  version: string;
  date: string;
  /** Short summary shown next to the version. */
  title: string;
  added?: string[];
  improved?: string[];
  fixed?: string[];
};

export const releases: Release[] = [
  {
    version: "1.1.1",
    date: "17 October 2026",
    title: "Group spending by category",
    added: [
      "A group's monthly report shows what the group spent on each category.",
      "Settings → About links to What's new and the Terms of use.",
      "Creating an account shows the Terms of use and Privacy policy you agree to.",
    ],
  },
  {
    version: "1.1.0",
    date: "October 2026",
    title: "A simpler start, and better groups",
    added: [
      "A new start screen: enter your email, then your password, or create an account if you're new.",
      "Search when picking a category: type “fuel” to find Transport → Fuel.",
      "Show or hide your password while typing, and a strength meter when you choose one.",
    ],
    improved: [
      "Creating an account asks you to confirm your password, warns before a weak one, refuses very common ones, and suggests a fix for typos like “gmial.com”.",
      "Signing up with an email that already has an account takes you to sign in, instead of waiting for a code that never comes.",
      "In a group someone else created, you can pick any member as who paid or who received, for example when recording a settlement.",
      "Tapping a group in “Add people” puts the expense in that group, with everyone in it.",
      "Outside a group, every expense must include you. Money between other people goes in a group.",
      "Connecting with someone can't be tapped twice by accident, and is quicker.",
    ],
    fixed: [
      "“Spent this month” on Home and on a group's page opens the report on every phone.",
      "People, categories and subcategories added on one phone now always reach your other devices.",
    ],
  },
  {
    version: "1.0.0",
    date: "October 2026",
    title: "First release",
    added: [
      "Record expenses, refunds, settlements and transfers, split equally, by amounts or by shares.",
      "Groups, balances with everyone, and who owes whom.",
      "Share expenses with family and friends on Sikka, with an edit history.",
      "Works offline and syncs across your devices.",
      "Receipt photos, categories, tags and a monthly report.",
      "Delete your account from the app at any time.",
    ],
  },
];
