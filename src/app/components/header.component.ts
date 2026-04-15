import { Component, HostListener, signal } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";
import {
  LucideCodeXml,
  LucideDynamicIcon,
  LucideFileText,
  LucideIconInput,
  LucideNotebookPen,
  LucideDownload,
} from "@lucide/angular";

@Component({
  selector: "app-header",
  imports: [RouterLink, RouterLinkActive, LucideDynamicIcon],
  templateUrl: "./header.component.html",
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
    isDownloadable?: boolean;
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
      href: "/resume.pdf",
      icon: LucideFileText,
      label: "resume",
      isDownloadable: true,
    },
  ];

  readonly LucideDownload = LucideDownload;
}
