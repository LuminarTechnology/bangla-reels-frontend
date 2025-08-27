"use client";

import { CalendarCheck } from "lucide-react";
import { Button } from "../../../ui/button";
import { Calendar } from "../../../ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../../../ui/popover";
import { useUser } from "@clerk/nextjs";

export function DashboardHeader() {
  const today = new Date();
  const { user } = useUser();
  return (
    <div className="mb-4 flex items-center justify-between border-b border-[#E0E0E0] pb-4">
      <div className="text-[#242424]">
        <h1 className="text-2xl font-semibold">Hi {user?.fullName || "Guest"}</h1>
        <p className="text-sm">Welcome to Reelshort</p>
      </div>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="rounded-2xl border-black bg-black text-white hover:bg-gray-800"
          >
            Today
            <CalendarCheck />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={today}
            captionLayout="dropdown"
            showOutsideDays={false}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
