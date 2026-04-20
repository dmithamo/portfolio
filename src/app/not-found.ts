import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-not-found",
  standalone: true,
  imports: [RouterLink],
  template: `
    <div
      class="flex flex-col items-center justify-center min-h-[60vh] text-center px-4"
    >
      <h1 class="text-6xl font-black text-accent mb-4 tracking-tighter">404</h1>

      <div class="max-w-md space-y-6">
        <h2
          class="text-xl font-semibold text-text-primary uppercase tracking-widest"
        >
          Map is not the Territory
        </h2>

        <p class="text-text-muted leading-relaxed italic">
          The coordinates you've requested do not correspond to any known entry
          in this knowledge base. The page may have been moved, deleted, or
          never existed in this branch of reality.
        </p>

        <div class="pt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            routerLink="/"
            class="text-xs uppercase tracking-widest text-accent border border-accent/30 px-6 py-3 rounded hover:bg-accent/10 transition-all"
          >
            Return Home
          </a>
          <a
            routerLink="/journal/all"
            class="text-xs uppercase tracking-widest text-text-muted hover:text-text-primary px-6 py-3 transition-all"
          >
            Browse Journal
          </a>
        </div>
      </div>

      <div
        class="mt-20 opacity-10 font-mono text-[10px] uppercase tracking-[0.5em] select-none"
      >
        System Error: Entity_Not_Found
      </div>
    </div>
  `,
})
export class NotFound {}
