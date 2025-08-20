"use client";

import { cn } from "@/src/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { History, LogOut, LayoutDashboard, List, MessageSquare, AwardIcon } from "lucide-react";
import LogoutModal from "@/src/components/common/LogoutModal";

const sidebarItems = [
  { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { name: "Subscription & Rewards", href: "/dashboard/subscription-rewards", icon: AwardIcon },
  { name: "My List", href: "/dashboard/my-list", icon: List },
  { name: "History", href: "/dashboard/history", icon: History },
  { name: "Feedback", href: "/dashboard/feedback", icon: MessageSquare },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex h-[calc(100vh-50px)] gap-5 text-white">
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

      {/* Main Content */}
      <main className="w-full flex-1 space-y-8 overflow-y-auto rounded-xl bg-[#111] p-6 sm:p-8">
        {children}
      </main>
    </div>
  );
}
