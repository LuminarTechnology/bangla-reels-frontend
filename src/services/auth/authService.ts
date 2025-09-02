"use client";
import { fetcher } from "@/src/lib/fetcher";

export interface BackendUser {
  id: string;
  name: string;
  email: string;
  clerkId: string;
  avatar?: string;
  roles?: string[];
}

export async function signInToBackend(token: string) {
  try {
    const response = await fetcher(`/auth/signin`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({
        token: token,
      }),
    });

    return response;
  } catch (err: any) {
    console.error("Backend sign-in failed:", err.message);
    if (err.message === "Unauthorized") {
      // redirect / logout
    }
    throw err;
  }
}
export async function signUpToBackend(payload: BackendUser, token: string) {
  try {
    const response = await fetcher(`/auth/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({
        email: payload.email,
        name: payload.name,
        avatar: payload.avatar,
      }),
    });

    return response;
  } catch (err: any) {
    console.error("Backend sign-in failed:", err.message);
    if (err.message === "Unauthorized") {
      // redirect / logout
    }
    throw err;
  }
}
