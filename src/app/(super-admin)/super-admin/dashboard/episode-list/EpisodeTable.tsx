"use client";

import ReusableTable from "@/src/components/common/ReusableTable";
import { Switch } from "@/src/components/ui/switch";
import { TableAction, TableColumn, TableHeaderConfig } from "@/src/types/reusableTable";
import { Plus } from "lucide-react";
import React from "react";

interface EpisodeListData {
  id: string;
  no: string;
  videoImage: string;
  video: string;
  movieSeries: string;
  episodeNumber: string;
  duration: number;
  isLocked: boolean;
  coins: number;
  date: string;
}

const initialEpisodeListData: EpisodeListData[] = [
  {
    id: "1",
    no: "01",
    videoImage: "/images/Poster 4.png",
    video: "Love",
    movieSeries: "Lover",
    episodeNumber: "No Description",
    duration: 24,
    isLocked: true,
    coins: 5,
    date: "31/12/2025",
  },
  {
    id: "2",
    no: "01",
    videoImage: "/images/Poster 4.png",
    video: "Love",
    movieSeries: "Lover",
    episodeNumber: "No Description",
    duration: 24,
    isLocked: true,
    coins: 5,
    date: "31/12/2025",
  },
  {
    id: "3",
    no: "01",
    videoImage: "/images/Poster 4.png",
    video: "Love",
    movieSeries: "Lover",
    episodeNumber: "No Description",
    duration: 24,
    isLocked: true,
    coins: 5,
    date: "31/12/2025",
  },
  {
    id: "4",
    no: "01",
    videoImage: "/images/Poster 4.png",
    video: "Love",
    movieSeries: "Lover",
    episodeNumber: "No Description",
    duration: 24,
    isLocked: true,
    coins: 5,
    date: "31/12/2025",
  },
  {
    id: "5",
    no: "01",
    videoImage: "/images/Poster 4.png",
    video: "Love",
    movieSeries: "Lover",
    episodeNumber: "No Description",
    duration: 24,
    isLocked: true,
    coins: 5,
    date: "31/12/2025",
  },
  {
    id: "6",
    no: "01",
    videoImage: "/images/Poster 4.png",
    video: "Love",
    movieSeries: "Lover",
    episodeNumber: "No Description",
    duration: 24,
    isLocked: true,
    coins: 5,
    date: "31/12/2025",
  },
  {
    id: "7",
    no: "01",
    videoImage: "/images/Poster 4.png",
    video: "Love",
    movieSeries: "Lover",
    episodeNumber: "No Description",
    duration: 24,
    isLocked: true,
    coins: 5,
    date: "31/12/2025",
  },
  {
    id: "8",
    no: "01",
    videoImage: "/images/Poster 4.png",
    video: "Love",
    movieSeries: "Lover",
    episodeNumber: "No Description",
    duration: 24,
    isLocked: true,
    coins: 5,
    date: "31/12/2025",
  },
  {
    id: "9",
    no: "01",
    videoImage: "/images/Poster 4.png",
    video: "Love",
    movieSeries: "Lover",
    episodeNumber: "No Description",
    duration: 24,
    isLocked: true,
    coins: 5,
    date: "31/12/2025",
  },
];

const columns: TableColumn<EpisodeListData>[] = [
  {
    key: "no",
    label: "No",
    width: "w-16",
    render: (value) => <span className="text-sm text-gray-900">{value}</span>,
  },
  {
    key: "videoImage",
    label: "Video Image",
    width: "w-28",
    render: (value) => (
      <div className="h-12 w-12 flex-shrink-0">
        <img
          className="h-14 w-16 rounded-lg object-cover"
          src={value || "/placeholder.svg?height=48&width=48&query=woman portrait"}
          alt="Video thumbnail"
        />
      </div>
    ),
  },
  {
    key: "video",
    label: "Video",
    width: "w-24",
    render: (value) => <span className="text-sm text-gray-900">{value}</span>,
  },
  {
    key: "movieSeries",
    label: "Movie series",
    width: "w-28",
    render: (value) => <span className="text-sm text-gray-900">{value}</span>,
  },
  {
    key: "episodeNumber",
    label: "Episode Number",
    width: "w-32",
    render: (value) => <span className="text-sm text-gray-500">{value}</span>,
  },
  {
    key: "duration",
    label: "Duration",
    width: "w-24",
    render: (value) => <span className="text-sm text-gray-900">{value}</span>,
  },
  {
    key: "isLocked",
    label: "Is Locked",
    width: "w-24",
    render: (value, row) => (
      <Switch
        checked={value}
        //   onCheckedChange={() => handleLockedToggle(row.id)}
        className="data-[state=checked]:bg-black"
      />
    ),
  },
  {
    key: "coins",
    label: "Coins",
    width: "w-20",
    render: (value) => <span className="text-sm text-gray-900">{value}</span>,
  },
  {
    key: "date",
    label: "Date",
    width: "w-28",
    render: (value) => <span className="text-sm text-gray-900">{value}</span>,
  },
];

const headerConfig: TableHeaderConfig = {
  title: "List of Episodes",
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

const actions: TableAction<EpisodeListData>[] = [
  {
    label: "View",
    onClick: (episode) => console.log("View episode:", episode.id),
  },
  {
    label: "Edit",
    onClick: (episode) => console.log("Edit episode:", episode.id),
  },
  {
    label: "Delete",
    variant: "destructive",
    onClick: (episode) => console.log("Delete episode:", episode.id),
  },
];
const EpisodeTable = () => {
  return (
    <div>
      <ReusableTable
        data={initialEpisodeListData}
        columns={columns}
        headerConfig={headerConfig}
        actions={actions}
      />
    </div>
  );
};

export default EpisodeTable;
