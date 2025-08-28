import { UserProfile } from "@clerk/nextjs";
import React from "react";

export default function ProfilePage() {
  return (
    <div className="my-4 flex h-full w-full items-center justify-center md:my-8">
      <UserProfile />
    </div>
  );
}
