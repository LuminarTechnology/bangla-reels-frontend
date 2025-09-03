"use client";
import ReusableTable from "@/src/components/common/ReusableTable";
import { Switch } from "@/src/components/ui/switch";
import { TableAction, TableColumn, TableHeaderConfig } from "@/src/types/reusableTable";
import { Plus } from "lucide-react";
import { useMemo, useState } from "react";
import AddAndEditCategoryModal from "./AndAndEditCategory";
import {CategoryData, CategoryDataI} from "@/src/constants/AdminFilmCategory"

const getInitials = (name: string) => {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
};

const columns: TableColumn<CategoryDataI>[] = [
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
  },
];

export function CategoriesTable() {
  const [searchValue, setSearchValue] = useState("");
  const [showTodayOnly, setShowTodayOnly] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"add" | "edit">("add");
  const [selectedCategory, setSelectedCategory] = useState<CategoryDataI | undefined>();
  const [isLoading, setIsLoading] = useState(false);

  const filteredData = useMemo(() => {
    let filtered = CategoryData;

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

  const handleAddCategory = () => {
    setModalMode("add");
    setSelectedCategory(undefined);
    setModalOpen(true);
  };

  const handleEditCategory = (category: CategoryDataI | undefined) => {
    setModalMode("edit");
    setSelectedCategory(category);
    setModalOpen(true);
  };

  const handleModalSubmit = (data: any) => {
    if (modalMode === "add") {
      console.log(data);
      // TODO: handle letter
    } else if (modalMode === "edit" && selectedCategory) {
      // TODO: handle letter
    }
  };

  const headerConfig: TableHeaderConfig = {
    title: "List of Categories",
    showSearch: true,
    searchPlaceholder: "Search",
    showDateFilter: true,

    actions: [
      {
        label: "New",
        onClick: handleAddCategory,
        variant: "default",
        icon: <Plus className="h-4 w-4" />,
      },
    ],
  };

  const actions: TableAction<CategoryDataI>[] = [
    {
      label: "Edit",
      onClick: (row) => handleEditCategory(selectedCategory),
    },
    {
      label: "Delete",
      onClick: (row) => console.warn("Delete", row),
      variant: "destructive",
    },
  ];

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

      <AddAndEditCategoryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleModalSubmit}
        mode={modalMode}
        isLoading={isLoading}
      />
    </div>
  );
}
