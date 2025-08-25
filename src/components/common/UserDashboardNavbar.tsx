"use client";

import { useState } from "react";
import ContainerWrapper from "./ContainerWrapper";
import { Button } from "../ui/button";
import { Globe, History, Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/src/lib/utils";
import HistoryButton from "../pages/home/HistoryButton";
import CategoryPopup from "../pages/home/CategoryPopup";
import LanguagePopup from "../pages/home/LanguagePopup";
import UserButton from "../pages/home/UserButton";
import SearchBarPopup from "../pages/home/SearchBarPopup";
import AppDownloadPopup from "../pages/home/AppDownloadPopup";

const UserDashboardNavbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Categories", href: "/categories" },
    { name: "Fandom", href: "/fandom" },
    // { name: "App", href: "/app", icon: <Smartphone className="size-4" /> },
    // { name: "Desktop", href: "/desktop" },
    { name: "Contest", href: "/contest" },
  ];

  return (
    <ContainerWrapper>
      <nav className="">
        <div className="flex h-16 items-center justify-between px-4">
          {/* Logo */}
          <div className="flex items-center justify-between space-x-16">
            <Link href={"/"}>
              <h1 className="text-2xl font-bold text-white">ReelShort</h1>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center space-x-8 pt-2.5 md:flex">
              {navItems.map((item) => {
                if (item.name === "Categories") {
                  return (
                    <CategoryPopup
                      key={item.name}
                      itemName={item.name}
                      isCategory={pathname === item.href}
                    />
                  );
                }
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "flex flex-col items-center text-base font-medium duration-200",
                      pathname === item.href ? "text-primary-rose" : "text-white"
                    )}
                  >
                    <div className="flex items-center gap-1.5">{item.name}</div>
                    <span
                      className={cn(
                        "mt-1 size-1 rounded-full",
                        pathname === item.href ? "bg-primary-rose" : "invisible"
                      )}
                    ></span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Right Side Items */}
          <div className="flex items-center space-x-4">
            {/* Search Icon */}

            <SearchBarPopup />

            {/* Download APP */}
            <AppDownloadPopup />
            {/* Language Dropdown - Hidden on mobile */}
            <div className="hidden lg:block">
              <LanguagePopup />
            </div>

            {/* History - Hidden on mobile */}

            <div className="hidden lg:block">
              <HistoryButton />
            </div>

            {/* User Profile */}
            <UserButton />

            {/* Mobile Menu */}
            <div className="lg:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-white">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="border-l border-white/20 bg-black/20 backdrop-blur-md"
                >
                  <div className="mt-8 flex flex-col space-y-4">
                    {navItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="rounded-xl border-b border-gray-900 px-4 text-white transition-colors duration-200"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                    <div className="border-t border-slate-800">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            className="text-white hover:bg-transparent hover:text-gray-100"
                          >
                            <Globe className="h-4 w-4" />
                            English
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="bg-black/20 backdrop-blur-lg">
                          <DropdownMenuItem className="text-white hover:bg-transparent hover:text-gray-100">
                            English
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-white hover:bg-transparent hover:text-gray-100">
                            Spanish
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-white hover:bg-transparent hover:text-gray-100">
                            French
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                      <Button variant="ghost" className="w-full justify-start text-white">
                        <History className="mr-2 h-4 w-4" />
                        History
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </ContainerWrapper>
  );
};

export default UserDashboardNavbar;
