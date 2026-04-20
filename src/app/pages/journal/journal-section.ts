import { Component, inject } from "@angular/core";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { AsyncPipe } from "@angular/common";
import { map, switchMap } from "rxjs";
import { JournalService } from "../../services/journal.service";

@Component({
  selector: "app-journal-section",
  standalone: true,
  imports: [AsyncPipe, RouterLink],
  template: `
    @if (content$ | async; as entries) {
      <div class="flex flex-col">
        @for (entry of entries; track entry.id) {
          <article
            [routerLink]="['/journal/entry', entry.slug]"
            class="group first:pb-8 not-first:py-8 border-b border-header-border/40 last:border-0 hover:bg-white/2 transition-colors cursor-pointer"
          >
            <div class="mb-1">
              <h3
                class="text-lg font-semibold text-text-primary group-hover:text-accent transition-colors tracking-tight"
              >
                {{ entry.title }}
              </h3>
            </div>

            <p class="text-text-muted text-sm leading-relaxed mb-4">
              {{ entry.body }}
            </p>

            <div
              class="flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] text-text-muted/50 font-bold"
            >
              <span>{{ entry.date }}</span>
              <span class="opacity-30">•</span>
              <span>{{ entry.section }}</span>
              @if (entry.subsection) {
                <span class="opacity-30">/</span>
                <span>{{ entry.subsection }}</span>
              }
            </div>
          </article>
        }
      </div>
    }
  `,
})
export class JournalSection {
  private route = inject(ActivatedRoute);
  private journalService = inject(JournalService);

  content$ = this.route.paramMap.pipe(
    switchMap((params) => {
      const sec = params.get("section");
      const sub = params.get("subsection");

      return this.journalService.getEntries().pipe(
        map((entries) =>
          entries
            .filter(
              (e) =>
                sec === "all" ||
                (e.section === sec && (!sub || e.subsection === sub)),
            )
            // Default to chronological order
            .sort(
              (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
            ),
        ),
      );
    }),
  );
}
