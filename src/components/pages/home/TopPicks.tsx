"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "../../ui/carousel";
import { Button } from "../../ui/button";
import Image from "next/image";
import { cn } from "@/src/lib/utils";

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
];

export function TopPicksSlider() {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) {
      return;
    }

    // Optional: Add any additional carousel event listeners here
  }, [api]);

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
          <Button className="bg-[#E83A57] hover:bg-[#d12847] text-white px-6 py-2 rounded-md font-medium cursor-pointer">
            VIEW ALL
          </Button>
        </div>
      </div>

      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 3000,
            stopOnInteraction: true,
          }),
        ]}
      >
        <CarouselContent className="flex gap-4 ml-1">
          {topPicksData.map((item, idx) => (
            <CarouselItem
              key={item.id}
              className={cn(
                "pl-0 basis-[200px] md:basis-[250px] lg:basis-1/6",
                idx === 0 && "pl-4"
              )}
            >
              <div className="group cursor-pointer">
                {/* Card Image */}
                <div className="relative mb-3 rounded-lg overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={300}
                    height={280}
                    className="w-full h-[280px] object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Category Badge */}
                  <div className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {item.category}
                  </div>
                  {/* Plus Icon */}
                  <div className="absolute top-2 right-2 bg-black/70 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">
                    +
                  </div>
                </div>
                {/* Card Title */}
                <h3 className="text-white text-sm font-medium line-clamp-2">{item.title}</h3>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
