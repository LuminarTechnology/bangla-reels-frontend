"use client";
import React from "react";
import LogoutModal from "@/src/components/modals/LogoutModal";
import { Copy, LogOut, User } from "lucide-react";
import { cn } from "@/src/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserDashboardSidebarItems } from "@/src/constants/UserDashboardSidebarItems";
import { Avatar, AvatarFallback, AvatarImage } from "@/src/components/ui/avatar";

const UserDashboardSidebar = () => {
  const pathname = usePathname();
  const user = false;
  return (
    <aside className="flex h-fit w-[28%] flex-col gap-4 rounded-2xl bg-[#0B0000] p-6">
      {/* User details */}
      <div className="flex items-center gap-4 p-4">
        {/* User Avatar */}
        <Avatar className="size-20 border-2 border-white">
          <AvatarImage src="/placeholder-user.jpg" alt="Guest" />
          <AvatarFallback className="bg-gray-600">
            <User className="size-16 text-white" />
          </AvatarFallback>
        </Avatar>
        {/* User Name & ID */}
        <div className="space-y-2">
          <p className="font-semibold text-2xl">Siyam Ahmed</p>
          <p className="flex items-center gap-2 text-base text-[#B3B1B0]">
            <span>UID: 496496</span>
            <Copy strokeWidth={1} className="size-4 cursor-pointer text-[#B3B1B0] active:text-white transition" />
          </p>
        </div>
      </div>
      {/* Dashboard routs */}
      <nav className="flex flex-col gap-2">
        {UserDashboardSidebarItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-2 text-xl text-[#FFFAFA] rounded-md p-4 transition hover:bg-[#E83A5714] hover:text-primary-rose active:scale-[0.97]",
                pathname === item.href && "bg-[#E83A5714] text-primary-rose"
              )}
            >
              <Icon strokeWidth={1} className="size-6" />
              {item.name}
            </Link>
          );
        })}
      </nav>
      {/* Log out */}
      <div className="mt-auto">
        <LogoutModal
          button={
            <button className="flex w-fit items-center gap-3 bg-primary-rose rounded-xl py-3 px-6 font-semibold text-base transition hover:bg-primary-rose-hover active:scale-[0.97]">
              <LogOut className="h-5 w-5 scale-x-[-1]" />
              Log Out
            </button>
          }
        />
      </div>
    </aside>
  );
};

export default UserDashboardSidebar;
