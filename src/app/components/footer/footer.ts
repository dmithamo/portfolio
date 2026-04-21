import { Component } from "@angular/core";
import {
  LucideCodeXml,
  LucideCopyright,
  LucideDynamicIcon,
  LucideShieldCheck,
} from "@lucide/angular";
import { ExternalLink } from "../external-link/external-link";

@Component({
  selector: "app-footer",
  imports: [LucideDynamicIcon, ExternalLink],
  templateUrl: "./footer.html",
  styles: ``,
})
export class Footer {
  readonly LucideCopyright = LucideCopyright;
  readonly LucideShieldCheck = LucideShieldCheck;
  readonly LucideCodeXml = LucideCodeXml;

  readonly currentYear = new Date().getFullYear();
}
