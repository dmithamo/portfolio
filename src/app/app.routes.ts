import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "",
    loadComponent: () => import("./pages/home/home").then((m) => m.Home),
  },
  {
    path: "projects",
    loadComponent: () =>
      import("./pages/projects/projects").then((m) => m.Projects),
  },
  {
    path: "blog",
    loadComponent: () => import("./pages/blog/blog").then((m) => m.Blog),
  },
  { path: "**", redirectTo: "" },
];
