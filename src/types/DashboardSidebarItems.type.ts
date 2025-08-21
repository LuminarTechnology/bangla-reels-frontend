import { type LucideIcon } from "lucide-react";

export type SidebarItem = {
  title: string;
  href?: string;
  icon: LucideIcon;
  children?: {
    title: string;
    href: string;
  }[];
};
