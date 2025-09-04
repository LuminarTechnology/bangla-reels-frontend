"use client";

import ReusableTable from "@/src/components/common/ReusableTable";
import { Switch } from "@/src/components/ui/switch";
import { TableAction, TableColumn, TableHeaderConfig } from "@/src/types/reusableTable";
import { Plus } from "lucide-react";
import React, { useState } from "react";
import AddAndEditCoinPlanModal from "./AddAndEditCoinPlanModal";

export interface CoinPlanListData {
  id: string;
  no: string;
  planName: string;
  productKey: string;
  price: string;
  offerPrice: string;
  coin: number;
  bonusCoin: number;
  date: string;
  isActive: boolean;
}

const initialCoinPlanListData: CoinPlanListData[] = [
  {
    id: "1",
    no: "01",
    planName: "Basic",
    productKey: "PLAN001",
    price: "5.99",
    offerPrice: "4.99",
    coin: 500,
    bonusCoin: 100,
    date: "31/12/2025",
    isActive: true,
  },
  {
    id: "2",
    no: "01",
    planName: "Basic",
    productKey: "PLAN001",
    price: "5.99",
    offerPrice: "4.99",
    coin: 500,
    bonusCoin: 100,
    date: "31/12/2025",
    isActive: true,
  },
  {
    id: "3",
    no: "01",
    planName: "Basic",
    productKey: "PLAN001",
    price: "5.99",
    offerPrice: "4.99",
    coin: 500,
    bonusCoin: 100,
    date: "31/12/2025",
    isActive: true,
  },
  {
    id: "4",
    no: "01",
    planName: "Basic",
    productKey: "PLAN001",
    price: "5.99",
    offerPrice: "4.99",
    coin: 500,
    bonusCoin: 100,
    date: "31/12/2025",
    isActive: true,
  },
  {
    id: "5",
    no: "01",
    planName: "Basic",
    productKey: "PLAN001",
    price: "5.99",
    offerPrice: "4.99",
    coin: 500,
    bonusCoin: 100,
    date: "31/12/2025",
    isActive: true,
  },
  {
    id: "6",
    no: "01",
    planName: "Basic",
    productKey: "PLAN001",
    price: "5.99",
    offerPrice: "4.99",
    coin: 500,
    bonusCoin: 100,
    date: "31/12/2025",
    isActive: true,
  },
  {
    id: "7",
    no: "01",
    planName: "Basic",
    productKey: "PLAN001",
    price: "5.99",
    offerPrice: "4.99",
    coin: 500,
    bonusCoin: 100,
    date: "31/12/2025",
    isActive: true,
  },
  {
    id: "8",
    no: "01",
    planName: "Basic",
    productKey: "PLAN001",
    price: "5.99",
    offerPrice: "4.99",
    coin: 500,
    bonusCoin: 100,
    date: "31/12/2025",
    isActive: true,
  },
  {
    id: "9",
    no: "01",
    planName: "Basic",
    productKey: "PLAN001",
    price: "5.99",
    offerPrice: "4.99",
    coin: 500,
    bonusCoin: 100,
    date: "31/12/2025",
    isActive: true,
  },
];

const columns: TableColumn<CoinPlanListData>[] = [
  {
    key: "no",
    label: "No",
    width: "w-16",
    render: (value) => <span className="text-sm text-gray-900">{value}</span>,
  },
  {
    key: "planName",
    label: "Plan Name",
    width: "w-28",
    render: (value) => <span className="text-sm text-gray-900">{value}</span>,
  },
  {
    key: "productKey",
    label: "Product Key",
    width: "w-28",
    render: (value) => <span className="text-sm text-gray-900">{value}</span>,
  },
  {
    key: "price",
    label: "Price",
    width: "w-24",
    render: (value) => <span className="text-sm text-gray-900">{value}</span>,
  },
  {
    key: "offerPrice",
    label: "Offer Price",
    width: "w-28",
    render: (value) => <span className="text-sm text-gray-900">{value}</span>,
  },
  {
    key: "coin",
    label: "Coin",
    width: "w-32",
    render: (value) => <span className="text-sm text-gray-900">{value}</span>,
  },
  {
    key: "bonusCoin",
    label: "Bonus Coin",
    width: "w-24",
    render: (value) => <span className="text-sm text-gray-900">{value}</span>,
  },
  {
    key: "date",
    label: "Date",
    width: "w-28",
    render: (value) => <span className="text-sm text-gray-900">{value}</span>,
  },
  {
    key: "isActive",
    label: "Is Active",
    width: "w-24",
    render: (value, row) => (
      <Switch
        checked={value}
        //   onCheckedChange={() => handleLockedToggle(row.id)}
        className="data-[state=checked]:bg-black"
      />
    ),
  },
  
];

const CoinPlanTable = () => {
  // const [episodeListData, setEpisodeListData] = useState<EpisodeListData[]>(initialEpisodeListData)
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"add" | "edit">("add");
  const [selectedPlan, setSelectedPlan] = useState<CoinPlanListData | undefined>();
  const [isLoading, setIsLoading] = React.useState(false);

  const handleAddPlan = () => {
    setModalMode("add");
    setSelectedPlan(undefined);
    setModalOpen(true);
  };

  const handleEditPlan = (plan: CoinPlanListData) => {
    setModalMode("edit");
    setSelectedPlan(plan);
    setModalOpen(true);
  };

  const handleModalSubmit = (data: any) => {
    if (modalMode === "add") {
        // console.log(data);
      // TODO: handle letter
    } else if (modalMode === "edit" && selectedPlan) {
      // TODO: handle letter
    }
  };

  const headerConfig: TableHeaderConfig = {
    title: "List of Coin Plan",
    showSearch: true,
    searchPlaceholder: "Search",
    showDateFilter: true,
    actions: [
      {
        label: "New",
        variant: "default",
        icon: <Plus className="h-4 w-4" />,
        onClick: handleAddPlan,
      },
    ],
  };

  const actions: TableAction<CoinPlanListData>[] = [
    {
      label: "Edit",
      onClick: handleEditPlan,
    },
    {
      label: "Delete",
      variant: "destructive",
      onClick: (plan) => console.warn("Delete plan:", plan.id),
    },
  ];
  return (
    <>
      <ReusableTable
        data={initialCoinPlanListData}
        columns={columns}
        headerConfig={headerConfig}
        actions={actions}
      />

      <AddAndEditCoinPlanModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleModalSubmit}
        mode={modalMode}
        isLoading={isLoading}
      />
    </>
  );
};

export default CoinPlanTable;
