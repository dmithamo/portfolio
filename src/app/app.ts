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
        <section class="max-w-4xl mx-auto p-8">
          <router-outlet></router-outlet>
        </section>
      </main>
    </div>
  `,
})
export class AppComponent {}
