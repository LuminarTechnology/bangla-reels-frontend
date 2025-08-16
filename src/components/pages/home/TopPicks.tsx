"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "../../ui/carousel";
import { Button } from "../../ui/button";
import Image from "next/image";
import { cn } from "@/src/lib/utils";
import { PosterCard } from "../../common/PosterCard";

const topPicksData = [
  {
    id: 1,
    title: "The Life List",
    category: "TV SERIES",
    image: "/images/banner/banner-3.png",
  },
  {
    id: 2,
    title: "The Life List",
    category: "TV SERIES",
    image: "/images/banner/banner-5.png",
  },
  {
    id: 3,
    title: "Life or Something Like It",
    category: "Movie",
    image: "/images/banner/banner-2.png",
  },
  {
    id: 4,
    title: "Lonely Planet",
    category: "TV SERIES",
    image: "/images/banner/banner-3.png",
  },
  {
    id: 5,
    title: "Lonely Planet",
    category: "TV SERIES",
    image: "/images/banner/banner-5.png",
  },
  {
    id: 6,
    title: "The Life List",
    category: "Movie",
    image: "/images/banner/banner-4.png",
  },
  {
    id: 7,
    title: "Holiday in the Wild",
    category: "TV SERIES",
    image: "/images/banner/banner-5.png",
  },
  {
    id: 8,
    title: "Lonely Planet",
    category: "TV SERIES",
    image: "/images/banner/banner-5.png",
  },
  {
    id: 9,
    title: "The Life List",
    category: "Movie",
    image: "/images/banner/banner-4.png",
  },
  {
    id: 10,
    title: "Holiday in the Wild",
    category: "TV SERIES",
    image: "/images/banner/banner-5.png",
  },
];

export function TopPicksSlider() {
  const [api, setApi] = useState<CarouselApi>();
  const autoplayPlugin = Autoplay({
    delay: 3000,
    stopOnInteraction: true,
  });

  useEffect(() => {
    if (!api) {
      return;
    }

    // Stop autoplay when reaching the end
    api.on("select", () => {
      if (!api.canScrollNext()) {
        autoplayPlugin.stop();
      }
    });
  }, [api, autoplayPlugin]);

  return (
    <div className="py-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-white">Top Picks</h2>
        <div className="flex items-center gap-4">
          {/* Navigation Arrows */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => api?.scrollPrev()}
              className="text-white bg-[#2C2C2C] rounded-full cursor-pointer"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => api?.scrollNext()}
              className="text-white bg-[#2C2C2C] rounded-full cursor-pointer"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
          {/* View All Button */}
          <Button className="bg-primary-rose hover:bg-primary-rose-hover text-white px-6 py-2 rounded-md font-medium cursor-pointer">
            VIEW ALL
          </Button>
        </div>
      </div>

      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{
          align: "start",
          loop: false,
        }}
        plugins={[autoplayPlugin]}
      >
        <CarouselContent className="flex gap-1.5 ml-1">
          {topPicksData.map((item, idx) => (
            <CarouselItem
              key={item.id}
              className={cn("pl-0 basis-[200px] md:basis-[250px] lg:basis-1/6")}
            >
              <PosterCard
                key={idx}
                title={item.title}
                posterImage={item.image}
                category={item.category}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
