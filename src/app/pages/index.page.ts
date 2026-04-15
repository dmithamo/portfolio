import { injectContentFiles, MarkdownComponent } from "@analogjs/content";
import { Component } from "@angular/core";
import { UpperCasePipe } from "@angular/common";
import {
  LucideBriefcase,
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
}

@Component({
  selector: "app-homepage",
  template: `<section class="max-w-4xl mx-auto p-8 flex flex-col gap-8">
    <div class="flex flex-col gap-2">
      <p class="">Hi, I am</p>
      <h1 class="text-6xl font-black tracking-tighter">
        Dennis <span class="text-accent">Mithamo</span>
        <span class="text-lg font-sans tracking-normal">, a</span>
      </h1>

      <div>
        <p>
          <span class="text-accent text-2xl">Software Engineer</span>
          excited about distributed systems and high-performance architecture.
        </p>
        <p class="flex items-center gap-1">
          I am currently part of a team that's scaling data analytics at
          <a
            href="https://sportserve.co"
            target="_blank"
            class="text-accent text-xl flex items-center gap-1"
            >Sportserve
            <svg [lucideIcon]="LucideExternalLink" class="w-4 h-4"></svg
          ></a>
        </p>
      </div>
    </div>

    <div class="flex flex-col gap-8">
      <h2 class="text-sm uppercase tracking-[0.2em] text-accent font-bold">
        Experience
      </h2>

      @for (item of experienceFiles; track item.filename) {
        <div
          class="group relative grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4"
        >
          <div class="flex flex-col gap-2">
            <a href="{{ item.attributes.website }}" target="_blank">
              <h3 class="text-2xl font-bold text-text-primary">
                {{ item.attributes.company }}
              </h3>
              <div class="flex items-center gap-2 text-text-secondary text-sm">
                <svg [lucideIcon]="LucideCalendar" class="w-4 h-4"></svg>
                {{ item.attributes.period }}
              </div>
            </a>
          </div>

          <div class="flex flex-col gap-4">
            <div class="flex items-center gap-1">
              <svg
                [lucideIcon]="LucideIdCardLanyard"
                class="w-5 h-5 text-accent"
              ></svg>
              <span class="text-lg font-semibold">{{
                item.attributes.title
              }}</span>
            </div>

            <div class="text-text-secondary leading-relaxed prose prose-invert">
              <analog-markdown [content]="item.content" />
            </div>

            <div class="flex flex-wrap gap-2 mt-2">
              @for (tool of item.attributes.tools; track tool) {
                <span
                  class="px-3 py-1 rounded-full bg-text-secondary/5 border border-text-secondary/10 text-text-secondary/75 text-xs font-medium hover:bg-accent/10 transition-colors"
                >
                  #{{ tool }}
                </span>
              }
            </div>
          </div>
        </div>
      }
    </div>
  </section>`,
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
    file.filename.includes("/experience/"),
  ).sort((a, b) => {
    return b.filename.localeCompare(a.filename);
  });

  readonly LucideIdCardLanyard = LucideIdCardLanyard;
  readonly LucideCalendar = LucideCalendar;
  readonly LucideExternalLink = LucideExternalLink;
}
