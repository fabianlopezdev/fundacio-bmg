import type { APIRoute } from "astro";

const pages = [
  {
    url: "/",
    lastMod: new Date().toISOString().split("T")[0],
    priority: 1.0,
    changefreq: "weekly",
  },
  {
    url: "/la-fundacio",
    lastMod: new Date().toISOString().split("T")[0],
    priority: 0.9,
    changefreq: "weekly",
  },
  {
    url: "/un-club-amb-valors",
    lastMod: new Date().toISOString().split("T")[0],
    priority: 0.9,
    changefreq: "monthly",
  },
  {
    url: "/palmares-del-planter",
    lastMod: new Date().toISOString().split("T")[0],
    priority: 0.9,
    changefreq: "monthly",
  },
  {
    url: "/tornejos",
    lastMod: new Date().toISOString().split("T")[0],
    priority: 0.9,
    changefreq: "weekly",
  },
  {
    url: "/equip-special",
    lastMod: new Date().toISOString().split("T")[0],
    priority: 0.9,
    changefreq: "monthly",
  },
  {
    url: "/projectes-de-cooperacio",
    lastMod: new Date().toISOString().split("T")[0],
    priority: 0.9,
    changefreq: "monthly",
  },
  {
    url: "/la-residencia",
    lastMod: new Date().toISOString().split("T")[0],
    priority: 0.9,
    changefreq: "monthly",
  },
  {
    url: "/equips-de-veteranes-i-veterans",
    lastMod: new Date().toISOString().split("T")[0],
    priority: 0.9,
    changefreq: "monthly",
  },
  {
    url: "/el-llegat-dels-25-anys",
    lastMod: new Date().toISOString().split("T")[0],
    priority: 0.9,
    changefreq: "monthly",
  },
];
export const GET: APIRoute = async () => {
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map(
          (page) => `
        <url>
          <loc>https://fundacio.bmgranollers.cat${page.url}</loc>
          <lastmod>${page.lastMod}</lastmod>
          <changefreq>${page.changefreq}</changefreq>
          <priority>${page.priority}</priority>
        </url>
      `,
        )
        .join("")}
    </urlset>`.trim(),
    {
      headers: {
        "Content-Type": "application/xml",
        "Cache-Control": "public, max-age=3600",
      },
    },
  );
};
