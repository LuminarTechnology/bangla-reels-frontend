import StatsCard, { StatsCardProps } from "@/src/components/common/StatsCard";
import { Eye, Clock, PlayCircle } from "lucide-react";

const statsData : StatsCardProps[]= [
  {
    title: "Total Views",
    value: "245k",
    unit: "",
    change: "+12% vs last 30 days",
    changeType: "positive",
    icon: Eye,
  },
  {
    title: "Total Watchtime",
    value: "1.2k",
    unit: "hrs",
    change: "+8% vs last 30 days",
    changeType: "positive",
    icon: Clock,
  },
  {
    title: "Average Watch Duration",
    value: "3m 45s",
    unit: "",
    change: "-3% vs last 30 days",
    changeType: "negative",
    icon: PlayCircle,
  },
];

export default async function AnalyticsPage() {
  return (
    <div className="">
      <div className="flex flex-col justify-between gap-4 sm:flex-row">
        {statsData.map((stat, i) => (
          <StatsCard key={i} stat={stat} />
        ))}
      </div>
    </div>
  );
}
