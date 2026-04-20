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
  templateUrl: "./header.html",
  styles: `
    svg {
      @apply flex items-center justify-center;
    }

    :host {
      display: block;
      position: sticky;
      top: 0;
      z-index: 100;
      width: 100%;
    }

    .brand-tier {
      z-index: 20;
    }

    nav {
      z-index: 10;
      transform-origin: top;
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
    this.isScrolled.set(currentScroll > 20);

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
