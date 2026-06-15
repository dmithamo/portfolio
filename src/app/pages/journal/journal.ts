import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { LucideArrowLeft, LucideDynamicIcon, LucideWrench } from "@lucide/angular";

@Component({
  selector: "app-journal",
  standalone: true,
  imports: [RouterLink, LucideDynamicIcon],
  template: `
    <div
      class="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 py-12"
    >
      <div class="mb-8 p-4 rounded-2xl bg-accent/10 border border-accent/20">
        <svg [lucideIcon]="LucideWrench" class="w-10 h-10 text-accent"></svg>
      </div>

      <h1 class="text-5xl md:text-6xl font-black text-text-primary mb-4 tracking-tighter">
        Journal.<span class="text-accent">WIP</span>
      </h1>

      <div class="max-w-2xl space-y-8 w-full mt-4">
        <h2 class="text-xl font-semibold text-text-secondary uppercase tracking-widest">
          Construction in Progress
        </h2>

        <p class="text-text-muted leading-relaxed max-w-lg mx-auto">
        Working on this, if slowly, because work and school are demanding my full attention. Check back soonish.
        </p>

        <div
          class="mt-10 bg-surface border border-header-border rounded-xl overflow-hidden text-left shadow-sm max-w-xl mx-auto"
        >
          <div
            class="bg-surface/80 border-b border-header-border px-4 py-3 flex items-center gap-3"
          >
            <div class="flex gap-1.5">
              <div class="w-3 h-3 rounded-full bg-text-muted/30"></div>
              <div class="w-3 h-3 rounded-full bg-text-muted/30"></div>
              <div class="w-3 h-3 rounded-full bg-text-muted/30"></div>
            </div>
            <span class="text-[10px] font-mono text-text-muted uppercase tracking-widest ml-2"
              >status_check.sh</span
            >
          </div>
          
          <div class="p-5 font-mono md:text-sm space-y-3">
            <p class="text-text-secondary">
              <span class="text-accent font-bold">dmithamo&#64;dev:~$</span> ./check-status --section journal
            </p>
            <div class="text-text-muted flex gap-3">
              <span class="text-text-primary font-bold shrink-0">[PENDING]</span>
              <span>Fetching drafts...</span>
            </div>
            <div class="text-text-muted flex gap-3">
              <span class="text-accent font-bold shrink-0">[WARN]</span>
              <span>Developer distracted by the ridiculous requirement to work for a living.</span>
            </div>
            <div class="text-text-muted flex gap-3 items-center">
              <span class="text-text-primary font-bold shrink-0">[INFO]</span>
              <span>ETA: Soon™</span>
              <span class="w-2 h-4 bg-text-muted animate-pulse inline-block ml-1"></span>
            </div>
          </div>
        </div>

        <div class="pt-8 flex justify-center">
          <a
            routerLink="/"
            class="group flex items-center gap-2 text-xs uppercase tracking-widest text-accent border border-accent/30 px-6 py-3 rounded hover:bg-accent/10 transition-all"
          >
            <svg
              [lucideIcon]="LucideArrowLeft"
              class="w-4 h-4 group-hover:-translate-x-1 transition-transform"
            ></svg>
            Return Home
          </a>
        </div>
      </div>

      <div
        class="mt-24 opacity-10 font-mono text-[10px] uppercase tracking-[0.5em] select-none"
      >
        System Status: Compilation_Suspended
      </div>
    </div>
  `,
})
export class Journal {
  readonly LucideWrench = LucideWrench;
  readonly LucideArrowLeft = LucideArrowLeft;
}
