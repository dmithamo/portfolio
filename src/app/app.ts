import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "./components/header.component";
import {
  LucideCode,
  LucideCopyright,
  LucideDynamicIcon,
  LucideExternalLink,
  LucideShieldCheck,
} from "@lucide/angular";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, LucideDynamicIcon],
  templateUrl: "./app.component.html",
})
export class AppComponent {
  readonly LucideCopyright = LucideCopyright;
  readonly LucideExternalLink = LucideExternalLink;
  readonly LucideShieldCheck = LucideShieldCheck;
  readonly LucideCode = LucideCode;

  readonly currentYear = new Date().getFullYear();
}
