import { Component, HostListener, signal } from "@angular/core";
import { inject } from "@angular/core";
import { Router, RouterLink, RouterLinkActive } from "@angular/router";
import {
  LucideDynamicIcon,
  LucideFileText,
  LucideIconInput,
  LucideNotebookPen,
  LucideDownload,
} from "@lucide/angular";

@Component({
  selector: "app-header",
  imports: [RouterLink, RouterLinkActive, LucideDynamicIcon],
  template: `
    <header
      class="w-full transition-transform duration-500 bg-background/45 backdrop-blur-md"
      [class.-translate-y-full]="isNavHidden()"
    >
      <div
        class="w-full flex justify-center py-4 border-b border-grid-major relative z-20 shadow-[0_4px_30px_var(--header-shadow)]"
      >
        <a
          (click)="scrollToTop($event)"
          routerLink="/"
          class="group flex items-center select-none tracking-tighter"
        >
          <div class="text-2xl font-black text-accent">
            D<span class="text-text-primary ml-1 font-bold">Mithamo</span>.
          </div>
        </a>
      </div>

      <nav
        class="w-full flex justify-center items-center gap-12 py-4 border-b border-grid-major font-medium relative z-10"
      >
        <div class="flex items-center gap-6">
          @for (navItem of navItems; track navItem.href) {
            @if (navItem.isDownloadable) {
              <a
                [href]="navItem.href"
                target="_blank"
                class="capitalize flex items-center gap-2 text-text-secondary hover:text-accent transition-all duration-300 py-1 group relative"
              >
                <svg
                  [lucideIcon]="navItem.icon"
                  class="w-4 h-4 transition-transform group-hover:scale-110"
                  strokeWidth="2"
                ></svg>
                <span>{{ navItem.label }}</span>
                <svg
                  [lucideIcon]="LucideDownload"
                  class="w-3.5 h-3.5 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 text-accent/70"
                  strokeWidth="2.5"
                ></svg>
              </a>
            } @else {
              <a
                [routerLink]="navItem.href"
                routerLinkActive
                #rla="routerLinkActive"
                [class.text-accent]="rla.isActive"
                [class.text-text-secondary]="!rla.isActive"
                class="capitalize flex items-center gap-2 hover:text-accent transition-all duration-300 py-1 group"
              >
                <svg
                  [lucideIcon]="navItem.icon"
                  class="w-4 h-4 transition-transform group-hover:scale-110"
                  strokeWidth="2"
                ></svg>
                <span>{{ navItem.label }}</span>
              </a>
            }
          }
        </div>
      </nav>
    </header>
  `,
  styles: `
    svg {
      @apply flex items-center justify-center;
    }

    :host {
      display: block;
      position: sticky;
      top: 0;
      left: 0;
      z-index: 100;
      width: 100%;
    }

    header {
      will-change: transform;
    }
  `,
})
export class Header {
  isScrolled = signal(false);
  isNavHidden = signal(false);
  private lastScroll = 0;
  private router = inject(Router);

  @HostListener("window:scroll", [])
  onWindowScroll() {
    if (typeof window === "undefined") return;

    const currentScroll = window.pageYOffset;
    this.isScrolled.set(currentScroll > 60);

    if (currentScroll > this.lastScroll && currentScroll > 100) {
      this.isNavHidden.set(true);
    } else {
      this.isNavHidden.set(false);
    }

    this.lastScroll = currentScroll;
  }

  scrollToTop(event: Event) {
    if (typeof window !== "undefined" && this.router.url === "/") {
      event.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }

  readonly navItems: Array<{
    href: string;
    icon: LucideIconInput;
    label: string;
    isDownloadable?: boolean;
  }> = [
    {
      href: "/journal",
      icon: LucideNotebookPen,
      label: "journal",
    },
    {
      href: "/resume.pdf",
      icon: LucideFileText,
      label: "resume",
      isDownloadable: true,
    },
  ];

  readonly LucideDownload = LucideDownload;
}
