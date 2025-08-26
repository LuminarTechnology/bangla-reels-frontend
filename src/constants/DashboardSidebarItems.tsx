"use client";
import {
  LayoutDashboard,
  Users,
  FileText,
  Package,
  Award,
  Settings,
  User,
  List,
  FilePlay,
  Video,
} from "lucide-react";

export const SuperAdminSidebarItems = [
  {
    title: "Dashboard",
    href: "/super-admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "User",
    href: "/super-admin/dashboard/user",
    icon: Users,
  },
  {
    title: "Film Management",
    icon: FileText,
    children: [
      { title: "Film Category", href: "/super-admin/dashboard/category", icon: <List /> },
      { title: "Film List", href: "/super-admin/dashboard/film-list", icon: <FilePlay /> },
      { title: "Episode List", href: "/super-admin/dashboard/episode-list", icon: <Video /> },
    ],
  },
  {
    title: "Package",
    icon: Package,
    children: [
      { title: "All Packages", href: "/packages" },
      { title: "Create Package", href: "/packages/create" },
      {title: "VIP Plan", href: "/super-admin/dashboard/vip-plan"}
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

export const ContestantSidebarItems = [
  {
    title: "Dashboard",
    href: "/super-admin/dashboard",
    icon: LayoutDashboard,
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
