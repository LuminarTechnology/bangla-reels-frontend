"use client";
import ReusableTable from "@/src/components/common/ReusableTable";
import { Button } from "@/src/components/ui/button";
import { TableColumn, TableHeaderConfig } from "@/src/types/reusableTable";
import { useMemo, useState } from "react";

interface CoinHistoryData {
  no: string;
  name: string;
  totalPurchases: number;
  amountSpent: string;
  date: string;
}

const CoinHistoryData: CoinHistoryData[] = [
  {
    no: "01",
    name: "Basic",
    totalPurchases: 150,
    amountSpent: "$5,000",
    date: "2025-08-01",
  },
  {
    no: "02",
    name: "Premium",
    totalPurchases: 150,
    amountSpent: "$5,000",
    date: "2025-08-01",
  },
  {
    no: "03",
    name: "gold",
    totalPurchases: 150,
    amountSpent: "$5,000",
    date: "2025-08-01",
  },
  {
    no: "04",
    name: "Basic",
    totalPurchases: 150,
    amountSpent: "$5,000",
    date: "2025-08-01",
  },
  {
    no: "05",
    name: "Basic",
    totalPurchases: 150,
    amountSpent: "$5,000",
    date: "2025-08-01",
  },
  {
    no: "07",
    name: "Basic",
    totalPurchases: 150,
    amountSpent: "$5,000",
    date: "2025-08-01",
  },
  {
    no: "08",
    name: "Basic",
    totalPurchases: 150,
    amountSpent: "$5,000",
    date: "2025-08-01",
  },
  {
    no: "09",
    name: "Basic",
    totalPurchases: 150,
    amountSpent: "$5,000",
    date: "2025-08-01",
  },
  {
    no: "10",
    name: "Basic",
    totalPurchases: 150,
    amountSpent: "$5,000",
    date: "2025-08-01",
  },
];

const columns: TableColumn<CoinHistoryData>[] = [
  {
    key: "no",
    label: "No",
    width: "w-16",
  },
  {
    key: "name",
    label: "Name",
    width: "w-16",
  },
  {
    key: "totalPurchases",
    label: "Total Purchases",
    width: "w-16",
  },
  {
    key: "amountSpent",
    label: "Amount Spent",
    width: "w-16",
  },
  {
    key: "date",
    label: "Date",
    width: "w-16",
    render: (value) => <span className="">{value}</span>,
  },
  {
    key: "history",
    label: "History",
    width: "w-16",
    render: () => (
      <Button variant="ghost" size="sm" className="">
        View Details
      </Button>
    ),
  },
];

const headerConfig: TableHeaderConfig = {
  title: "Total Earnings: $12,366",
  showSearch: true,
  searchPlaceholder: "Search",
  showDateFilter: true,
};

function CoinHistoryTable() {
  const [searchValue, setSearchValue] = useState("");
  const [showTodayOnly, setShowTodayOnly] = useState(false);

  const filteredData = useMemo(() => {
    let filtered = CoinHistoryData;

    // search filter
    if (searchValue.trim()) {
      filtered = filtered.filter(
        (user) =>
          user.name.toLowerCase().includes(searchValue.toLowerCase()) ||
          user.no.includes(searchValue)
      );
    }

    // Apply date filter Today
    if (showTodayOnly) {
      const today = new Date().toLocaleDateString("en-BD");
      filtered = filtered.filter((plan) => plan.date === today);
    }

    return filtered;
  }, [searchValue, showTodayOnly]);

  const handleDateFilterClick = () => {
    setShowTodayOnly(!showTodayOnly);
  };

  return (
    <div className="mt-4">
      <ReusableTable
        data={filteredData}
        columns={columns}
        headerConfig={headerConfig}
        onRowClick={(row) => console.warn("Row clicked", row)}
        searchValue={searchValue}
        onSearchChange={setSearchValue}
        onDateFilterClick={handleDateFilterClick}
      />
    </div>
  );
}

export default CoinHistoryTable;