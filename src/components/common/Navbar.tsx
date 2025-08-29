"use client";

import React, { ReactElement, useState } from "react";
import ContainerWrapper from "./ContainerWrapper";
import { Button } from "../ui/button";
import { History, Menu } from "lucide-react";
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
import { useTranslations } from "next-intl";
import LanguageDropdown from "./LanguageDropdown";

const navItems = [
  { key: "home", href: "/" },
  { key: "categories", href: "/categories" },
  { key: "fandom", href: "/fandom" },
  { key: "contest", href: "/contest" },
];

interface UserDashboardSidebarProps {
  background?: string;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

type NavbarProps = {
  mobileDashboard?: ReactElement<UserDashboardSidebarProps>;
  currentLang: string;
};

const Navbar: React.FC<NavbarProps> = ({ mobileDashboard, currentLang }) => {
  const pathname = usePathname();
  const strippedPath = pathname.replace(/^\/(en|bn|es|la)(?=\/|$)/, "") || "/";
  const t = useTranslations("Navbar");
  const [isOpen, setIsOpen] = useState(false);

  const mobileNavbar = () => {
    return (
      <div>
        <div className="mt-8 flex flex-col space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className="px-4 text-white transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              {t(item.key)}
            </Link>
          ))}
          <div>
            <LanguageDropdown currentLang={currentLang} />
            <Button variant="ghost" className="w-full justify-start text-white">
              <History className="mr-2 h-4 w-4" />
              {t("history")}
            </Button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <ContainerWrapper>
      <nav className="">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center justify-between space-x-16">
            <Link href={"/"}>
              <h1 className="text-2xl font-bold text-white">ReelShort</h1>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center space-x-8 pt-2.5 md:flex">
              {navItems.map((item) => {
                if (item.key === "categories") {
                  return (
                    <CategoryPopup
                      key={item.key}
                      itemName={t(item.key)}
                      isCategory={strippedPath === item.href}
                    />
                  );
                }
                return (
                  <Link
                    key={item.key}
                    href={item.href}
                    className={cn(
                      "flex flex-col items-center text-base font-medium duration-200",
                      strippedPath === item.href ? "text-primary-rose" : "text-white"
                    )}
                  >
                    <div className="flex items-center gap-1.5">{t(item.key)}</div>
                    <span
                      className={cn(
                        "mt-1 size-1 rounded-full",
                        strippedPath === item.href ? "bg-primary-rose" : "invisible"
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
            <div>
              <AppDownloadPopup />
            </div>
            {/* Language Dropdown - Hidden on mobile */}
            <div className="hidden lg:block">
              <LanguagePopup currentLang={currentLang} />
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
                  className="border-l border-white/20 bg-black/20 text-white backdrop-blur-md"
                >
                  {mobileDashboard
                    ? React.cloneElement(mobileDashboard, { setIsOpen })
                    : mobileNavbar()}
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </ContainerWrapper>
  );
};

export default Navbar;
