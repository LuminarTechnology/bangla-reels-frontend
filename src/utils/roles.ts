"use server";
import { auth } from "@clerk/nextjs/server";
import { Roles } from "../types/globals";

export async function hasRole(requiredRole: Roles) {
  const { sessionClaims } = await auth();
  const roles = sessionClaims?.metadata?.roles || [];

  return Array.isArray(roles) && roles.includes(requiredRole);
}
