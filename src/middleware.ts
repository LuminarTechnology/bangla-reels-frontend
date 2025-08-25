import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

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
  // Protect all routes starting with `/super-admin`
  if (isAdminRoute(req) && (await auth()).sessionClaims?.metadata?.role !== "super-admin") {
    const url = new URL("/sign-in", req.url);
    return NextResponse.redirect(url);
  }

  if (!isPublicRoute(req)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
