import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";

const base = "http://127.0.0.1:4173";
await mkdir("artifacts", { recursive: true });
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 1100 }, deviceScaleFactor: 1 });

try {
  const response = await page.goto(`${base}/portfolio.html`, { waitUntil: "networkidle" });
  if (!response?.ok()) throw new Error(`Portfolio HTTP status: ${response?.status()}`);

  const cards = page.locator(".card[data-search]");
  const total = await cards.count();
  if (total !== 33) throw new Error(`Expected 33 project cards, found ${total}`);

  const brokenCards = await cards.evaluateAll(nodes => nodes
    .filter(node => node.querySelectorAll("a[href]").length < 3)
    .map(node => node.querySelector("h2")?.textContent?.trim() || "untitled"));
  if (brokenCards.length) throw new Error(`Cards missing required navigation links: ${brokenCards.join(", ")}`);

  await page.screenshot({ path: "artifacts/portfolio-desktop.png", fullPage: true });
  await page.getByRole("searchbox", { name: "Buscar projetos" }).fill("oraculo");
  const visible = await cards.filter({ hasText: /Oráculo/i }).evaluateAll(nodes => nodes.filter(node => !node.hidden).length);
  if (visible < 1) throw new Error("Project search did not return Oráculo");
  await page.screenshot({ path: "artifacts/portfolio-search.png", fullPage: true });

  await page.goto(`${base}/index.html`, { waitUntil: "networkidle" });
  const dashboard = await page.locator("body").innerText();
  if (!dashboard.includes("DEMONSTRAÇÃO")) throw new Error("Dashboard does not identify itself as a demonstration");
  if (dashboard.includes("98.4%") || dashboard.includes("14ms") || dashboard.includes("2.4k")) {
    throw new Error("Dashboard contains a previously identified unverified metric");
  }
  if (!dashboard.includes("EXPLORAR OS 33 PROJETOS")) throw new Error("Dashboard has no portfolio navigation link");
  await page.screenshot({ path: "artifacts/dashboard-desktop.png", fullPage: true });

  await page.setViewportSize({ width: 390, height: 844 });
  await page.screenshot({ path: "artifacts/portfolio-mobile.png", fullPage: true });
  await page.goto(`${base}/index.html`, { waitUntil: "networkidle" });
  await page.screenshot({ path: "artifacts/dashboard-mobile.png", fullPage: true });

  console.log(JSON.stringify({ status: "passed", cards: total, search: "passed", dashboardDisclosure: "passed", screenshots: 4 }, null, 2));
} finally {
  await browser.close();
}
