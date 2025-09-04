import { NextRequest, NextResponse, NextFetchEvent } from "next/server";
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import createIntlMiddleware from "next-intl/middleware";
import { Roles } from "./types/globals";

const LOCALES = ["en", "bn", "es", "la"];
const DEFAULT_LOCALE = "en";

const intlMiddleware = createIntlMiddleware({
  locales: LOCALES,
  defaultLocale: DEFAULT_LOCALE,
  localeDetection: true,
});

const isAdminRoute = createRouteMatcher(["/en/super-admin/dashboard(.*)"]);

const isPublicRoute = createRouteMatcher([
  "/en/sign-in(.*)",
  "/bn/sign-in(.*)",
  "/es/sign-in(.*)",
  "/la/sign-in(.*)",
  "/en/sign-up(.*)",
  "/bn/sign-up(.*)",
  "/es/sign-up(.*)",
  "/la/sign-up(.*)",
  "/es",
  "/en",
  "/bn",
  "/la",
  "/en/categories(.*)",
  "/bn/categories(.*)",
  "/es/categories(.*)",
  "/la/categories(.*)",
  "/en/fandom(.*)",
  "/bn/fandom(.*)",
  "/es/fandom(.*)",
  "/la/fandom(.*)",
  "/en/contest",
  "/bn/contest",
  "/es/contest",
  "/la/contest",
  "/en/contact-us",
  "/bn/contact-us",
  "/es/contact-us",
  "/la/contact-us",
  "/en/episode(.*)",
  "/bn/episode(.*)",
  "/es/episode(.*)",
  "/la/episode(.*)",
  "/en/movie(.*)",
  "/bn/movie(.*)",
  "/es/movie(.*)",
  "/la/movie(.*)",
  "/en/privacy-policy",
  "/bn/privacy-policy",
  "/es/privacy-policy",
  "/la/privacy-policy",
  "/terms-service",
  "/en/dashboard",
  "/bn/dashboard",
  "/es/dashboard",
  "/la/dashboard",
  "/en/dashboard/my-list",
  "/bn/dashboard/my-list",
  "/es/dashboard/my-list",
  "/la/dashboard/my-list",
  "/es/dashboard/history",
  "/en/dashboard/history",
  "/bn/dashboard/history",
  "/la/dashboard/history",
  "/en/dashboard/subscription-rewards",
  "/bn/dashboard/subscription-rewards",
  "/es/dashboard/subscription-rewards",
  "/la/dashboard/subscription-rewards",
  "/en/super-admin/login",
  "/en/super-admin/dashboard(.*)",
]);

//  Auth Middleware
const authHandler = clerkMiddleware(async (auth, req: NextRequest) => {
  const { pathname } = req.nextUrl;
  const { sessionClaims } = await auth();
  const lang = req.cookies.get("locale")?.value || DEFAULT_LOCALE;

  const roles: Roles[] = (sessionClaims?.metadata?.roles as Roles[]) || [];

  // Admin route protection
  // if (isAdminRoute(req) && !roles.includes("superAdmin")) {

  //   const url = new URL(`/${lang}/super-admin/login`, req.url);
  //   return NextResponse.redirect(url);
  // }

  // Non-public route protection
  // if (!isPublicRoute(req)) {

  //   const url = new URL(`/${lang}/sign-in`, req.url);
  //   return NextResponse.redirect(url);
  // }

  if (pathname === "/") {
    return NextResponse.redirect(new URL(`/${lang}`, req.url));
  }

  return NextResponse.next();
});

//  Compose Middleware
export async function middleware(req: NextRequest, event: NextFetchEvent) {
  // Auth + Role check
  const authResponse = await authHandler(req, event);
  if (authResponse) return authResponse;

  //Locale handling
  const intlResponse = intlMiddleware(req);
  if (intlResponse) return intlResponse;

  return NextResponse.next();
}

//  Middleware Config
export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
