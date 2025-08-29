"use client";

import { TableAction, TableHeaderConfig } from "@/src/types/reusableTable";
import { Calendar, Search, Settings2 } from "lucide-react";
import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export const ReusableTableHeader = ({
  config,
  searchValue,
  allFilterActions,
  onSearchChange,
  onDateFilterClick,
}: {
  config: TableHeaderConfig;
  searchValue?: string;
  allFilterActions?: TableAction[];
  onSearchChange?: (value: string) => void;
  onDateFilterClick?: () => void;
}) => {
  return (
    <div className="flex flex-col justify-between p-3 md:flex-row md:items-center md:p-6">
      <h1 className="mb-3 text-2xl font-semibold text-[#242424] md:mb-0">{config.title}</h1>

      <div className="flex items-center gap-2 md:gap-4">
        {config.showSearch && (
          <div className="relative rounded-[50px] bg-[#F9F9F9]">
            <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
            <Input
              type="text"
              placeholder={config.searchPlaceholder || "Search"}
              value={searchValue || ""}
              onChange={(e) => onSearchChange?.(e.target.value)}
              className="h-9 w-full rounded-[50px] pl-10 md:w-64"
            />
          </div>
        )}

        {allFilterActions && allFilterActions.length > 0 && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="h-9 w-9 bg-[#F9F9F9] text-[#4E4E4E] md:w-28 md:rounded-3xl"
              >
                <span className="hidden md:inline">Filter</span>
                <Settings2 className="h-4 w-4 md:mr-2" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="space-y-1">
              {allFilterActions.map((action, index) => (
                <DropdownMenuItem
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    action.onClick("");
                  }}
                  className={"px-4 text-base font-semibold text-[#242424]"}
                >
                  {action.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        )}

        {config.showDateFilter && (
          <Button
            onClick={onDateFilterClick}
            variant="outline"
            className="h-9 border-gray-300 bg-[#F9F9F9] px-2 text-[#4E4E4E] md:px-4"
          >
            <Calendar className="mr-2 hidden h-4 w-4 md:block" />
            Today
          </Button>
        )}

        {config.actions?.map((action, index) => (
          <Button
            key={index}
            className={`"bg-black hover:bg-gray-800" h-9 px-2 text-white md:rounded-[50px] md:px-4`}
            onClick={action.onClick}
          >
            {action.icon && <span className="md:mr-2">{action.icon}</span>}
            <span className="hidden md:block">{action.label}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};
