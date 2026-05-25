import { Routes } from "@angular/router";
import { NotFound } from "./not-found";
import { Home } from "./pages/home/home";
import { Journal } from "./pages/journal/journal";

export const routes: Routes = [
  { path: "", component: Home },
  {
    path: "journal",
    component: Journal,
  },
  { path: "**", component: NotFound },
];
