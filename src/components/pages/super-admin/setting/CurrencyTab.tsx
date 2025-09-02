"use client";
import { Plus } from "lucide-react";
import React, { useMemo, useState } from "react";
import ReusableTable from "@/src/components/common/ReusableTable";
import { currencyData, currencyDataTypes } from "@/src/constants/AdminCurrencyItems";
import { TableAction, TableColumn, TableHeaderConfig } from "@/src/types/reusableTable";
import { Switch } from "@/src/components/ui/switch";
import CurrencyModal from "./CurrencyModal";

function CurrencyTab() {
  const [searchValue, setSearchValue] = useState("");
  const [showTodayOnly, setShowTodayOnly] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"add" | "edit">("add");
  const [editingModal, setEditingModal] = useState<currencyDataTypes | null>(null);

  const filteredData = useMemo(() => {
    let filtered = currencyData;

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

  const handleNewClick = () => {
    setModalMode("add");
    setEditingModal(null);
    setIsModalOpen(true);
  };

  // Modal
  const [isLoading, setIsLoading] = React.useState(false);

  const handleModalSubmit = (data: any) => {
    if (modalMode === "add") {
      console.warn(data);
      // TODO: handle letter
    } else if (modalMode === "edit") {
      // TODO: handle letter
    }
  };

  const handleEditModal = (episode: currencyDataTypes) => {
    setEditingModal(episode);
    setModalMode("edit");
    setIsModalOpen(true);
  };

  const actions: TableAction<currencyDataTypes>[] = [
    {
      label: "Edit",
      onClick: handleEditModal,
    },
    {
      label: "Delete",
      onClick: (data) => console.warn("Deleted:", data.id),
    },
  ];

  const columns: TableColumn<currencyDataTypes>[] = [
    {
      key: "no",
      label: "No",
      width: "w-16",
    },
    {
      key: "name",
      label: "Name",
      width: "w-fit",
    },
    {
      key: "symbol",
      label: "Symbol",
      width: "w-fit",
    },
    {
      key: "currencyCode",
      label: "Currency Code",
      width: "w-fit",
    },
    {
      key: "countryCode",
      label: "Country Code",
      width: "w-fit",
    },
    {
      key: "default",
      label: "Default",
      width: "w-fit",
      render: (value) => <Switch checked={value} className="data-[state=checked]:bg-black cursor-pointer" />
    },
    {
      key: "date",
      label: "Date",
      width: "w-fit",
    },
  ];

  const headerConfig: TableHeaderConfig = {
    title: "List of Currency",
    showSearch: true,
    searchPlaceholder: "Search",
    showDateFilter: true,
    actions: [
      {
        label: "New",
        variant: "default",
        icon: <Plus className="h-4 w-4" />,
        onClick: handleNewClick,
      },
    ],
  };

  return (
    <div className="mt-4 space-y-6">

      <ReusableTable
        data={filteredData}
        columns={columns}
        headerConfig={headerConfig}
        onRowClick={(row) => console.warn("Row clicked", row)}
        searchValue={searchValue}
        onSearchChange={setSearchValue}
        onDateFilterClick={handleDateFilterClick}
        actions={actions}
      />
      <CurrencyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleModalSubmit}
        mode={modalMode}
        isLoading={isLoading}
      />
    </div>
  );
}

export default CurrencyTab;