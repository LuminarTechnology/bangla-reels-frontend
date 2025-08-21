"use client";

import { CalendarCheck } from "lucide-react";
import { Button } from "../../ui/button";
import { Calendar } from "../../ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../../ui/popover";

export function DashboardHeader() {
  const today = new Date();
  return (
    <div className="flex items-center justify-between">
      <div className="text-[#242424]">
        <h1 className="text-2xl font-semibold">Hi Saiful</h1>
        <p className="text-sm">Welcome to RentBird</p>
      </div>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="border-black rounded-2xl bg-black text-white hover:bg-gray-800 "
          >
            Today
            <CalendarCheck/>
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
