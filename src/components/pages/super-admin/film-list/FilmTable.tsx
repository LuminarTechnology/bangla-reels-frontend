"use client";
import ReusableTable from "@/src/components/common/ReusableTable";
import { Button } from "@/src/components/ui/button";
import { Switch } from "@/src/components/ui/switch";
import { TableAction, TableColumn, TableHeaderConfig } from "@/src/types/reusableTable";
import { Plus } from "lucide-react";
import React, { useState } from "react";
import AddAndEditForm from "./AddAndEditForm";
import { FilmFormData } from "@/src/schema/FilmList.schema";
interface FilmData {
  id: string;
  no: string;
  image: string;
  category: string;
  name: string;
  description: string;
  date: string;
  totalEpisodes: number;
  maxAdsForFreeView: number;
  isBanner: boolean;
  isTrending: boolean;
  isActive: boolean;
  episodes: string;
}

const initialFilmsData: FilmData[] = [
  {
    id: "1",
    no: "01",
    image: "/images/Poster 4.png",
    category: "Love",
    name: "Lover",
    description: "No Description",
    date: "31/12/2025",
    totalEpisodes: 24,
    maxAdsForFreeView: 5,
    isBanner: true,
    isTrending: false,
    isActive: true,
    episodes: "View",
  },
  {
    id: "2",
    no: "01",
    image: "/images/Poster 4.png",
    category: "Love",
    name: "Lover",
    description: "No Description",
    date: "31/12/2025",
    totalEpisodes: 24,
    maxAdsForFreeView: 5,
    isBanner: true,
    isTrending: false,
    isActive: true,
    episodes: "View",
  },
  {
    id: "3",
    no: "01",
    image: "/images/Poster 4.png",
    category: "Love",
    name: "Lover",
    description: "No Description",
    date: "31/12/2025",
    totalEpisodes: 24,
    maxAdsForFreeView: 5,
    isBanner: true,
    isTrending: false,
    isActive: true,
    episodes: "View",
  },
  {
    id: "4",
    no: "01",
    image: "/images/Poster 4.png",
    category: "Love",
    name: "Lover",
    description: "No Description",
    date: "31/12/2025",
    totalEpisodes: 24,
    maxAdsForFreeView: 5,
    isBanner: true,
    isTrending: false,
    isActive: true,
    episodes: "View",
  },
  {
    id: "5",
    no: "01",
    image: "/images/Poster 4.png",
    category: "Love",
    name: "Lover",
    description: "No Description",
    date: "31/12/2025",
    totalEpisodes: 24,
    maxAdsForFreeView: 5,
    isBanner: true,
    isTrending: false,
    isActive: true,
    episodes: "View",
  },
  {
    id: "6",
    no: "01",
    image: "/images/Poster 4.png",
    category: "Love",
    name: "Lover",
    description: "No Description",
    date: "31/12/2025",
    totalEpisodes: 24,
    maxAdsForFreeView: 5,
    isBanner: true,
    isTrending: false,
    isActive: true,
    episodes: "View",
  },
  {
    id: "7",
    no: "01",
    image: "/images/Poster 4.png",
    category: "Love",
    name: "Lover",
    description: "No Description",
    date: "31/12/2025",
    totalEpisodes: 24,
    maxAdsForFreeView: 5,
    isBanner: true,
    isTrending: false,
    isActive: true,
    episodes: "View",
  },
  {
    id: "8",
    no: "01",
    image: "/images/Poster 4.png",
    category: "Love",
    name: "Lover",
    description: "No Description",
    date: "31/12/2025",
    totalEpisodes: 24,
    maxAdsForFreeView: 5,
    isBanner: true,
    isTrending: false,
    isActive: true,
    episodes: "View",
  },
  {
    id: "9",
    no: "01",
    image: "/images/Poster 4.png",
    category: "Love",
    name: "Lover",
    description: "No Description",
    date: "31/12/2025",
    totalEpisodes: 24,
    maxAdsForFreeView: 5,
    isBanner: true,
    isTrending: false,
    isActive: true,
    episodes: "View",
  },
];

