"use client";
import ReusableTable from "@/src/components/common/ReusableTable";
import { Switch } from "@/src/components/ui/switch";
import { TableAction, TableColumn, TableHeaderConfig } from "@/src/types/reusableTable";
import { Plus } from "lucide-react";
import { useMemo, useState } from "react";

interface UserData {
  no: string;
  id: string;
  categoryName: string;
  totalMovies: string;
  date: string;
  isActive: boolean;
}

const userData: UserData[] = [
  {
    "no": "001",
    "id": "USR001",
    "categoryName": "love",
    "totalMovies": "5",
    "date": "31/12/2024",
    "isActive": true
  },
  {
    "no": "002",
    "id": "USR002",
    "categoryName": "crime",
    "totalMovies": "8",
    "date": "15/11/2024",
    "isActive": false
  },
  {
    "no": "003",
    "id": "USR003",
    "categoryName": "drama",
    "totalMovies": "3",
    "date": "20/10/2024",
    "isActive": true
  },
  {
    "no": "004",
    "id": "USR004",
    "categoryName": "action",
    "totalMovies": "6",
    "date": "05/09/2024",
    "isActive": true
  },
  {
    "no": "005",
    "id": "USR005",
    "categoryName": "comedy",
    "totalMovies": "4",
    "date": "10/12/2024",
    "isActive": false
  },
  {
    "no": "006",
    "id": "USR006",
    "categoryName": "thriller",
    "totalMovies": "7",
    "date": "25/11/2024",
    "isActive": true
  },
  {
    "no": "007",
    "id": "USR007",
    "categoryName": "horror",
    "totalMovies": "2",
    "date": "30/09/2024",
    "isActive": false
  },
  {
    "no": "008",
    "id": "USR008",
    "categoryName": "romance",
    "totalMovies": "9",
    "date": "15/12/2024",
    "isActive": true
  },
  {
    "no": "009",
    "id": "USR009",
    "categoryName": "sci-fi",
    "totalMovies": "5",
    "date": "01/11/2024",
    "isActive": true
  },
  {
    "no": "010",
    "id": "USR010",
    "categoryName": "adventure",
    "totalMovies": "6",
    "date": "20/12/2024",
    "isActive": false
  }
]

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
    width: "w-fit",
  },
  {
    key: "id",
    label: "Unique ID",
    width: "w-fit",
    render: (value) => <span className="text-gray-500">{value}</span>,
  },
  {
    key: "categoryName",
    label: "Category Name",
    width: "w-fit",
  },
  {
    key: "totalMovies",
    label: "Total Movies",
    width: "w-fit",
  },
  {
    key: "date",
    label: "Date",
    width: "w-fit",
    render: (value) => <span className="text-gray-500">{value}</span>,
  },
  {
    key: "isBlocked",
    label: "Is Active",
    width: "w-fit",
    render: (value) => <Switch checked={value} className="data-[state=checked]:bg-black" />,
  }
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
          user.categoryName.toLowerCase().includes(searchValue.toLowerCase()) ||
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
