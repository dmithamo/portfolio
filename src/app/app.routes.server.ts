import { RenderMode, ServerRoute } from "@angular/ssr";

export const serverRoutes: ServerRoute[] = [
  {
    path: "",
    renderMode: RenderMode.Prerender,
  },
  {
    path: "journal/**",
    renderMode: RenderMode.Client,
  },
  {
    path: "**",
    renderMode: RenderMode.Prerender,
  },
];
