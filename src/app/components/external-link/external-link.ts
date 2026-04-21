import { Component } from "@angular/core";
import { LucideDynamicIcon, LucideExternalLink } from "@lucide/angular";

@Component({
  selector: `a[target="_blank"]`,
  standalone: true,
  imports: [LucideDynamicIcon],
  host: {
    class:
      "inline-flex items-center gap-1 transition-all whitespace-nowrap align-bottom group cursor-pointer",
  },
  template: `
    <ng-content></ng-content>
    <span
      class="opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 text-accent inline-flex"
    >
      <svg class="w-4 h-4" [lucideIcon]="ExternalLinkMarker"></svg>
    </span>
  `,
})
export class ExternalLink {
  readonly ExternalLinkMarker = LucideExternalLink;
}
