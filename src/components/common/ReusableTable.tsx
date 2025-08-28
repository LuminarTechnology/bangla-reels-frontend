"use client";

import {
  ReusableTableProps,
  TableAction,
  TableColumn,
  TableHeaderConfig,
} from "@/src/types/reusableTable";
import { Calendar, MoreHorizontal, Search, Settings2 } from "lucide-react";
import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const TableHeader = ({
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
    <div className="flex flex-col md:items-center justify-between p-3 md:flex-row md:p-6">
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
                className="h-9 w-9 md:rounded-3xl bg-[#F9F9F9] text-[#4E4E4E] md:w-28"
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
            className="h-9 border-gray-300 bg-[#F9F9F9] px-2 md:px-4 text-[#4E4E4E]"
          >
            <Calendar className="hidden md:block mr-2 h-4 w-4" />
            Today
          </Button>
        )}

        {config.actions?.map((action, index) => (
          <Button
            key={index}
            className={`"bg-black hover:bg-gray-800" h-9 md:rounded-[50px] px-2 md:px-4 text-white`}
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

const TableRow = <T,>({
  row,
  columns,
  actions,
  onRowClick,
}: {
  row: T;
  columns: TableColumn<T>[];
  actions?: TableAction<T>[];
  onRowClick?: (row: T) => void;
}) => {
  return (
    <tr
      className={`hover:bg-gray-50 ${onRowClick ? "cursor-pointer" : ""}`}
      onClick={() => onRowClick?.(row)}
    >
      {columns.map((column) => (
        <td
          key={column.key}
          className={`text-center px-6 py-4 whitespace-nowrap ${column.width ? column.width : ""}`}
        >
          {column.render ? column.render((row as any)[column.key], row) : (row as any)[column.key]}
        </td>
      ))}
      {actions && actions.length > 0 && (
        <td className="px-6 py-4 whitespace-nowrap flex items-center justify-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {actions.map((action, index) => (
                <DropdownMenuItem
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    action.onClick(row);
                  }}
                  className={action.variant === "destructive" ? "text-red-600" : ""}
                >
                  {action.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </td>
      )}
    </tr>
  );
};

const ReusableTable = <T,>({
  data,
  columns,
  headerConfig,
  actions,
  allFilterActions,
  onRowClick,
  className = "",
  searchValue,
  onSearchChange,
  onDateFilterClick,
}: ReusableTableProps<T>) => {
  return (
    <div className={`mx-auto rounded-2xl bg-white shadow-sm ${className}`}>
      {/* Table Header */}
      <TableHeader
        config={headerConfig}
        searchValue={searchValue}
        allFilterActions={allFilterActions}
        onSearchChange={onSearchChange}
        onDateFilterClick={onDateFilterClick}
      />
      <div className="overflow-x-auto px-4">
        <table className="w-full">
          <thead className="bg-[#16151A]">
            <tr>
              {columns.map((column, index) => (
                <th
                  key={column.key}
                  className={`px-6 py-3 text-center text-xs font-medium tracking-wider text-white uppercase ${column.width || ""} ${index === 0 ? "rounded-tl-lg" : ""} ${index === columns.length -1 && (!actions || actions.length === 0 ? "rounded-tr-lg" : "")}`}
                >
                  {column.label}
                </th>
              ))}
              {actions && actions.length > 0 && (
                <th className="w-16 px-6 py-3 text-center text-xs font-medium tracking-wider text-white uppercase rounded-tr-lg">
                  Action
                </th>
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {data.map((row, index) => (
              <TableRow
                key={index}
                row={row}
                columns={columns}
                actions={actions}
                onRowClick={onRowClick}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReusableTable;
