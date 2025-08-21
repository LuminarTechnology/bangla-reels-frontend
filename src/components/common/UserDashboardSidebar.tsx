"use client";
import React from "react";
import LogoutModal from "@/src/components/modals/LogoutModal";
import { LogOut } from "lucide-react";
import { cn } from "@/src/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserDashboardSidebarItems } from "@/src/constants/UserDashboardSidebarItems";
// import LoginModal from "../modals/LoginModal";
// import { Button } from "../ui/button";

const UserDashboardSidebar = () => {
  const pathname = usePathname();
  const user = false;
  return (
    <aside className="flex w-80 flex-col rounded-xl border-r border-gray-800 bg-[#111] p-4">
      <div className="flex items-center gap-3 p-3">
        <img src="/profile.jpg" alt="Profile" className="h-12 w-12 rounded-full border" />
        <div>
          <p className="font-semibold">Siyam Ahmed</p>
          <p className="text-xs text-gray-400">UID: 496496</p>
        </div>

        {/* <LoginModal
          TriggerButton={
            <Button variant="outline" size="sm" className="text-xs">
              {user ? "Log out" : "Log in"}
            </Button>
          }
        /> */}
      </div>

      <nav className="mt-6 flex flex-col gap-2">
        {UserDashboardSidebarItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-xl px-3 py-3 transition hover:bg-[#e83a570f] hover:text-red-500",
                pathname === item.href && "bg-[#e83a570f] text-red-500"
              )}
            >
              <Icon className="h-5 w-5" />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto">
        <LogoutModal
          button={
            <button className="bg-primary-rose hover:bg-primary-rose-hover flex w-full items-center gap-3 rounded-xl px-3 py-3 transition">
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
