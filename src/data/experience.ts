export interface Experience {
  company: string;
  companyUrl?: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    company: "Sportserve",
    companyUrl: "https://sportserve.co",
    role: "Senior Software Engineer",
    period: "April 2024 - Present",
    description:
      "Building high-performance BI dashboards where data density is the primary challenge. My teammates and I focus on aggregating disparate data sources to provide actionable insights without impacting transactional systems.",
    technologies: [
      "TypeScript",
      "Python",
      "Angular",
      "Go",
      "GCP",
      "PostgreSQL/Cloud SQL",
      "Neo4j",
    ],
  },
  {
    company: "Circl Solutions",
    companyUrl: "https://circlsolutions.com",
    role: "Frontend Developer",
    period: "Aug 2022 - Jan 2024",
    description:
      "Developed core features for a high-traffic logistics platform within a globally distributed team. I also authored the technical onboarding manuals that cut ramp-up time for new engineering hires.",
    technologies: ["TypeScript", "Angular", "React", "GCP"],
  },
  {
    company: "Proto Energy",
    companyUrl: "https://protoenergy.com",
    role: "Lead Frontend Developer",
    period: "Nov 2020 - Jul 2022",
    description:
      "Led a cross-functional team to deliver internal logistics apps and a customer-facing marketplace. Much of my focus went into architecture and exploring ways of improving application performance.",
    technologies: ["TypeScript", "React", "UI/UX", "MicroFrontends"],
  },
  {
    company: "Novek Technologies",
    companyUrl: "https://novek.io",
    role: "Software Developer",
    period: "Oct 2019 - Oct 2020",
    description:
      "Owned the UI design and development of a real-time IoT telemetry dashboard. I focused on visualizing complex data streams to help field technicians make operational decisions on the fly.",
    technologies: ["Data Visualization", "React"],
  },
  {
    company: "Andela",
    companyUrl: "https://andela.com",
    role: "Associate Software Engineer",
    period: "Nov 2018 - Oct 2019",
    description:
      "Developed and shipped features for a financial coaching dashboard. Working closely with global leads, I helped build tools that provided users with financial clarity and actionable data.",
    technologies: ["TypeScript", "React", "Python"],
  },
  {
    company: "Construction Industry (Kenya)",
    role: "Civil & Structural Engineer",
    period: "2015 - 2018",
    description:
      "My undergraduate training was in civil and construction engineering. Before trading blueprints for code, I spent three years as a construction supervisor, structural designer, and project manager on several projects in Kenya.",
    technologies: ["Structural Design", "Project Management"],
  },
];
