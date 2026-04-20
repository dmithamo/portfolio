import { Component, inject } from "@angular/core";
import { AsyncPipe, CommonModule, TitleCasePipe } from "@angular/common";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { map, switchMap } from "rxjs";
import { JournalService } from "../../services/journal.service";
import { LucideArrowLeft, LucideDynamicIcon } from "@lucide/angular";

@Component({
  selector: "app-journal-entry",
  standalone: true,
  imports: [
    AsyncPipe,
    TitleCasePipe,
    RouterLink,
    CommonModule,
    LucideDynamicIcon,
  ],
  template: `
    @if (entry$ | async; as entry) {
      <div
        class="max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-700"
      >
        <header class="mb-12">
          <a
            routerLink="/journal/all"
            class="group inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-text-muted hover:text-accent transition-colors mb-8"
          >
            <svg
              [lucideIcon]="backIcon"
              class="w-3 h-3 transition-transform group-hover:-translate-x-1"
            ></svg>
            Back to Journal
          </a>

          <h1
            class="text-4xl font-bold text-text-primary tracking-tight mb-4 leading-tight"
          >
            {{ entry.title }}
          </h1>

          <div
            class="flex items-center gap-3 text-[10px] uppercase tracking-widest text-text-muted/60 font-bold"
          >
            <span>{{ entry.date }}</span>
            <span class="w-1 h-1 rounded-full bg-header-border"></span>
            <span class="text-accent">{{ entry.section | titlecase }}</span>
          </div>
        </header>

        <article class="prose prose-invert prose-sm sm:prose-base max-w-none">
          <p class="text-text-secondary leading-relaxed text-lg mb-6">
            {{ entry.body }}
          </p>
        </article>

        <footer
          class="mt-16 pt-8 border-t border-header-border/40 flex justify-end"
        >
          <button
            (click)="share(entry.title)"
            class="text-[10px] uppercase tracking-[0.2em] text-text-muted hover:text-accent transition-colors font-bold"
          >
            Share
          </button>
        </footer>
      </div>
    }
  `,
  styles: [
    `
      :host {
        display: block;
        padding-bottom: 5rem;
      }
      :host ::ng-deep .prose::before,
      :host ::ng-deep .prose::after {
        content: none !important;
      }
    `,
  ],
})
export class JournalEntry {
  readonly backIcon = LucideArrowLeft;

  private route = inject(ActivatedRoute);
  private journalService = inject(JournalService);

  readonly entry$ = this.route.paramMap.pipe(
    switchMap((params) => {
      const slug = params.get("slug");
      return this.journalService
        .getEntries()
        .pipe(map((entries) => entries.find((e) => e.slug === slug)));
    }),
  );

  async share(title: string) {
    try {
      if (navigator.share) {
        await navigator.share({ title, url: window.location.href });
      } else {
        await navigator.clipboard.writeText(window.location.href);
      }
    } catch (err) {}
  }
}