const FilmTable = () => {
  // const [episodesData, setEpisodesData] = useState<FilmData[]>(initialFilmsData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"add" | "edit">("add");
  const [editingEpisode, setEditingEpisode] = useState<FilmFormData | null>(null);

  const handleNewClick = () => {
    setModalMode("add");
    setEditingEpisode(null);
    setIsModalOpen(true);
  };

  const handleAddFilm = (filmData: FilmFormData) => {
    if (modalMode === "add") {
      // Set Film Data
      // TODO: handle letter
    } else if (modalMode === "edit" && editingEpisode) {
      // update film data
      // TODO: handle letter
    }
    setEditingEpisode(null);
  };

  const handleEditEpisode = (episode: FilmFormData) => {
    setEditingEpisode(episode);
    setModalMode("edit");
    setIsModalOpen(true);
  };
  const columns: TableColumn<FilmData>[] = [
    {
      key: "no",
      label: "No",
      width: "w-16",
      render: (value) => <span className="text-sm text-gray-900">{value}</span>,
    },
    {
      key: "image",
      label: "Image",
      width: "w-20 text-start",
      render: (value) => (
        <div className="h-12 w-12 flex-shrink-0">
          <img
            className="h-12 w-12 rounded-lg object-cover"
            src={value || "/placeholder.svg?height=48&width=48&query=woman portrait"}
            alt="Episode"
          />
        </div>
      ),
    },
    {
      key: "category",
      label: "Category",
      width: "w-24",
      render: (value) => <span className="text-sm text-gray-900">{value}</span>,
    },
    {
      key: "name",
      label: "Name",
      width: "w-24",
      render: (value) => <span className="text-sm text-gray-900">{value}</span>,
    },
    {
      key: "description",
      label: "Description",
      width: "w-32",
      render: (value) => <span className="text-sm text-gray-500">{value}</span>,
    },
    {
      key: "date",
      label: "Date",
      width: "w-28",
      render: (value) => <span className="text-sm text-gray-900">{value}</span>,
    },
    {
      key: "totalEpisodes",
      label: "Total Episodes",
      width: "w-24",
      render: (value) => <span className="text-sm text-gray-900">{value}</span>,
    },
    {
      key: "maxAdsForFreeView",
      label: "Max Ads for free view",
      width: "w-32",
      render: (value) => <span className="text-sm text-gray-900">{value}</span>,
    },
    {
      key: "isBanner",
      label: "Is Banner",
      width: "w-24",
      render: (value, row) => (
        <Switch
          checked={value}
          //   onCheckedChange={() => handleBannerToggle(row.id)}
          className="data-[state=checked]:bg-black"
        />
      ),
    },
    {
      key: "isTrending",
      label: "Is Trending",
      width: "w-24",
      render: (value, row) => (
        <Switch
          checked={value}
          //   onCheckedChange={() => handleTrendingToggle(row.id)}
          className="data-[state=checked]:bg-gray-400"
        />
      ),
    },
    {
      key: "isActive",
      label: "Is Active",
      width: "w-24",
      render: (value, row) => (
        <Switch
          checked={value}
          //   onCheckedChange={() => handleActiveToggle(row.id)}
          className="data-[state=checked]:bg-black"
        />
      ),
    },
    {
      key: "episodes",
      label: "Episodes",
      width: "w-24",
      render: () => (
        <Button
          variant="ghost"
          size="sm"
          className="h-auto p-0 text-sm font-normal text-gray-600 hover:text-gray-900"
        >
          View
        </Button>
      ),
    },
  ];

  const headerConfig: TableHeaderConfig = {
    title: "List of Films",
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

  const actions: TableAction<FilmFormData>[] = [
    {
      label: "Edit",
      onClick: handleEditEpisode,
    },
    {
      label: "Delete",
      onClick: (episode) => console.warn("Delete episode:", episode.id),
    },
    {
      label: "Add Episode",
      onClick: (episode) => console.warn("Add episode:", episode.id),
    },
  ];

  const getInitialFormData = (): FilmFormData | undefined => {
    if (!editingEpisode) return undefined;

    return {
      id: editingEpisode.id,
      type: editingEpisode.type ?? "WEB SERIES",
      name: editingEpisode.name ?? "",
      category: editingEpisode.category ?? "",
      description: editingEpisode.description ?? "",
      maxAdsForFreeView: editingEpisode.maxAdsForFreeView?.toString() ?? "0",
      poster: null,
      banner: null,
      isBanner: editingEpisode.isBanner ?? false,
      isTrending: editingEpisode.isTrending ?? false,
      isActive: editingEpisode.isActive ?? true,

      // Initialize videos if they exist, otherwise empty array
      videos:
        editingEpisode.videos?.map((v: any) => ({
          id: v.id,
          videoId: v.videoId,
          file: v.file ?? new File([], ""), // fallback empty file
          status: v.status,
          progress: v.progress ?? 0,
          error: v.error,
          thumbnail: v.thumbnail,
          duration: v.duration,
          resolution: v.resolution,
        })) ?? [],

      // Initialize editDetails if they exist, otherwise empty array
      editDetails:
        editingEpisode.editDetails?.map((d: any) => ({
          videoId: d.videoId,
          title: d.title ?? "",
          description: d.description ?? "",
          tags: d.tags ?? "",
        })) ?? [],
    };
  };

  return (
    <div>
      <ReusableTable
        data={initialFilmsData}
        columns={columns}
        headerConfig={headerConfig}
        actions={actions}
      />

      <AddAndEditForm
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        onSave={handleAddFilm}
        mode={modalMode}
        initialData={getInitialFormData()}
      />
    </div>
  );
};

export default FilmTable;
