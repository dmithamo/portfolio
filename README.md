# Dennis Mithamo | Portfolio

A high-performance personal portfolio built with **Angular (v21)** using **Static Site Generation (SSG)**. This architecture ensures near-instant load times, excellent SEO, and a zero-tracker footprint.

## 🚀 Architecture Highlights
* **Framework:** Native Angular (Latest)
* **Rendering:** Full SSG (Static Site Generation) via `@angular/ssr`.
* **Interactivity:** Hybrid Hydration (Static HTML with dynamic "Islands" for UI logic).
* **Styling:** Tailwind CSS with dynamic "Glow" effects and custom grid-system background.
* **Icons:** Lucide Angular.
* **Performance:** Optimized for sub-10ms TTFB (Time to First Byte) via pre-rendered assets.

---

## 🛠️ Local Development

To run the site in development mode (with Hot Module Replacement):

```bash
# Install dependencies
npm install

# Start the development server
npm run start
```

*Note: Dev mode uses the Angular dev server. To test the "real" performance of the pre-rendered pages, use the Production build steps below.*

---

## 📦 Production Build & SSG

To generate the static version of the site, run:

```bash
npm run build
```

This command triggers the Angular CLI to:
1. Compile the application.
2. Prerender the routes specified in `app.routes.server.ts` (e.g., `/`, `/projects`, `/blog`).
3. Output the final static files to `dist/portfolio/browser`.

### Serving the Build Locally
To verify the actual SSG output and interactivity before deploying:

```bash
# Serves the static browser folder
npx serve -s dist/portfolio/browser
```

---

## 🐳 Dockerization & Hosting

The site is containerized using a multi-stage Docker build to keep the production image lightweight and optimized for the edge.

### Build the Image
```bash
docker build -t portfolio-ssg .
```

### Run the Container
```bash
docker run -p 3000:3000 portfolio-ssg
```
The site will be available at `http://localhost:3000`.

### Deployment
This repository is configured for **Google Cloud Build**. On every push to the main branch, the `cloudbuild.yaml` triggers a build and deploys the resulting container to **Cloud Run**.

---

## 📈 Benchmarking
This architecture is built for high-concurrency environments. Performance can be verified using `wrk`:

```bash
wrk -t12 -c400 -d30s http://localhost:3000
```
*Because the site is served as static HTML, it handles hundreds of concurrent connections with negligible CPU overhead and zero timeouts.*

---

## 🛡️ Privacy & Performance
* **Zero Cookies:** No tracking scripts or third-party cookies.
* **Self-Hosted Fonts:** All typography is served from the same origin to eliminate external DNS lookups.
* **Optimized LCP:** Above-the-fold content is pre-rendered to achieve an "Instant-on" user experience.
