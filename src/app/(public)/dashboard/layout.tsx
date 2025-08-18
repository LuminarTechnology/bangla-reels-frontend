"use client";

import { cn } from "@/src/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { History, LogOut, LayoutDashboard, Wallet, List } from "lucide-react";

const sidebarItems = [
  { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { name: "Wallet & Coins", href: "/dashboard/wallet", icon: Wallet },
  { name: "History", href: "/dashboard/history", icon: History },
  { name: "My List", href: "/dashboard/my-list", icon: List },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex h-screen gap-5 text-white">
      {/* Sidebar */}
      <aside className="flex w-80 flex-col rounded-xl border-r border-gray-800 bg-[#111] p-4">
        <div className="flex items-center gap-3 p-3">
          <img src="/profile.jpg" alt="Profile" className="h-12 w-12 rounded-full border" />
          <div>
            <p className="font-semibold">Siyam Ahmed</p>
            <p className="text-xs text-gray-400">UID: 496496</p>
          </div>
        </div>

        <nav className="mt-6 flex flex-col gap-2">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-xl px-3 py-3 transition hover:bg-[#e83a570f] hover:text-red-900",
                  pathname === item.href && "bg-[#e83a570f] text-red-900"
                )}
              >
                <Icon className="h-5 w-5" />
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto">
          <Link
            href="/logout"
            className="flex items-center gap-3 rounded-xl px-3 py-3 transition hover:bg-[#e83a570f] hover:text-red-900"
          >
            <LogOut className="h-5 w-5" />
            Log Out
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">{children}</main>
    </div>
  );
}
