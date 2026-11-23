// GitHub Pages no tiene reescrituras de rutas: copiamos index.html a cada ruta
// del sitemap para que las URLs directas respondan 200, y a 404.html para el resto.
import { readFileSync, mkdirSync, copyFileSync } from "node:fs";
import { join } from "node:path";

const dist = "dist";
const index = join(dist, "index.html");
const sitemap = readFileSync(join(dist, "sitemap.xml"), "utf8");

const routes = [...sitemap.matchAll(/<loc>\s*https?:\/\/[^/<]+(\/[^<]*?)\s*<\/loc>/g)]
  .map((m) => m[1].replace(/^\/+|\/+$/g, ""))
  .filter(Boolean);
routes.push("index");

for (const route of new Set(routes)) {
  mkdirSync(join(dist, route), { recursive: true });
  copyFileSync(index, join(dist, route, "index.html"));
  console.log(`  /${route}`);
}
copyFileSync(index, join(dist, "404.html"));
console.log("  404.html");
