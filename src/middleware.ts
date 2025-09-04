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

const isAdminRoute = createRouteMatcher(["/:locale/super-admin(.*)"]);
const isTopUpRoute = createRouteMatcher(["/:locale/dashboard/top-up"]);

//  Auth Middleware
const authHandler = clerkMiddleware(async (auth, req: NextRequest) => {
  const { pathname } = req.nextUrl;
  const { sessionClaims } = await auth();
  const lang = req.cookies.get("locale")?.value || DEFAULT_LOCALE;

  const roles: Roles[] = (sessionClaims?.metadata?.roles as Roles[]) || [];

  if (pathname === "/") {
    return NextResponse.redirect(new URL(`/${lang}`, req.url));
  }

  if (process.env.NODE_ENV !== "development") {
    // Admin route protection
    if (isAdminRoute(req) && !roles.includes("superAdmin")) {
      const url = new URL(`/${lang}/sign-in`, req.url);
      return NextResponse.redirect(url);
    }

    if (isTopUpRoute(req) && roles.length === 0) {
      return NextResponse.redirect(new URL(`/${lang}/sign-in`, req.url));
    }
  }

  return NextResponse.next();
});

//  Compose Middleware
export async function middleware(req: NextRequest, event: NextFetchEvent) {
  //Locale handling
  const intlResponse = intlMiddleware(req);
  if (intlResponse) return intlResponse;

  // Auth + Role check
  const authResponse = await authHandler(req, event);
  if (authResponse) return authResponse;

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
