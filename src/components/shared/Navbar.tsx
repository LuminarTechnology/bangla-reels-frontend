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

const Navbar = () => {
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
      <nav className="bg-slate-900 text-white border-b border-slate-800">
        <div className="flex items-center justify-between h-16 px-4">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl font-bold">ReelShort</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Right Side Items */}
          <div className="flex items-center space-x-4">
            {/* Search Icon */}
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-300 hover:text-white hover:bg-slate-800"
            >
              <Search className="h-5 w-5" />
            </Button>

            {/* Language Dropdown - Hidden on mobile */}
            <div className="hidden sm:block">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="text-gray-300 hover:text-white hover:bg-slate-800"
                  >
                    <Globe className="h-4 w-4 mr-2" />
                    English
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-slate-800 border-slate-700">
                  <DropdownMenuItem className="text-white hover:bg-slate-700">
                    English
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-white hover:bg-slate-700">
                    Spanish
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-white hover:bg-slate-700">
                    French
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* History - Hidden on mobile */}
            <Button
              variant="ghost"
              className="hidden sm:flex text-gray-300 hover:text-white hover:bg-slate-800"
            >
              <History className="h-4 w-4 mr-2" />
              History
            </Button>

            {/* User Profile */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-gray-300 hover:text-white hover:bg-slate-800"
                >
                  <User className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">Siyam</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-slate-800 border-slate-700">
                <DropdownMenuItem className="text-white hover:bg-slate-700">
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white hover:bg-slate-700">
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white hover:bg-slate-700">
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-gray-300 hover:text-white hover:bg-slate-800"
                  >
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-slate-900 border-slate-800">
                  <div className="flex flex-col space-y-4 mt-8">
                    {navItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="text-gray-300 hover:text-white transition-colors duration-200 py-2"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </a>
                    ))}
                    <div className="border-t border-slate-800 pt-4">
                      <Button
                        variant="ghost"
                        className="w-full justify-start text-gray-300 hover:text-white hover:bg-slate-800"
                      >
                        <Globe className="h-4 w-4 mr-2" />
                        English
                      </Button>
                      <Button
                        variant="ghost"
                        className="w-full justify-start text-gray-300 hover:text-white hover:bg-slate-800"
                      >
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
