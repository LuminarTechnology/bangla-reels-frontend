"use client";

import { useState } from "react";
import ContainerWrapper from "./ContainerWrapper";
import { Button } from "../ui/button";
import { Globe, History, Menu, Search, User } from "lucide-react";
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

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Categories", href: "/categories" },
    { name: "Fandom", href: "/fandom" },
    { name: "Contest", href: "#" },
    { name: "App", href: "/app" },
    { name: "Desktop", href: "/desktop" },
  ];

  return (
    <ContainerWrapper>
      <nav className="">
        <div className="flex h-16 items-center justify-between px-4">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-white">ReelShort</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-base font-medium duration-200",
                  pathname === item.href ? "text-primary-rose" : "text-white"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right Side Items */}
          <div className="flex items-center space-x-4">
            {/* Search Icon */}
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-300 hover:bg-transparent hover:text-white"
            >
              <Search className="h-5 w-5" />
            </Button>

            {/* Language Dropdown - Hidden on mobile */}
            <div className="hidden lg:block">
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
                <DropdownMenuContent className="bg-transparent">
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
            </div>

            {/* History - Hidden on mobile */}
            <Link href={"/dashboard/history"}>
              <Button
                variant="ghost"
                className="hidden text-white hover:bg-transparent hover:text-gray-100 lg:flex"
              >
                <History className="h-4 w-4" />
                History
              </Button>
            </Link>

            {/* User Profile */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-white hover:bg-transparent hover:text-gray-100"
                >
                  <User className="h-4 w-4" />
                  <span className="hidden lg:inline">User</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-transparent">
                <DropdownMenuItem className="text-white hover:bg-transparent hover:text-gray-100">
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white hover:bg-transparent hover:text-gray-100">
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white hover:bg-transparent hover:text-gray-100">
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

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

export default Navbar;
