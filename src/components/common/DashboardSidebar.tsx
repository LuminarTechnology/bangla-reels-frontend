"use client";
import React, { useState } from "react";
import { Menu } from "lucide-react";
import { SidebarItem } from "@/src/types/dashboardSidebarItems";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/src/components/ui/sheet";
import { Button } from "@/src/components/ui/button";
import { SidebarContent } from "./SidebarContent";

type DashboardSidebarProps = {
  sidebarItems: SidebarItem[];
};

// Mobile Sidebar Header Component (for the hamburger menu)
export function MobileSidebarTrigger({ sidebarItems }: DashboardSidebarProps) {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="block h-auto border-red-400 text-black md:hidden"
          style={{ padding: 0 }}
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
