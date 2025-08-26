"use client";

import ReusableTable from "@/src/components/common/ReusableTable";
import { Switch } from "@/src/components/ui/switch";
import { TableAction, TableColumn, TableHeaderConfig } from "@/src/types/reusableTable";
import { Plus } from "lucide-react";
import React, { useState } from "react";
import AddAndEditVipPlanModal from "./AddAndEditVipPlanModal";
import { initialVipPlanListData, VipPlanListData } from "@/src/constants/AdminDashboardVipPlansItems";

const columns: TableColumn<VipPlanListData>[] = [
  {
    key: "no",
    label: "No",
    width: "w-16",
    render: (value) => <span className="text-sm text-gray-900">{value}</span>,
  },
  {
    key: "productKey",
    label: "Product Key",
    width: "w-28",
    render: (value) => <span className="text-sm text-gray-900">{value}</span>,
  },
  {
    key: "tags",
    label: "Tags",
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
    key: "validity",
    label: "Validity",
    width: "w-32",
    render: (value) => <span className="text-sm text-gray-900">{value}</span>,
  },
  {
    key: "validityType",
    label: "Validity Type",
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

const VipPlanTable = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"add" | "edit">("add");
  const [selectedPlan, setSelectedPlan] = useState<VipPlanListData | undefined>();
  const [isLoading, setIsLoading] = React.useState(false);

  const handleAddPlan = () => {
    setModalMode("add");
    setSelectedPlan(undefined);
    setModalOpen(true);
  };

  const handleEditPlan = (plan: VipPlanListData) => {
    setModalMode("edit");
    setSelectedPlan(plan);
    setModalOpen(true);
  };

  const handleModalSubmit = (data: any) => {
    if (modalMode === "add") {
        console.warn(data);
      // TODO: handle letter
    } else if (modalMode === "edit" && selectedPlan) {
      // TODO: handle letter
    }
  };

  const headerConfig: TableHeaderConfig = {
    title: "List of VIP Plan",
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

  const actions: TableAction<VipPlanListData>[] = [
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
        data={initialVipPlanListData}
        columns={columns}
        headerConfig={headerConfig}
        actions={actions}
      />

      <AddAndEditVipPlanModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleModalSubmit}
        mode={modalMode}
        isLoading={isLoading}
      />
    </>
  );
};

export default VipPlanTable;
