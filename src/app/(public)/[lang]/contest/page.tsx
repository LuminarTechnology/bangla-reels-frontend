import ContestBanner from "@/src/components/pages/contest/ContestBanner";
import ContestOverview from "@/src/components/pages/contest/ContestOverview";
import GalleryOfEntriesVideos from "@/src/components/pages/contest/GalleryOfEntriesVideos";
import MyVideos from "@/src/components/pages/contest/MyVideos";
import TopVideo from "@/src/components/pages/contest/TopVideo";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/src/components/ui/tabs";
import { tabsList } from "@/src/constants/tabsItems";
import React from "react";

export default function ContestPage() {
  return (
    <div className="my-4 md:my-8">
      <ContestBanner />
      <div className="flex flex-col items-start justify-center gap-8 lg:flex-row">
        <Tabs defaultValue="overview" className="w-full rounded-xl bg-black p-5 lg:w-3/4">
          <TabsList className="relative grid w-full grid-cols-3 bg-transparent">
            {tabsList.map((tab) => (
              <TabsTrigger
                value={tab.label}
                key={tab.label}
                className="text-bold relative w-full rounded-none border bg-transparent px-0 pb-2 text-center text-base font-bold text-gray-400 data-[state=active]:bg-transparent data-[state=active]:text-red-500 data-[state=active]:after:absolute data-[state=active]:after:bottom-[-1px] data-[state=active]:after:left-0 data-[state=active]:after:h-[3px] data-[state=active]:after:w-full data-[state=active]:after:bg-red-500 data-[state=active]:after:content-[''] sm:text-lg lg:text-xl"
              >
                {tab.title}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="overview" className="mt-4">
            {/* Overview */}
            <ContestOverview />
          </TabsContent>
          <TabsContent value="gallery-of-entries" className="mt-4">
            {/* Gallery Of Entries component */}
            <GalleryOfEntriesVideos />
          </TabsContent>
          <TabsContent value="my-videos" className="mt-4">
            {/* My Video */}
            <MyVideos />
          </TabsContent>
        </Tabs>

        {/* Sidebar */}
        <TopVideo />
      </div>
    </div>
  );
}
