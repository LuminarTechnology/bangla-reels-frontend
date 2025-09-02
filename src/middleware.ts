import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { Roles } from "./types/globals";
import createIntlMiddleware from "next-intl/middleware";

const isAdminRoute = createRouteMatcher(["/super-admin/dashboard(.*)"]);

const isPublicRoute = createRouteMatcher([
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/",
  "/categories(.*)",
  "/fandom(.*)",
  "/contest",
  "/contact-us",
  "/episode(.*)",
  "/movie(.*)",
  "/privacy-policy",
  "/terms-service",
  "/dashboard",
  "/dashboard/my-list",
  "/dashboard/history",
  "/dashboard/subscriptions-rewards",
  "/super-admin/login",
]);

// Locale middleware setup
const intlMiddleware = createIntlMiddleware({
  locales: ["en", "bn", "es", "la"],
  defaultLocale: "en",
  localeDetection: true,
});

export default clerkMiddleware(async (auth, req: NextRequest) => {
  const { sessionClaims } = await auth();
  const lang = req.cookies.get("locale")?.value || "en";
  const roles: Roles[] = sessionClaims?.metadata?.roles as Roles[] | [];

  // ✅ First, run locale handling
  const intlResponse = intlMiddleware(req);
  if (intlResponse) return intlResponse;

  // Protect all routes starting with `/super-admin/dashboard`
  if (isAdminRoute(req) && !roles?.includes("superAdmin")) {
    const url = new URL(`/${lang}/super-admin/login`, req.url);
    return NextResponse.redirect(url);
  }

  if (!isPublicRoute(req)) {
    await auth.protect();
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    // Match everything under a language prefix
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes (without lang prefix, or you can duplicate if you want /en/api too)
    "/(api|trpc)(.*)",
  ],
};
