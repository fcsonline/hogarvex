import type { MetadataRoute } from "next";
import { locales } from "./[lang]/dictionaries";

const BASE = "https://hogarvex.es";
// Indexable routes, relative to each locale prefix.
const PATHS = ["", "/aviso-legal", "/privacidad"];

export default function sitemap(): MetadataRoute.Sitemap {
  return PATHS.flatMap((path) =>
    locales.map((lang) => ({
      url: `${BASE}/${lang}${path}`,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.5,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, `${BASE}/${l}${path}`]),
        ),
      },
    })),
  );
}
