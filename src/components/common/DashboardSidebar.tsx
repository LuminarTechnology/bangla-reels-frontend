"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogOut, ChevronDown, ChevronRight, Menu } from "lucide-react";
import { cn } from "@/src/lib/utils";
import { SidebarItem } from "@/src/types/DashboardSidebarItems.type";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/src/components/ui/sheet";
import { Button } from "@/src/components/ui/button";

type DashboardSidebarProps = {
  sidebarItems: SidebarItem[];
};

// Sidebar Content Component (reusable for both desktop and mobile)
function SidebarContent({
  sidebarItems,
  onItemClick,
}: {
  sidebarItems: SidebarItem[];
  onItemClick?: () => void;
}) {
  const pathname = usePathname();
  const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({});

  const toggleMenu = (title: string) => {
    setOpenMenus((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  const handleItemClick = () => {
    onItemClick?.();
  };

  return (
    <>
      {/* Logo */}
      <div className="flex h-16 items-center px-6">
        <h1 className="text-xl font-bold text-white">ReelShort</h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-3 py-4">
        {sidebarItems.map((item) => {
          const isActive = pathname === item.href;

          if (item.children) {
            const isOpen = openMenus[item.title];
            return (
              <div key={item.title}>
                <button
                  onClick={() => toggleMenu(item.title)}
                  className={cn(
                    "flex w-full cursor-pointer items-center justify-between px-3 py-3 text-sm font-medium transition-colors hover:bg-[#080200]",
                    isOpen
                      ? "rounded-full bg-[#080200] text-white"
                      : "rounded-lg text-gray-300 hover:text-white"
                  )}
                >
                  <div className="flex items-center space-x-3">
                    <item.icon className="h-5 w-5" />
                    <span>{item.title}</span>
                  </div>
                  {isOpen ? (
                    <ChevronDown className="h-4 w-4" />
                  ) : (
                    <ChevronRight className="h-4 w-4" />
                  )}
                </button>

                {isOpen && (
                  <div className="mt-1 ml-8 space-y-1">
                    {item.children.map((child) => {
                      const childActive = pathname === child.href;
                      return (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={handleItemClick}
                          className={cn(
                            "block px-3 py-3 text-sm transition-colors hover:bg-[#080200]",
                            childActive
                              ? "rounded-full bg-[#080200] text-white"
                              : "rounded-lg text-gray-400 hover:text-white"
                          )}
                        >
                          {child.title}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          }

          return (
            <Link
              key={item.href}
              href={item.href!}
              onClick={handleItemClick}
              className={cn(
                "flex items-center space-x-3 px-3 py-3 text-sm font-medium transition-colors hover:bg-[#080200]",
                isActive
                  ? "rounded-full bg-[#080200] text-white"
                  : "rounded-lg text-gray-300 hover:text-white"
              )}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.title}</span>
            </Link>
          );
        })}
      </nav>

      {/* Sign Out (fixed bottom) */}
      <div className="p-3">
        <Link
          href="/signout"
          onClick={handleItemClick}
          className="flex items-center space-x-3 rounded-lg px-3 py-3 text-sm font-medium text-red-400 transition-colors hover:bg-red-600 hover:text-white"
        >
          <LogOut className="h-5 w-5" />
          <span>Sign Out</span>
        </Link>
      </div>
    </>
  );
}

// Mobile Sidebar Header Component (for the hamburger menu)
export function MobileSidebarTrigger({ sidebarItems }: DashboardSidebarProps) {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="block h-auto border-red-400 p-1 text-black md:hidden"
        >
          <Menu style={{ width: "24px", height: "24px" }} />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="flex h-full w-64 flex-col border-r-0 bg-[#16151A] p-0 text-white"
        // below might be option for the sidebar make brighter
        // className="flex h-full w-64 flex-col border-r-0 bg-[#1a1923] p-0 text-white/95"
      >
        <SheetHeader className="sr-only">
          <SheetTitle>Navigation Menu</SheetTitle>
        </SheetHeader>
        <SidebarContent sidebarItems={sidebarItems} onItemClick={() => setOpen(false)} />
      </SheetContent>
    </Sheet>
  );
}

// Main Desktop Sidebar Component
export default function DashboardSidebar({ sidebarItems }: DashboardSidebarProps) {
  return (
    <div className="hidden h-full min-w-64 flex-col bg-[#16151A] text-white md:flex">
      <SidebarContent sidebarItems={sidebarItems} />
    </div>
  );
}
