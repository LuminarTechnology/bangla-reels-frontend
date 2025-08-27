import { Webhook } from "svix";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { clerkClient } from "@clerk/nextjs/server";

const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET!;

export async function POST(req: Request) {
  const payload = await req.text();
  const headerPayload = headers();

  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: any;
  try {
    evt = wh.verify(payload, {
      "svix-id": (await headerPayload).get("svix-id")!,
      "svix-timestamp": (await headerPayload).get("svix-timestamp")!,
      "svix-signature": (await headerPayload).get("svix-signature")!,
    });
  } catch (err) {
    console.error("❌ Webhook verification failed", err);
    return new NextResponse("Invalid webhook signature", { status: 400 });
  }

  const eventType = evt.type;

  if (eventType === "user.created" || eventType === "user.signed_up") {
    const { id } = evt.data;

    try {
      (await clerkClient()).users.updateUserMetadata(id as string, {
        publicMetadata: {
          roles: ["user"],
        },
      });

      // console.log(`✅ Default role "user" set for ${id}`);
    } catch (err) {
      console.error("❌ Failed to update role", err);
    }
  }

  return NextResponse.json({ status: "ok" });
}
