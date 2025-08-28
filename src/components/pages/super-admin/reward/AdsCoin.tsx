"use client";
import React, { useMemo, useState } from "react";
import ReusableTable from "@/src/components/common/ReusableTable";
import { FormInputField } from "@/src/components/forms/FormInputField";
import { adsCoinRewardData, AdsCoinRewardData, inputColorScheme } from "@/src/constants/AdsCoinRewardItems";
import { adsCoinRewardSchema, adsCoinsRewardData } from "@/src/schema/adsCoinRewardTabAndModal.schema";
import { TableAction, TableColumn, TableHeaderConfig } from "@/src/types/reusableTable";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus } from "lucide-react";
import { useForm } from "react-hook-form";
import AdsCoinModal from "./AdsCoinModal";

function AdsCoin() {
  const [searchValue, setSearchValue] = useState("");
  const [showTodayOnly, setShowTodayOnly] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"add" | "edit">("add");
  const [editingModal, setEditingModal] = useState<AdsCoinRewardData | null>(null);

  const filteredData = useMemo(() => {
    let filtered = adsCoinRewardData;

    // search filter
    if (searchValue.trim()) {
      filtered = filtered.filter(
        (user) =>
          user.label.toLowerCase().includes(searchValue.toLowerCase()) ||
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

  const handleEditModal = (episode: AdsCoinRewardData) => {
    setEditingModal(episode);
    setModalMode("edit");
    setIsModalOpen(true);
  };

  const actions: TableAction<AdsCoinRewardData>[] = [
    {
      label: "Edit",
      onClick: handleEditModal,
    },
    {
      label: "Delete",
      onClick: (data) => console.warn("Deleted:", data.id),
    },
    {
      label: "Add Episode",
      onClick: (data) => console.warn("Added:", data.id),
    },
  ];

  const columns: TableColumn<AdsCoinRewardData>[] = [
    {
      key: "no",
      label: "No",
      width: "w-16",
    },
    {
      key: "label",
      label: "Label",
      width: "w-16",
    },
    {
      key: "displayInterval",
      label: "Display Interval",
      width: "w-16",
    },
    {
      key: "coinEarned",
      label: "Coin Earned",
      width: "w-16",
    }
  ];

  const headerConfig: TableHeaderConfig = {
    title: "Ads Coin Reward List",
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

  const {
    handleSubmit,
    formState: { isSubmitting },
    control,
  } = useForm<adsCoinsRewardData>({
    resolver: zodResolver(adsCoinRewardSchema),
  });

  // Form submission
  const onSubmit = async (data: adsCoinsRewardData) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.warn("Ads coin reward data submitted successfully!");
      alert("Ads coin reward data submitted successfully!");
    } catch (error) {
      console.error("Error submitting Ads Coin reward data:", error);
      alert("Failed to submit Ads coin reward data. Please try again.");
    }
  };

  return (
    <div className="mt-4 space-y-6">
      <form onSubmit={handleSubmit(onSubmit)} className="mx-auto rounded-2xl bg-white shadow-sm p-6 space-y-2.5">
        <div className="flex justify-between items-center pb-2.5 border-b">
          <h1 className="font-semibold text-2xl text-[#242424]">Ads Coin Reward</h1>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-fit cursor-pointer  disabled:cursor-not-allowed disabled:opacity-50 font-semibold text-base bg-[#16151A] rounded-full text-white px-5 py-3"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 justify-between items-center gap-2.5">
          <FormInputField
            control={control}
            name="maxAds"
            type="number"
            label="Set Maximum ads per day"
            placeholder="Example: 6"
            className="rounded-3xl"
            colorScheme={inputColorScheme}
          />
          <FormInputField
            control={control}
            name="coinPerAd"
            type="number"
            label="Coin Earned per Ad"
            placeholder="Example: 10"
            className="rounded-3xl"
            colorScheme={inputColorScheme}
          />
          <FormInputField
            control={control}
            name="totalAdsView"
            type="number"
            label="Total Ads Viewed Today"
            placeholder="Example: 500"
            className="rounded-3xl"
            colorScheme={inputColorScheme}
          />
        </div>
      </form>

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
      <AdsCoinModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleModalSubmit}
        mode={modalMode}
        isLoading={isLoading}
      />
    </div>
  );
}

export default AdsCoin;