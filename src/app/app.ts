import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "./components/header.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  template: `
    <div class="min-h-screen flex flex-col">
      <app-header />

      <main class="flex-1 p-6">
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
})
export class AppComponent {}
