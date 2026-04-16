import { Component } from "@angular/core";
import {
  LucideCode,
  LucideCopyright,
  LucideDynamicIcon,
  LucideExternalLink,
  LucideShieldCheck,
} from "@lucide/angular";

@Component({
  selector: "app-footer",
  imports: [LucideDynamicIcon],
  templateUrl: "./footer.html",
  styles: ``,
})
export class Footer {
  readonly LucideCopyright = LucideCopyright;
  readonly LucideExternalLink = LucideExternalLink;
  readonly LucideShieldCheck = LucideShieldCheck;
  readonly LucideCode = LucideCode;

  readonly currentYear = new Date().getFullYear();
}
