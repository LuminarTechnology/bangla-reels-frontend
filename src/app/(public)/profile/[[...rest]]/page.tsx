import { UserProfile } from "@clerk/nextjs";
import React from "react";

export default function ProfilePage() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <UserProfile />
    </div>
  );
}
