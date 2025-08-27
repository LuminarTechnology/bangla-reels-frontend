import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { Roles } from "./types/globals";

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

export default clerkMiddleware(async (auth, req: NextRequest) => {
  const { sessionClaims } = await auth();

  const roles: Roles[] = sessionClaims?.metadata?.roles as Roles[] | [];

  if (process.env.NODE_ENV === "production") {
    // Protect all routes starting with `/super-admin/dashboard`
    if (isAdminRoute(req) && !roles?.includes("super-admin")) {
      const url = new URL("/sign-in", req.url);
      return NextResponse.redirect(url);
    }

    if (!isPublicRoute(req)) {
      await auth.protect();
    }
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
