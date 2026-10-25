import type { MetadataRoute } from "next";
import { projectsData } from "@/data/projects";
import { getAbsoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  // Data determinística para preservar prerender estático sem bailing dinâmico
  const lastModified = "2026-03-01T00:00:00.000Z";

  const staticEntries: MetadataRoute.Sitemap = [
    {
      url: getAbsoluteUrl("/"),
      lastModified,
      changeFrequency: "monthly",
      priority: 1.0,
    },
  ];

  const projectEntries: MetadataRoute.Sitemap = projectsData.map((project) => ({
    url: getAbsoluteUrl(`/projects/${project.slug}`),
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticEntries, ...projectEntries];
}
