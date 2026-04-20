import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "",
    loadComponent: () => import("./pages/home/home").then((m) => m.Home),
  },
  {
    path: "journal",
    loadComponent: () =>
      import("./pages/journal/journal").then((m) => m.Journal),
  },
  { path: "**", redirectTo: "" },
];
