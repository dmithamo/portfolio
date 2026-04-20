import { Component, inject, signal } from "@angular/core";
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";
import { LucideDynamicIcon, LucideBookOpen, LucideHash } from "@lucide/angular";
import { JournalService } from "../../services/journal.service";
import { AsyncPipe, TitleCasePipe } from "@angular/common";

@Component({
  selector: "app-journal",
  templateUrl: "./journal.html",
  standalone: true,
  imports: [
    LucideDynamicIcon,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    AsyncPipe,
    TitleCasePipe,
  ],
})
export class Journal {
  private journalService = inject(JournalService);

  sortState = signal<"recent" | "top">("recent");

  // sidebar items are now calculated from the data!
  navigation$ = this.journalService.getNavigation();

  readonly LucideBookOpen = LucideBookOpen;
  readonly LucideHash = LucideHash;
}
