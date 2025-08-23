"use client"
import ReusableTable from "@/src/components/common/ReusableTable";
import { Button } from "@/src/components/ui/button";
import { Switch } from "@/src/components/ui/switch";
import { TableAction, TableColumn, TableHeaderConfig } from "@/src/types/reusableTable";
import { Plus } from "lucide-react";
import React from "react";
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
    width: "w-20",
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
      onClick: () => console.log("Add new episode"),
    },
  ],
};

const actions: TableAction<FilmData>[] = [
  {
    label: "Edit",
    onClick: (episode) => console.log("Edit episode:", episode.id),
  },
  {
    label: "Duplicate",
    onClick: (episode) => console.log("Duplicate episode:", episode.id),
  },
  {
    label: "Delete",
    variant: "destructive",
    onClick: (episode) => console.log("Delete episode:", episode.id),
  },
];
const FilmTable = () => {
  return (
    <div>
      <ReusableTable
        data={initialFilmsData}
        columns={columns}
        headerConfig={headerConfig}
        actions={actions}
      />
    </div>
  );
};

export default FilmTable;
