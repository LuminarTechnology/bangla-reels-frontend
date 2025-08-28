"use client";
import ReusableTable from "@/src/components/common/ReusableTable";
import { Button } from "@/src/components/ui/button";
import { TableColumn, TableHeaderConfig } from "@/src/types/reusableTable";
import { useMemo, useState } from "react";

interface VIPHistoryData {
  no: string;
  id: string;
  userName: string; 
  name: string;
  paymentGateway: string;
  price: string;
  offerPrice: string;
  validity: string;
  validityType: string;
  date: string;
}

const VIPHistoryData: VIPHistoryData[] = [
  {
    no: "01",
    id: "VIP001",
    userName: "John Doe",
    name: "Premium Plan",
    paymentGateway: "Premium Plan",
    price: "$19.99",
    offerPrice: "$14.99",
    validity: "1 Month",
    validityType: "Monthly",
    date: "2025-08-01",
  },
  {
    no: "02",
    id: "VIP001",
    userName: "John Doe",
    name: "Premium Plan",
    paymentGateway: "Premium Plan",
    price: "$19.99",
    offerPrice: "$14.99",
    validity: "1 Month",
    validityType: "Monthly",
    date: "2025-08-01",
  },
  {
    no: "03",
    id: "VIP001",
    userName: "John Doe",
    name: "Premium Plan",
    paymentGateway: "Premium Plan",
    price: "$19.99",
    offerPrice: "$14.99",
    validity: "1 Month",
    validityType: "Monthly",
    date: "2025-08-01",
  },
  {
    no: "04",
    id: "VIP001",
    userName: "John Doe",
    name: "Premium Plan",
    paymentGateway: "Premium Plan",
    price: "$19.99",
    offerPrice: "$14.99",
    validity: "1 Month",
    validityType: "Monthly",
    date: "2025-08-01",
  },
  {
    no: "05",
    id: "VIP001",
    userName: "John Doe",
    name: "Premium Plan",
    paymentGateway: "Premium Plan",
    price: "$19.99",
    offerPrice: "$14.99",
    validity: "1 Month",
    validityType: "Monthly",
    date: "2025-08-01",
  },
  {
    no: "07",
    id: "VIP001",
    userName: "John Doe",
    name: "Premium Plan",
    paymentGateway: "Premium Plan",
    price: "$19.99",
    offerPrice: "$14.99",
    validity: "1 Month",
    validityType: "Monthly",
    date: "2025-08-01",
  },
  {
    no: "08",
    id: "VIP001",
    userName: "John Doe",
    name: "Premium Plan",
    paymentGateway: "Premium Plan",
    price: "$19.99",
    offerPrice: "$14.99",
    validity: "1 Month",
    validityType: "Monthly",
    date: "2025-08-01",
  },
  {
    no: "09",
    id: "VIP001",
    userName: "John Doe",
    name: "Premium Plan",
    paymentGateway: "Premium Plan",
    price: "$19.99",
    offerPrice: "$14.99",
    validity: "1 Month",
    validityType: "Monthly",
    date: "2025-08-01",
  },
  {
    no: "10",
    id: "VIP001",
    userName: "John Doe",
    name: "Premium Plan",
    paymentGateway: "Premium Plan",
    price: "$19.99",
    offerPrice: "$14.99",
    validity: "1 Month",
    validityType: "Monthly",
    date: "2025-08-01",
  },
];

const columns: TableColumn<VIPHistoryData>[] = [
  {
    key: "no",
    label: "No",
    width: "w-16",
  },
  {
    key: "id",
    label: "Unique ID",
    width: "w-16",
  },
  {
    key: "userName",
    label: "UserName",
    width: "w-16",
  },
  {
    key: "name",
    label: "Name",
    width: "w-16",
  },
  {
    key: "paymentGateway",
    label: "Payment Gateway",
    width: "w-16",
  },
  {
    key: "offerPrice",
    label: "Offer Price",
    width: "w-16",
  },
  {
    key: "validity",
    label: "Validity",
    width: "w-16",
  },
  {
    key: "validityType",
    label: "Validity Type",
    width: "w-16",
  },
  {
    key: "date",
    label: "Date",
    width: "w-16",
    render: (value) => <span className="">{value}</span>,
  }
];

const headerConfig: TableHeaderConfig = {
  title: "Total Earnings: $12,366",
  showSearch: true,
  searchPlaceholder: "Search",
  showDateFilter: true,
};

function VIPHistoryTable() {
  const [searchValue, setSearchValue] = useState("");
  const [showTodayOnly, setShowTodayOnly] = useState(false);

  const filteredData = useMemo(() => {
    let filtered = VIPHistoryData;

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

export default VIPHistoryTable;