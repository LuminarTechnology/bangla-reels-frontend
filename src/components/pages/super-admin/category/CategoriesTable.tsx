"use client";
import ReusableTable from "@/src/components/common/ReusableTable";
import { Avatar, AvatarFallback, AvatarImage } from "@/src/components/ui/avatar";
import { Button } from "@/src/components/ui/button";
import { Switch } from "@/src/components/ui/switch";
import { TableAction, TableColumn, TableHeaderConfig } from "@/src/types/reusableTable";
import { Plus } from "lucide-react";
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
    date: "31/12/2024",
    isBlocked: true,
  },
  {
    no: "02",
    id: "612651",
    name: "Guy Hawkins",
    avatar: "/professional-man.png",
    coins: 5296,
    plan: "A",
    date: "31/12/2024",
    isBlocked: false,
  },
  {
    no: "03",
    id: "612651",
    name: "Courtney Henry",
    avatar: "/business-woman.png",
    coins: 5296,
    plan: "A",
    date: "31/12/2024",
    isBlocked: true,
  },
  {
    no: "04",
    id: "612651",
    name: "Dianne Russell",
    avatar: "/casual-woman.png",
    coins: 5296,
    plan: "A",
    date: "31/12/2024",
    isBlocked: false,
  },
  {
    no: "05",
    id: "612651",
    name: "Darrell Steward",
    avatar: "/casual-man.png",
    coins: 5296,
    plan: "A",
    date: "31/12/2024",
    isBlocked: false,
  },
  {
    no: "07",
    id: "612651",
    name: "Albert Flores",
    avatar: "/business-man.png",
    coins: 5296,
    plan: "A",
    date: "31/12/2024",
    isBlocked: false,
  },
  {
    no: "08",
    id: "612651",
    name: "Ronald Richards",
    avatar: "/professional-man-glasses.png",
    coins: 5296,
    plan: "A",
    date: "31/12/2024",
    isBlocked: false,
  },
  {
    no: "09",
    id: "612651",
    name: "Jacob Jones",
    avatar: "/young-man.png",
    coins: 5296,
    plan: "A",
    date: "31/12/2024",
    isBlocked: false,
  },
  {
    no: "10",
    id: "612651",
    name: "Darlene Robertson",
    avatar: "/professional-woman-smile.png",
    coins: 5296,
    plan: "A",
    date: "31/12/2024",
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
    width: "w-48 text-start",
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
  title: "List of Categories",
  showSearch: true,
  searchPlaceholder: "Search",
  showDateFilter: true,

  actions: [
    {
      label: "New",
      onClick: () => console.warn("New clicked"),
      variant: "default",
      icon: <Plus className="h-4 w-4" />,
    },
  ],
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
export function CategoriesTable() {
  const [searchValue, setSearchValue] = useState("");
  const [showTodayOnly, setShowTodayOnly] = useState(false);

  const filteredData = useMemo(() => {
    let filtered = userData;

    // search filter
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

    return filtered;
  }, [searchValue, showTodayOnly]);

  const handleDateFilterClick = () => {
    setShowTodayOnly(!showTodayOnly);
  };

  return (
    <div>
      <ReusableTable
        data={filteredData}
        columns={columns}
        headerConfig={headerConfig}
        actions={actions}
        onRowClick={(row) => console.warn("Row clicked", row)}
        searchValue={searchValue}
        onSearchChange={setSearchValue}
        onDateFilterClick={handleDateFilterClick}
      />
    </div>
  );
}
