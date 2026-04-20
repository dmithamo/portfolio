import { RenderMode, ServerRoute } from "@angular/ssr";

export const serverRoutes: ServerRoute[] = [
  {
    path: "journal",
    renderMode: RenderMode.Prerender,
  },
  {
    path: "",
    renderMode: RenderMode.Prerender,
  },
  {
    path: "**",
    renderMode: RenderMode.Prerender,
  },
];
