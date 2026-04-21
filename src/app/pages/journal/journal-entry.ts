import {
  Component,
  inject,
  signal,
  HostListener,
  ElementRef,
} from "@angular/core";
import { AsyncPipe, CommonModule, TitleCasePipe } from "@angular/common";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { map, switchMap } from "rxjs";
import { JournalService } from "../../services/journal.service";
import {
  LucideArrowLeft,
  LucideDynamicIcon,
  LucideShare2,
  LucideClipboard,
  LucideChevronDown,
  LucideCheck,
} from "@lucide/angular";

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
          <div class="flex items-center justify-between mb-8">
            <a
              routerLink="/journal/all"
              class="group inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-text-muted hover:text-accent transition-colors"
            >
              <svg
                [lucideIcon]="backIcon"
                class="w-3 h-3 transition-transform group-hover:-translate-x-1"
              ></svg>
              Back to Journal
            </a>

            <div class="relative share-menu-container">
              <button
                (click)="toggleShareMenu($event)"
                [class.bg-header-border]="isShareMenuOpen()"
                class="cursor-pointer inline-flex items-center gap-2 px-4 py-2 text-[11px] font-bold tracking-widest text-text-secondary rounded-full bg-header-border/40 hover:bg-header-border transition-colors outline-none"
              >
                <svg [lucideIcon]="shareIcon" class="w-3.5 h-3.5"></svg>
                Share
                <svg
                  [lucideIcon]="chevronIcon"
                  class="w-3 h-3 transition-transform duration-200"
                  [class.rotate-180]="isShareMenuOpen()"
                ></svg>
              </button>

              @if (isShareMenuOpen()) {
                <div
                  class="absolute right-0 top-full mt-2 w-72 rounded-xl bg-white dark:bg-[#111] border border-header-border/80 shadow-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                >
                  <div class="p-4 border-b border-header-border/50">
                    <h4
                      class="text-text-muted text-[11px] uppercase tracking-[0.2em] mb-1"
                    >
                      Share entry
                    </h4>
                    <p class="text-text-secondary text-sm font-medium">
                      {{ entry.title }}
                    </p>
                  </div>

                  <button
                    (click)="copyLink()"
                    [class.bg-green-600/10]="justCopied()"
                    class="w-full text-left p-4 hover:bg-black/5 dark:hover:bg-white/3 transition-colors flex items-start gap-4"
                  >
                    <div [class.text-green-500]="justCopied()" class="mt-px">
                      <svg
                        [lucideIcon]="justCopied() ? checkIcon : copyIcon"
                        class="w-4 h-4"
                      ></svg>
                    </div>

                    <div class="flex-1">
                      <p class="text-text-primary text-sm font-bold">
                        Copy link
                      </p>
                      <p
                        [class.text-green-500]="justCopied()"
                        class="text-text-secondary text-xs mt-0.5"
                      >
                        {{
                          justCopied() ? "Link copied!" : "Copy to clipboard"
                        }}
                      </p>
                    </div>
                  </button>
                </div>
              }
            </div>
          </div>

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

          <div
            class="mt-12 p-6 border border-header-border/20 rounded bg-black/3 dark:bg-white/1 text-text-secondary dark:text-text-muted text-sm leading-relaxed"
          >
            This is not ready for readership, as you might've guessed, better
            than Lorem-Ipsum though it is.
          </div>
        </article>
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
  readonly shareIcon = LucideShare2;
  readonly chevronIcon = LucideChevronDown;
  readonly copyIcon = LucideClipboard;
  readonly checkIcon = LucideCheck;

  readonly isShareMenuOpen = signal(false);
  readonly justCopied = signal(false);

  private eRef = inject(ElementRef);
  private route = inject(ActivatedRoute);
  private journalService = inject(JournalService);

  @HostListener("document:click", ["$event"])
  clickout(event: MouseEvent) {
    // Only close if the menu is open AND the click is outside the container
    if (
      this.isShareMenuOpen() &&
      !this.eRef.nativeElement
        .querySelector(".share-menu-container")
        ?.contains(event.target)
    ) {
      this.isShareMenuOpen.set(false);
    }
  }

  readonly entry$ = this.route.paramMap.pipe(
    switchMap((params) => {
      const slug = params.get("slug");
      return this.journalService
        .getEntries()
        .pipe(map((entries) => entries.find((e) => e.slug === slug)));
    }),
  );

  toggleShareMenu(event: MouseEvent) {
    event.stopPropagation(); // Stop the document listener from firing immediately
    this.isShareMenuOpen.update((v) => !v);
  }

  async copyLink() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      this.justCopied.set(true);
      setTimeout(() => {
        this.justCopied.set(false);
        this.isShareMenuOpen.set(false);
      }, 2000);
    } catch (err) {
      this.isShareMenuOpen.set(false);
    }
  }
}
