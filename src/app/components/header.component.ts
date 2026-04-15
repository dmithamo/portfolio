import { Component, HostListener, signal } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";
import {
  LucideCodeXml,
  LucideDynamicIcon,
  LucideFileText,
  LucideIconInput,
  LucideNotebookPen,
} from "@lucide/angular";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [RouterLink, RouterLinkActive, LucideDynamicIcon],
  template: `
    <nav
      class="glass-header sticky top-0 z-50 w-full px-6 transition-all duration-300 flex justify-between items-center"
      [class.py-3]="isScrolled()"
      [class.py-5]="!isScrolled()"
    >
      <a
        routerLink="/"
        class="group flex items-center gap-2 select-none tracking-tighter transition-all"
      >
        <div class="text-xl font-fredoka">
          <span class="font-black text-accent">D</span>
          <span class="font-semibold text-text-primary ml-0.5">Mithamo</span>
          <span class="font-black text-accent">.</span>
        </div>
      </a>

      <div class="flex gap-12 font-medium">
        @for (navItem of navItems; track navItem.href) {
          <a
            [routerLink]="navItem.href"
            routerLinkActive="active-link"
            [routerLinkActiveOptions]="{ exact: false }"
            class="capitalize flex items-center gap-2 text-text-secondary hover:text-text-primary transition-all duration-300 py-1 group"
          >
            <svg
              [lucideIcon]="navItem.icon"
              class="w-4 h-4 transition-transform group-hover:scale-110"
              strokeWidth="2"
            ></svg>
            <span>{{ navItem.label }}</span>
          </a>
        }
      </div>
    </nav>
  `,
  styles: `
    /* Using a dedicated class ensures the HSL accent overrides base text colors */
    .active-link {
      @apply text-accent scale-110 opacity-100 !important;
    }

    svg {
      @apply flex items-center justify-center;
    }
  `,
})
export class HeaderComponent {
  isScrolled = signal(false);

  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 20);
  }

  readonly navItems: Array<{
    href: string;
    icon: LucideIconInput;
    label: string;
  }> = [
    {
      href: "/projects",
      icon: LucideCodeXml,
      label: "projects",
    },
    {
      href: "/blog",
      icon: LucideNotebookPen,
      label: "blog",
    },
    {
      href: "/resume",
      icon: LucideFileText,
      label: "resume",
    },
  ];
}
