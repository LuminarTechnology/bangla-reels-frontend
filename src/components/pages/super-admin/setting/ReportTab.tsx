"use client";
import React, { useMemo, useState } from "react";
import ReusableTable from "@/src/components/common/ReusableTable";
import { TableAction, TableColumn, TableHeaderConfig } from "@/src/types/reusableTable";
import { Plus } from "lucide-react";
import { reportData, reportDataTypes } from "@/src/constants/AdminReportItems";
import ReportModal from "./ReportModal";

function ReportTab() {
  const [searchValue, setSearchValue] = useState("");
  const [showTodayOnly, setShowTodayOnly] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"add" | "edit">("add");
  const [editingModal, setEditingModal] = useState<reportDataTypes | null>(null);

  const filteredData = useMemo(() => {
    let filtered = reportData;

    // search filter
    if (searchValue.trim()) {
      filtered = filtered.filter(
        (user) =>
          user.title.toLowerCase().includes(searchValue.toLowerCase()) ||
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

  const handleEditModal = (episode: reportDataTypes) => {
    setEditingModal(episode);
    setModalMode("edit");
    setIsModalOpen(true);
  };

  const actions: TableAction<reportDataTypes>[] = [
    {
      label: "Edit",
      onClick: handleEditModal,
    },
    {
      label: "Delete",
      onClick: (data) => console.warn("Deleted:", data.id),
    },
  ];

  const columns: TableColumn<reportDataTypes>[] = [
    {
      key: "no",
      label: "No",
      width: "w-16",
    },
    {
      key: "title",
      label: "Title",
      width: "w-fit",
    },
    {
      key: "date",
      label: "Date",
      width: "w-fit",
    }
  ];

  const headerConfig: TableHeaderConfig = {
    title: "List of Reports Reason",
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
      <ReportModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleModalSubmit}
        mode={modalMode}
        isLoading={isLoading}
      />
    </div>
  );
}

export default ReportTab;