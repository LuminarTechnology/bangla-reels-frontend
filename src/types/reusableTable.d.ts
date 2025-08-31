import React from "react";

export interface TableColumn<T = any> {
  key: string;
  label: string;
  width?: string;
  render?: (value: any, row: T) => React.ReactNode;
  sortable?: boolean;
  cellAlign?: "left" | "center" | "right";
  headerAlign?: "left" | "center" | "right";
}

export interface AllFilterAction<T = any> {
  label: string;
  onClick: (row: T) => void;
}

export interface TableAction<T = any> {
  label: string;
  onClick: (row: T) => void;
  variant?: "default" | "destructive";
}

export interface TableHeaderConfig {
  title: string;
  searchPlaceholder?: string;
  showSearch?: boolean;
  showDateFilter?: boolean;
  showAllFilter?: boolean;
  actions?: Array<{
    label: string;
    onClick: () => void;
    variant?: "default" | "outline";
    icon?: React.ReactNode;
  }>;
}
export interface ReusableTableProps<T = any> {
  data: T[];
  columns: TableColumn<T>[];
  headerConfig: TableHeaderConfig;
  actions?: TableAction<T>[];
  allFilterActions?: TableAction<T>[];
  onRowClick?: (row: T) => void;
  className?: string;
  searchValue?: string;
  onSearchChange?: (value: string) => void;
  onDateFilterClick?: () => void;
  showDirectDelete?: boolean;
}
