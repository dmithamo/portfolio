export interface TExperienceAttributes {
  company: string;
  website: string;
  title: string;
  period: string;
  tools: string[];
  description: string;
}

export interface JournalEntry {
  id: string;
  title: string;
  slug: string;
  section: string;
  subsection?: string;
  body: string;
  date: string;
}

export const MOCK_ENTRIES: JournalEntry[] = [
  {
    id: "site-architecture",
    title: "Building This Digital Garden",
    slug: "site-architecture",
    section: "library",
    subsection: "web-engineering",
    body: "Note to self: flesh this out.",
    date: "2026-04-20",
  },
  {
    id: "masters-degree",
    title: "Master of Science, Computer Science",
    slug: "masters-programme-overview",
    section: "library",
    subsection: "academic-pursuits",
    body: "Note to self: flesh this out.",
    date: "2026-03-25",
  },
  {
    id: "career-pivot",
    title: "Concrete to Code",
    slug: "civil-to-software-pivot",
    section: "concepts",
    body: "Note to self: flesh this out.",
    date: "2026-02-10",
  },
];
