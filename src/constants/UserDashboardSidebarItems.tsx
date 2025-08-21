import { History, LayoutDashboard, List, MessageSquare, AwardIcon } from "lucide-react";

export const UserDashboardSidebarItems = [
  { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { name: "Subscription & Rewards", href: "/dashboard/subscription-rewards", icon: AwardIcon },
  { name: "My List", href: "/dashboard/my-list", icon: List },
  { name: "History", href: "/dashboard/history", icon: History },
  { name: "Feedback", href: "/dashboard/feedback", icon: MessageSquare },
];
