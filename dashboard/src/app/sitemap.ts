import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://c1services.com.au/";
  const lastModified = new Date();

  return [
    // ─────────────────────────
    // Home
    // ─────────────────────────
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },

    // ─────────────────────────
    // Cleaning
    // ─────────────────────────
    {
      url: `${baseUrl}/cleaning/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/cleaning/about/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/cleaning/services/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/cleaning/career/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },

    // ─────────────────────────
    // Security
    // ─────────────────────────
    {
      url: `${baseUrl}/security/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/security/services/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/security/contractor/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/security/guardPage/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },

    // ─────────────────────────
    // Night Audit
    // ─────────────────────────
    {
      url: `${baseUrl}/night-audit/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/night-audit/about/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // ─────────────────────────
    // Forms / Contact
    // ─────────────────────────
    {
      url: `${baseUrl}/cleaning/get-a-qoute/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/night-audit/get-a-qoutes/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}