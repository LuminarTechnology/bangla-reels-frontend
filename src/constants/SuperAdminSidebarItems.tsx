import { LayoutDashboard, Users, FileText, Package, Award, Settings, User } from "lucide-react";

export const sidebarItems = [
  {
    title: "Dashboard",
    href: "/super-admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "User",
    href: "/users",
    icon: Users,
  },
  {
    title: "Film Management",
    icon: FileText,
    children: [
      { title: "All Films", href: "/films" },
      { title: "Add New", href: "/films/add" },
    ],
  },
  {
    title: "Package",
    icon: Package,
    children: [
      { title: "All Packages", href: "/packages" },
      { title: "Create Package", href: "/packages/create" },
    ],
  },
  {
    title: "Reward",
    href: "/rewards",
    icon: Award,
  },
  {
    title: "Setting",
    href: "/settings",
    icon: Settings,
  },
  {
    title: "Profile",
    href: "/profile",
    icon: User,
  },
];
