"use client";
import React, { useState } from "react";
import LogoutModal from "@/src/components/modals/LogoutModal";
import { LogOut, X } from "lucide-react";
import { cn } from "@/src/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserDashboardSidebarItems } from "@/src/constants/UserDashboardSidebarItems";
import { SignOutButton, useUser } from "@clerk/nextjs";
import { Button } from "../ui/button";
// import LoginModal from "../modals/LoginModal";
// import { Button } from "../ui/button";

interface UserDashboardSidebarProps {
  background?: string;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserDashboardSidebar: React.FC<UserDashboardSidebarProps> = ({
  background = "bg-[#111]", setIsOpen
}) => {
  const pathname = usePathname();
  const { user, isSignedIn } = useUser();

  return (
    <aside
      className={cn(
        "h-full w-80 flex-col rounded-xl border-r border-gray-800 p-4",
        background, "flex"
      )}>
      <div className="flex items-center gap-3 p-3">
        {isSignedIn ? (
          <Link href={"/profile"}>
            <img src={user.imageUrl} alt="Profile" className="h-12 w-12 rounded-full border" />
          </Link>
        ) : (
          <img src="/profile.jpg" alt="Profile" className="h-12 w-12 rounded-full border" />
        )}

        {isSignedIn ? (
          <div>
            <p className="font-semibold">{user?.fullName}</p>
            <p className="text-xs text-gray-400">{user?.emailAddresses?.[0].emailAddress}</p>
          </div>
        ) : (
          <div>
            <p className="font-semibold">Guest</p>
          </div>
        )}
        {!isSignedIn && (
          <Link href={"/sign-in"}>
            <Button variant="outline" size="sm" className="text-xs">
              Log in
            </Button>
          </Link>
        )}
      </div>

      <nav className="mt-6 flex flex-col gap-2">
        {UserDashboardSidebarItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center w-[90%] sm:w-full gap-3 rounded-xl px-3 py-3 transition hover:bg-[#e83a570f] hover:text-red-500",
                pathname === item.href && "bg-[#e83a570f] text-red-500"
              )}
              onClick={() => setIsOpen && setIsOpen(false)}
            >
              <Icon className="h-5 w-5" />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto">
        {/* <LogoutModal
          button={
            <button className="bg-primary-rose hover:bg-primary-rose-hover flex w-full items-center gap-3 rounded-xl px-3 py-3 transition">
              <LogOut className="h-5 w-5" />
              Log Out
            </button>
          }
        /> */}
        <SignOutButton
          children={
            <button className="bg-primary-rose hover:bg-primary-rose-hover flex w-[90%] sm:w-full cursor-pointer items-center gap-3 rounded-xl px-3 py-3 transition">
              <LogOut className="h-5 w-5" />
              Log Out
            </button>
          }
        />
      </div>

    </aside>
  );
};

export default UserDashboardSidebar;
