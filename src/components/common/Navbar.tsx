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
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../ui/hover-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import Image from "next/image";

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

  const historyItems = [
    {
      id: 1,
      title: "Collateral Hearts to gone",
      episode: "Played to Episode 1",
      thumbnail: "/images/Poster 4.png",
    },
    {
      id: 2,
      title: "Collateral Hearts to gone",
      episode: "Played to Episode 1",
      thumbnail: "/images/Poster 4.png",
    },
    {
      id: 3,
      title: "Collateral Hearts to gone",
      episode: "Played to Episode 1",
      thumbnail: "/images/Poster 4.png",
    },
  ]
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
            {/* <Link href={"/dashboard/history"}>
              <Button
                variant="ghost"
                className="hidden text-white hover:bg-transparent hover:text-gray-100 lg:flex"
              >
                <History className="h-4 w-4" />
                History
              </Button>
            </Link> */}

             <div className="hidden lg:block">
              <HoverCard openDelay={100} closeDelay={300}>
                <HoverCardTrigger asChild>
                  <Button variant="ghost" className="text-white hover:bg-transparent hover:text-gray-100">
                    <History className="h-4 w-4" />
                    History
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-70 bg-[#16151A] border-none p-0 rounded-2xl " align="end" sideOffset={8}>
                  <div className="p-4">
                  
                    <Tabs defaultValue="history" className="w-full">
                      <TabsList className="grid w-full grid-cols-2 bg-transparent border-none mb-4 ">
                        <TabsTrigger
                          value="history"
                          className="text-white data-[state=active]:bg-transparent  border-0 !border-none ring-0 focus:ring-0 data-[state=active]:text-[#E83A57] hover:text-primary-rose-hover cursor-pointer"
                        >
                          History
                        </TabsTrigger>
                        <TabsTrigger
                          value="mylist"
                          className="text-white data-[state=active]:bg-transparent  border-0 !border-none ring-0 focus:ring-0 data-[state=active]:text-[#E83A57] hover:text-primary-rose-hover cursor-pointer"
                        >
                          My list
                        </TabsTrigger>
                      </TabsList>
                      <TabsContent value="history" className="space-y-3">
                        {historyItems.map((item) => (
                          <div
                            key={item.id}
                            className="flex  space-x-3 p-2 rounded-lg hover:bg-gray-800 cursor-pointer"
                          >
                            <div className="relative">
                              <Image
                              src={item.thumbnail || "/placeholder.svg"}
                              alt={item.title}
                              width={69}
                              height={93}
                              className="w-[69px] h-[93px] rounded object-cover"
                            />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="text-white text-xl font-bold ">{item.title}</h3>
                              <p className="text-[#B3B1B0] text-base">{item.episode}</p>
                            </div>
                          </div>
                        ))}
                        <div className="pt-2 flex justify-center">
                          <button className="text-primary-rose text-sm font-medium hover:text-primary-rose-hover flex items-center">
                            More
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </button>
                        </div>
                      </TabsContent>
                      <TabsContent value="mylist" className="text-center py-8">
                        <p className="text-gray-400 text-sm">Your list is empty</p>
                      </TabsContent>
                    </Tabs>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>

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
