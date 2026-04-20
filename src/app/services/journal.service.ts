import { Injectable, signal } from "@angular/core";
import { of, map, Observable } from "rxjs";
import { MOCK_ENTRIES, JournalEntry } from "../models";

export interface NavItem {
  label: string;
  path: string;
  children?: { label: string; path: string }[];
}

@Injectable({ providedIn: "root" })
export class JournalService {
  sortState = signal<"recent" | "top">("recent");

  getEntries(): Observable<JournalEntry[]> {
    return of(MOCK_ENTRIES);
  }

  getNavigation(): Observable<NavItem[]> {
    return of(MOCK_ENTRIES).pipe(
      map((entries) => {
        const navMap = new Map<string, Set<string>>();

        entries.forEach((entry) => {
          if (!navMap.has(entry.section)) navMap.set(entry.section, new Set());
          if (entry.subsection)
            navMap.get(entry.section)?.add(entry.subsection);
        });

        const nav: NavItem[] = [{ label: "All Posts", path: "all" }];

        navMap.forEach((subsections, section) => {
          nav.push({
            label: section,
            path: section,
            children: Array.from(subsections).map((sub) => ({
              label: sub,
              path: sub,
            })),
          });
        });

        return nav;
      }),
    );
  }
}
