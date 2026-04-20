import { Routes } from "@angular/router";
import { Home } from "./pages/home/home";
import { Journal } from "./pages/journal/journal";
import { JournalSection } from "./pages/journal/journal-section";
import { JournalEntry } from "./pages/journal/journal-entry";
import { NotFound } from "./not-found";

export const routes: Routes = [
  { path: "", component: Home },
  {
    path: "journal",
    component: Journal,
    children: [
      { path: "", redirectTo: "all", pathMatch: "full" },
      { path: "entry/:slug", component: JournalEntry },
      { path: ":section", component: JournalSection },
      { path: ":section/:subsection", component: JournalSection },
    ],
  },
  { path: "**", component: NotFound },
];
