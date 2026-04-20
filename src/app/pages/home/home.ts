import { Component } from "@angular/core";
import {
  LucideCalendar,
  LucideDynamicIcon,
  LucideExternalLink,
  LucideIdCardLanyard,
  LucideDownload,
} from "@lucide/angular";
import { TExperienceAttributes } from "../../models";

@Component({
  selector: "app-home",
  templateUrl: "./home.html",
  imports: [LucideDynamicIcon],
})
export class Home {
  readonly EXPERIENCES: Array<TExperienceAttributes> = [
    {
      company: "Sportserve",
      website: "https://sportserve.co",
      title: "Senior Frontend Engineer",
      period: "April 2024 - Present",
      tools: [
        "TypeScript",
        "Angular",
        "Go",
        "Python",
        "GCP",
        "Neo4J",
        "Spanner Graph",
        "Postgresql",
      ],
      description:
        "My teammates and I architect high-performance BI dashboards for the sports betting sector where data density is the primary challenge. My team's focus is on aggregating data from various sources to provide actionable insights to stakeholders, without negatively impacting the availability of transactional systems.",
    },
    {
      company: "Circl Solutions",
      website: "https://circlsolutions.com/",
      title: "Frontend Developer",
      period: "Aug 2022 - Jan 2024",
      tools: ["TypeScript", "Angular", "React", "GCP"],
      description:
        "At Circl, I engineered core features and resolved critical bugs for a high-traffic logistics platform deployed in the LPG industry. I also authored onboarding manuals that cut ramp-up time for new hires by 30% while operating within an international engineering team.",
    },
    {
      company: "Proto Energy",
      website: "https://protoenergy.com",
      title: "Lead Frontend Developer",
      period: "Nov 2020 - Jul 2022",
      tools: ["TypeScript", "React", "UI/UX", "MicroFrontends"],
      description:
        "I directed a cross-functional team of developers and designers to deliver internal logistics and inventory management applications. Through refactoring and state management optimization, we improved overall application performance by 25%.",
    },
    {
      company: "Novek Technologies",
      website: "https://novek.io",
      title: "Software Developer",
      period: "Oct 2019 - Oct 2020",
      tools: ["Data Visualization", "React"],
      description:
        "I owned the UI design and development of a real-time IoT telemetry dashboard for vending machine monitoring. I focused on visualizing complex data streams to provide field technicians with operational insights they could rely on.",
    },
    {
      company: "Andela",
      website: "https://andela.com",
      title: "Associate Software Engineer",
      period: "Nov 2018 - Oct 2019",
      tools: ["TypeScript", "React", "Python"],
      description:
        "I developed and shipped features for a financial coaching dashboard in collaboration with international engineering leads. This role was a deep dive into building tools that provide users with financial clarity and actionable data.",
    },
    {
      company: "Construction Industry (Kenya)",
      website: "",
      title: "Civil & Structural Engineer",
      period: "2015 - 2018",
      tools: [
        "Structural Analysis",
        "Project Management",
        "Mathematical Modeling",
      ],
      description:
        "Before transitioning to software, I spent 3 years designing and supervising structural systems. This era defined my approach to engineering: prioritizing structural integrity, navigating complex constraints, and building for long-term stability—principles I now apply to scalable software architecture.",
    },
  ] as const;

  readonly LucideIdCardLanyard = LucideIdCardLanyard;
  readonly LucideCalendar = LucideCalendar;
  readonly LucideExternalLink = LucideExternalLink;
  readonly LucideDownload = LucideDownload;

  readonly socials = [
    {
      name: "GitHub",
      url: "https://github.com/dmithamo",
      handle: "@dmithamo",
      color: "#181717",
      path: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/dennis-mithamo",
      handle: "@dennis-mithamo",
      color: "#0077b5",
      path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
    },
  ] as const;
}
