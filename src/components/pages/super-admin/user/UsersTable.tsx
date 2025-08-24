"use client";
import ReusableTable from "@/src/components/common/ReusableTable";
import { TableAction, TableHeaderConfig } from "@/src/types/reusableTable";
import { useMemo, useState } from "react";
import { columns, userData } from "@/src/constants/SuperAdminItems"
import { UserData } from "@/src/types/superAdminUsers";

const headerConfig: TableHeaderConfig = {
  title: "List of Users",
  showSearch: true,
  searchPlaceholder: "Search",
  showDateFilter: true,
  showAllFilter: true
};

const actions: TableAction<UserData>[] = [
  {
    label: "Edit",
    onClick: (row) => console.warn("Edit", row),
  },
  {
    label: "Delete",
    onClick: (row) => console.warn("Delete", row),
    variant: "destructive",
  },
];

export function UsersTable() {
  const [searchValue, setSearchValue] = useState("");
  const [showTodayOnly, setShowTodayOnly] = useState(false);

  const handleDateFilterClick = () => {
    setShowTodayOnly(!showTodayOnly);
  };

  const [dateFilter, setDateFilter] = useState("all");
  const [customRange, setCustomRange] = useState({
    startDate: null,
    endDate: null
  });

  const filteredData = useMemo(() => {
    let filtered = userData;

    // Search filter
    if (searchValue.trim()) {
      filtered = filtered.filter(
        (user) =>
          user.name.toLowerCase().includes(searchValue.toLowerCase()) ||
          user.id.includes(searchValue) ||
          user.no.includes(searchValue)
      );
    }

    // Apply date filter Today
    if (showTodayOnly) {
      const today = new Date().toLocaleDateString("en-BD");
      filtered = filtered.filter((user) => user.date === today);
    }

    // Apply all date filter
    if (dateFilter !== "all") {
      const today = new Date();
      const todayStr = today.toLocaleDateString("en-BD");

      filtered = filtered.filter((user) => {
        const userDate = new Date(user.date);
        const userDateStr = userDate.toLocaleDateString("en-BD");

        switch (dateFilter) {
          case "today":
            return userDateStr === todayStr;

          case "yesterday": {
            const yesterday = new Date(today);
            yesterday.setDate(today.getDate() - 1);
            return userDateStr === yesterday.toLocaleDateString("en-BD");
          }

          case "last7days": {
            const last7Days = new Date(today);
            last7Days.setDate(today.getDate() - 7);
            return userDate >= last7Days && userDate <= today;
          }

          case "last30days": {
            const last30Days = new Date(today);
            last30Days.setDate(today.getDate() - 30);
            return userDate >= last30Days && userDate <= today;
          }

          case "thisMonth": {
            const firstDayThisMonth = new Date(today.getFullYear(), today.getMonth(), 1);
            return userDate >= firstDayThisMonth && userDate <= today;
          }

          case "lastMonth": {
            const firstDayLastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 1);
            const lastDayLastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
            return userDate >= firstDayLastMonth && userDate <= lastDayLastMonth;
          }

          default:
            return true;
        }
      });
    }

    return filtered;
  }, [searchValue, showTodayOnly, dateFilter]);

  const handleDateFilterChange = (filterType: string) => {
    setDateFilter(filterType);
    if (filterType !== "custom") {
      setCustomRange({ startDate: null, endDate: null });
    }
  };

  const dateFilterActions = [
    { label: "All", onClick: () => handleDateFilterChange("all") },
    { label: "Today", onClick: () => handleDateFilterChange("today") },
    { label: "Yesterday", onClick: () => handleDateFilterChange("yesterday") },
    { label: "Last 7 Days", onClick: () => handleDateFilterChange("last7days") },
    { label: "Last 30 Days", onClick: () => handleDateFilterChange("last30days") },
    { label: "This Month", onClick: () => handleDateFilterChange("thisMonth") },
    { label: "Last Month", onClick: () => handleDateFilterChange("lastMonth") },
    { label: "Custom Range", onClick: () => handleDateFilterChange("custom") },
  ];

  return (
    <div>
      <ReusableTable
        data={filteredData}
        columns={columns}
        headerConfig={headerConfig}
        actions={actions}
        allFilterActions={dateFilterActions}
        onRowClick={(row) => console.warn("Row clicked", row)}
        searchValue={searchValue}
        onSearchChange={setSearchValue}
        onDateFilterClick={handleDateFilterClick}
      />
    </div>
  );
}
