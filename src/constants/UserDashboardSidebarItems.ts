import {  AwardIcon, LaptopMinimal, SquarePlay, MailOpen, ClockFading, FolderUp  } from "lucide-react";

export const UserDashboardSidebarItems = [
  { name: "Overview", href: "/dashboard", icon: LaptopMinimal },
  { name: "Subscription & Rewards", href: "/dashboard/subscription-rewards", icon: AwardIcon },
  { name: "My List", href: "/dashboard/my-list", icon: SquarePlay },
  { name: "History", href: "/dashboard/history", icon: ClockFading },
  { name: "My Submission", href: "/dashboard/my-submission", icon: FolderUp },
  { name: "Feedback", href: "/dashboard/feedback", icon: MailOpen },
];
