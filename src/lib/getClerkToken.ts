import { Clerk } from "@clerk/clerk-js";

const clerk = new Clerk(process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!);

export async function getClerkToken() {
  await clerk.load();
  const session = clerk.session;
  if (!session) return null;

  return session.getToken({ template: "default" });
}
