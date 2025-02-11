import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export type LOCALE = "en" | "bn";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "bn"],

  // Used when no locale matches
  defaultLocale: "en",
  localePrefix: "as-needed",
  pathnames: {
    "/": "/",
    "/about": {
      en: "/about",
      bn: "/somporke",
    },
    "/contact": {
      en: "/contact",
      bn: "/jogajog",
    },
  },
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);
