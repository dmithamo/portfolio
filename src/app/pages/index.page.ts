import { injectContentFiles, MarkdownComponent } from "@analogjs/content";
import { Component } from "@angular/core";
import {
  LucideCalendar,
  LucideDynamicIcon,
  LucideExternalLink,
  LucideIdCardLanyard,
} from "@lucide/angular";

export interface ExperienceAttributes {
  company: string;
  website: string;
  title: string;
  period: string;
  tools: string[];
  description: string;
}

@Component({
  selector: "app-homepage",
  templateUrl: "./index.component.html",
  imports: [
    LucideDynamicIcon,
    LucideCalendar,
    LucideIdCardLanyard,
    LucideExternalLink,
    MarkdownComponent,
  ],
})
export default class HomepageComponent {
  readonly experienceFiles = injectContentFiles<ExperienceAttributes>((file) =>
    file.filename.includes("experience"),
  ).sort((a, b) => {
    return b.filename.localeCompare(a.filename);
  });

  readonly LucideIdCardLanyard = LucideIdCardLanyard;
  readonly LucideCalendar = LucideCalendar;
  readonly LucideExternalLink = LucideExternalLink;
}
