"use client"

import { ReusableTableProps, TableAction, TableColumn, TableHeaderConfig } from '@/src/types/reusableTable';
import { Calendar, MoreHorizontal, Search } from 'lucide-react';
import React from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu';




const TableHeader = ({ config,
     searchValue,
  onSearchChange,
  onDateFilterClick, }: { config: TableHeaderConfig,  searchValue?: string
  onSearchChange?: (value: string) => void
  onDateFilterClick?: () => void })=>{
 return (
     <div className="flex items-center justify-between p-6 ">
      <h1 className="text-2xl font-semibold text-[#242424]">{config.title}</h1>

      <div className="flex items-center gap-4">
        {config.showSearch && (
          <div className="relative bg-[#F9F9F9] rounded-[50px]">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder={config.searchPlaceholder || "Search"}
              value={searchValue || ""}
              onChange={(e) => onSearchChange?.(e.target.value)}
              className="pl-10 w-64 h-9  rounded-[50px]"
            />
          </div>
        )}

        {config.showDateFilter && (
          <Button onClick={onDateFilterClick} variant="outline" className="h-9 px-4 border-gray-300 text-[#4E4E4E] bg-[#F9F9F9]">
            <Calendar className="h-4 w-4 mr-2" />
            Today
          </Button>
        )}

        {config.actions?.map((action, index) => (
          <Button
            key={index}
            
            className={`h-9 px-4 rounded-[50px] 
                 "bg-black text-white hover:bg-gray-800"
            `}
            onClick={action.onClick}
          >
            {action.icon && <span className="mr-2">{action.icon}</span>}
            {action.label}
          </Button>
        ))}
      </div>
    </div>
 )
}

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
    <tr className={` hover:bg-gray-50 ${onRowClick ? "cursor-pointer" : ""}`} onClick={() => onRowClick?.(row)}>
    {columns.map((column) => (
        <td key={column.key} className={`px-6 py-4 whitespace-nowrap ${column.width ? column.width : ""}`}>
          {column.render ? column.render((row as any)[column.key], row) : (row as any)[column.key]}
        </td>
      ))}
      {actions && actions.length > 0 && (
        <td className="px-6 py-4 whitespace-nowrap">
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
                    e.stopPropagation()
                    action.onClick(row)
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
  )
}


const ReusableTable = <T,>({
  data,
  columns,
  headerConfig,
  actions,
  onRowClick,
  className = "",
 searchValue,
  onSearchChange,
  onDateFilterClick,
}: ReusableTableProps<T>) => {
  return (
    <div className={`w-full max-w-7xl mx-auto rounded-2xl bg-white shadow-sm ${className}`}>
      {/* Table Header */}
        <TableHeader config={headerConfig} searchValue={searchValue}
        onSearchChange={onSearchChange}
        onDateFilterClick={onDateFilterClick}/>
        <div className="overflow-x-auto  px-4">
        <table className="w-full  ">
          <thead className="bg-[#16151A] rounded-t-2xl">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  className={`px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider ${column.width || ""}`}
                >
                  {column.label}
                </th>
              ))}
              {actions && actions.length > 0 && (
                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider w-16">
                  Action
                </th>
              )}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((row, index) => (
              <TableRow key={index} row={row} columns={columns} actions={actions} onRowClick={onRowClick} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReusableTable;
