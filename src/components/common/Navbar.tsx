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
    { name: "App", href: "/app" },
    { name: "Desktop", href: "/desktop" },
  ];

  return (
    <ContainerWrapper>
      <nav className="">
        <div className="flex items-center justify-between h-16 px-4">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-white">ReelShort</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-base font-medium duration-200",
                  pathname === item.href ? "text-[#E83A57]" : "text-white"
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
              className="text-gray-300 hover:text-white hover:bg-transparent"
            >
              <Search className="h-5 w-5" />
            </Button>

            {/* Language Dropdown - Hidden on mobile */}
            <div className="hidden sm:block">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="text-white hover:text-gray-100 hover:bg-transparent"
                  >
                    <Globe className="h-4 w-4" />
                    English
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-transparent">
                  <DropdownMenuItem className="text-white hover:text-gray-100 hover:bg-transparent">
                    English
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-white hover:text-gray-100 hover:bg-transparent">
                    Spanish
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-white hover:text-gray-100 hover:bg-transparent">
                    French
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* History - Hidden on mobile */}
            <Button
              variant="ghost"
              className="hidden sm:flex text-white hover:text-gray-100 hover:bg-transparent"
            >
              <History className="h-4 w-4" />
              History
            </Button>

            {/* User Profile */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-white hover:text-gray-100 hover:bg-transparent"
                >
                  <User className="h-4 w-4" />
                  <span className="hidden sm:inline">User</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-transparent">
                <DropdownMenuItem className="text-white hover:text-gray-100 hover:bg-transparent">
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white hover:text-gray-100 hover:bg-transparent">
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white hover:text-gray-100 hover:bg-transparent">
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-white">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="bg-black/20 backdrop-blur-md border-l border-white/20"
                >
                  <div className="flex flex-col space-y-4 mt-8">
                    {navItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="text-white px-4 transition-colors duration-200 py-3 border-b border-gray-900 rounded-xl"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                    <div className="border-t border-slate-800 pt-4">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            className="text-white hover:text-gray-100 hover:bg-transparent"
                          >
                            <Globe className="h-4 w-4" />
                            English
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="bg-black/20 backdrop-blur-lg">
                          <DropdownMenuItem className="text-white hover:text-gray-100 hover:bg-transparent">
                            English
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-white hover:text-gray-100 hover:bg-transparent">
                            Spanish
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-white hover:text-gray-100 hover:bg-transparent">
                            French
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                      <Button variant="ghost" className="w-full justify-start text-white">
                        <History className="h-4 w-4 mr-2" />
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
