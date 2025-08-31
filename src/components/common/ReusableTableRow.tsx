"use client";

import { TableAction, TableColumn } from "@/src/types/reusableTable";
import { MoreHorizontal, Trash2 } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export const ReusableTableRow = <T,>({
  row,
  columns,
  actions,
  onRowClick,
  showDirectDelete = false,
}: {
  row: T;
  columns: TableColumn<T>[];
  actions?: TableAction<T>[];
  onRowClick?: (row: T) => void;
  showDirectDelete?: boolean;
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
        <td className="px-6 py-4 whitespace-nowrap text-center">
          {showDirectDelete && actions.some(action => action.label === "Delete") ? (
            actions
              .filter(action => action.label === "Delete")
              .map((action, index) => (
                <span
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    action.onClick(row);
                  }}
                >
                  <Trash2 className="size-5"/>
                </span>
              ))
          ) : (
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
          )}
        </td>
      )}
    </tr>
  );
};
