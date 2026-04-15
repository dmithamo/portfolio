import { Component, HostListener, signal } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav
      class="glass-header sticky top-0 z-50 w-full px-6 transition-all duration-300 flex justify-between items-center"
      [class.py-3]="isScrolled()"
      [class.py-5]="!isScrolled()"
    >
      <div class="flex items-center gap-2">
        <a
          routerLink="/"
          class="group select-none text-xl tracking-tighter transition-all duration-300 ease-in-out"
        >
          <span
            class="font-black text-accent transition-transform group-hover:scale-110 inline-block"
            >D</span
          >

          <span class="font-semibold text-text-primary ml-0.5">Mithamo</span>

          <span class="font-black text-accent group-hover:animate-pulse"
            >.</span
          >
        </a>
      </div>

      <div class="flex gap-8 text-sm font-medium">
        <a
          routerLink="/projects"
          routerLinkActive="text-accent"
          class="text-text-secondary hover:text-text-primary transition-colors"
          >Projects</a
        >
        <a
          routerLink="/blog"
          routerLinkActive="text-accent"
          class="text-text-secondary hover:text-text-primary transition-colors"
          >Blog</a
        >
        <a
          href="/resume.pdf"
          target="_blank"
          class="text-text-secondary hover:text-text-primary transition-colors"
          >Resume</a
        >
      </div>
    </nav>
  `,
})
export class HeaderComponent {
  isScrolled = signal(false);

  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 20);
  }
}
