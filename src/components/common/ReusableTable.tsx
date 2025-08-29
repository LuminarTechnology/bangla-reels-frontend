"use client";

import { ReusableTableProps } from "@/src/types/reusableTable";
import React from "react";
import { ReusableTableHeader } from "./ReusableTableHeader";
import { ReusableTableRow } from "./ReusableTableRow";

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
      <ReusableTableHeader
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
              <ReusableTableRow
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
