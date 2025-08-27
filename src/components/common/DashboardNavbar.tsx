"use client";

import React from "react";
import { Search, Bell } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { MobileSidebarTrigger } from "./DashboardSidebar";
import { SuperAdminSidebarItems } from "@/src/constants/DashboardSidebarItems";
import { useUser } from "@clerk/nextjs";

export default function DashboardNavbar() {
  const { user } = useUser();
  return (
    <header className="border-b bg-white p-2 md:p-4">
      <div className="flex items-center justify-between rounded-xl bg-gray-100 p-2 md:p-4">
        <div className="hidden md:block"></div>

        {/* Right side */}
        <div className="flex items-center space-x-2 md:space-x-4">
          <MobileSidebarTrigger sidebarItems={SuperAdminSidebarItems} />
          {/* Search */}
          <div className="relative">
            <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 rounded-full text-gray-700" />
            <Input
              type="search"
              placeholder="Search"
              className="w-full rounded-full bg-gray-200 pr-4 pl-10 text-gray-700 md:w-80"
            />
          </div>
          {/* Notifications */}
          <Button variant="ghost" size="sm" className="relative rounded-full bg-gray-200">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 h-2.5 w-2.5 rounded-full bg-red-500"></span>
          </Button>

          {/* User Menu */}
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium">{user?.fullName || "Guest"}</span>
            <Avatar className="h-8 w-8 bg-gray-600 shadow">
              <AvatarImage src={user?.imageUrl} alt={user?.fullName || "user"} />
              <AvatarFallback>
                {user?.fullName ? user?.fullName.charAt(0).toUpperCase() : "G"}
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </header>
  );
}
