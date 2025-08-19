import { History } from "lucide-react";
import { Button } from "../../ui/button";

import Image from "next/image";
import Link from "next/link";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../../ui/hover-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs";
import HistoryContent from "./HistoryContent";
import { useRouter } from "next/navigation";

const HistoryButton = () => {
  const router = useRouter()
      const historyItems = [
    {
      id: 1,
      title: "Collateral Hearts to gone",
      episode: 1,
      thumbnail: "/images/Poster 4.png",
    },
    {
      id: 2,
      title: "Collateral Hearts to gone",
      episode: 1,
      thumbnail: "/images/Poster 4.png",
    },
    {
      id: 3,
      title: "Collateral Hearts to gone",
      episode: 1,
      thumbnail: "/images/Poster 4.png",
    },
  ]

  const myListItems = [
    {
      id: 1,
      title: "My List Item 1",
      episode: 1,
      thumbnail: "/images/Poster 4.png",
    },
    {
      id: 2,
      title: "My List Item 2",
      episode: 2,
      thumbnail: "/images/Poster 4.png",
    },
    {
      id: 3,
      title: "My List Item 3",
      episode: 3,
      thumbnail: "/images/Poster 4.png",
    },
    {
      id: 4,
      title: "My List Item 2",
      episode: 2,
      thumbnail: "/images/Poster 4.png",
    },
    {
      id: 5,
      title: "My List Item 3",
      episode: 3,
      thumbnail: "/images/Poster 4.png",
    },
  ]
    return (
         <HoverCard openDelay={100} closeDelay={300}>
                <HoverCardTrigger asChild>
                   <Link href={"/dashboard/history"}>
              <Button
                variant="ghost"
                className="hidden text-white hover:bg-transparent hover:text-gray-100 lg:flex"
              >
                <History className="h-4 w-4" />
                History
              </Button>
            </Link>
                </HoverCardTrigger>
                <HoverCardContent className="w-70 bg-[#16151A] border-none p-0 rounded-2xl 
                
                before:content-[''] before:absolute before:-top-2 before:right-5 before:-translate-x-1/2 before:w-0 before:h-0 before:border-l-8 before:border-r-8 before:border-b-8 before:border-l-transparent before:border-r-transparent before:border-b-[#16151A]
                " align="end" sideOffset={8}>
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
                       <HistoryContent historyItems={historyItems} tabName="History" link="/dashboard/history"/>
                      </TabsContent>
                      <TabsContent value="mylist" className="space-y-3">

                       <HistoryContent historyItems={myListItems} tabName="My List" link="/dashboard/my-list"/>
                      </TabsContent>
                    </Tabs>
                  </div>
                </HoverCardContent>
              </HoverCard>
    );
};

export default HistoryButton;