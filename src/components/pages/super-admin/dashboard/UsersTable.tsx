"use client";
import ReusableTable from "@/src/components/common/ReusableTable";
import { Avatar, AvatarFallback, AvatarImage } from "@/src/components/ui/avatar";
import { Button } from "@/src/components/ui/button";
import { Switch } from "@/src/components/ui/switch";
import { AllFilterAction, TableAction, TableColumn, TableHeaderConfig } from "@/src/types/reusableTable";
import { useMemo, useState } from "react";

interface UserData {
  no: string;
  id: string;
  name: string;
  avatar: string;
  coins: number;
  plan: string;
  date: string;
  isBlocked: boolean;
}

const userData: UserData[] = [
  {
    no: "01",
    id: "612651",
    name: "Eleanor Pena",
    avatar: "/professional-woman.png",
    coins: 5296,
    plan: "A",
    date: "8/24/2025",
    isBlocked: true,
  },
  {
    no: "02",
    id: "612651",
    name: "Guy Hawkins",
    avatar: "/professional-man.png",
    coins: 5296,
    plan: "A",
    date: "8/23/2025",
    isBlocked: false,
  },
  {
    no: "03",
    id: "612651",
    name: "Courtney Henry",
    avatar: "/business-woman.png",
    coins: 5296,
    plan: "A",
    date: "8/22/2025",
    isBlocked: true,
  },
  {
    no: "04",
    id: "612651",
    name: "Dianne Russell",
    avatar: "/casual-woman.png",
    coins: 5296,
    plan: "A",
    date: "8/12/2025",
    isBlocked: false,
  },
  {
    no: "05",
    id: "612651",
    name: "Darrell Steward",
    avatar: "/casual-man.png",
    coins: 5296,
    plan: "A",
    date: "7/24/2025",
    isBlocked: false,
  },
  {
    no: "07",
    id: "612651",
    name: "Albert Flores",
    avatar: "/business-man.png",
    coins: 5296,
    plan: "A",
    date: "7/21/2025",
    isBlocked: false,
  },
  {
    no: "08",
    id: "612651",
    name: "Ronald Richards",
    avatar: "/professional-man-glasses.png",
    coins: 5296,
    plan: "A",
    date: "8/23/2025",
    isBlocked: false,
  },
  {
    no: "09",
    id: "612651",
    name: "Jacob Jones",
    avatar: "/young-man.png",
    coins: 5296,
    plan: "A",
    date: "8/23/2025",
    isBlocked: false,
  },
  {
    no: "10",
    id: "612651",
    name: "Darlene Robertson",
    avatar: "/professional-woman-smile.png",
    coins: 5296,
    plan: "A",
    date: "8/11/2025",
    isBlocked: false,
  },
];

const getInitials = (name: string) => {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
};

const columns: TableColumn<UserData>[] = [
  {
    key: "no",
    label: "No",
    width: "w-16",
  },
  {
    key: "id",
    label: "Unique ID",
    width: "w-30",
    render: (value) => <span className="text-gray-500">{value}</span>,
  },
  {
    key: "name",
    label: "User Name",
    width: "w-48",
    render: (value, row) => (
      <div className="flex items-center">
        <Avatar className="mr-3 h-8 w-8">
          <AvatarImage src={row.avatar || "/placeholder.svg"} alt={row.name} />
          <AvatarFallback className="text-xs">{getInitials(row.name)}</AvatarFallback>
        </Avatar>
        <span className="text-sm font-medium text-[#242424]">{value}</span>
      </div>
    ),
  },
  {
    key: "coins",
    label: "Coins",
    width: "w-20",
  },
  {
    key: "plan",
    label: "Plan",
    width: "w-16",
  },
  {
    key: "date",
    label: "Date",
    width: "w-24",
    render: (value) => <span className="text-gray-500">{value}</span>,
  },
  {
    key: "isBlocked",
    label: "Is Block",
    width: "w-26",
    render: (value) => <Switch checked={value} className="data-[state=checked]:bg-black" />,
  },
  {
    key: "info",
    label: "Info",
    width: "w-16",
    render: () => (
      <Button variant="ghost" size="sm" className="hover:text-blue-800">
        View
      </Button>
    ),
  },
  {
    key: "history",
    label: "History",
    width: "w-16",
    render: () => (
      <Button variant="ghost" size="sm" className="hover:text-blue-800">
        View
      </Button>
    ),
  },
];

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

const allFilterActions: AllFilterAction<UserData>[] = [
  {
    label: "All",
    onClick: (row) => console.warn("Edit", row),
  },
  {
    label: "Today",
    onClick: (row) => console.warn("Edit", row),
  },
  {
    label: "Yesterday",
    onClick: (row) => console.warn("Edit", row),
  },
  {
    label: "Last 7 days",
    onClick: (row) => console.warn("Edit", row),
  },
  {
    label: "Last 30 days",
    onClick: (row) => console.warn("Edit", row),
  },
  {
    label: "This Month",
    onClick: (row) => console.warn("Edit", row),
  },
  {
    label: "Last Month",
    onClick: (row) => console.warn("Edit", row),
  },
  {
    label: "Custom Range",
    onClick: (row) => console.warn("Edit", row),
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
