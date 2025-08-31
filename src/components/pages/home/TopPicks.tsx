"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "../../ui/carousel";
import { Button } from "../../ui/button";
import { cn } from "@/src/lib/utils";
import { PosterCard } from "../../common/PosterCard";
import { useLocale } from "@/src/app/LocaleProvider";
import { topPicksData } from "@/src/constants/HomePage";
import { TLang } from "@/src/types/globals";

type MovieSectionProps = {
  sectionTitle: string;
  buttonText: string;
};

export function TopPicksSlider({ sectionTitle, buttonText }: MovieSectionProps) {
  const [api, setApi] = useState<CarouselApi>();

  const { lang } = useLocale() as { lang: TLang };

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
    <div className="my-4 md:my-8">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">{sectionTitle}</h2>
        <div className="flex items-center gap-4">
          {/* Navigation Arrows */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => api?.scrollPrev()}
              className="cursor-pointer rounded-full bg-[#2C2C2C] text-white"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => api?.scrollNext()}
              className="cursor-pointer rounded-full bg-[#2C2C2C] text-white"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
          {/* View All Button */}
          <Button className="bg-primary-rose hover:bg-primary-rose-hover cursor-pointer rounded-md px-6 py-2 font-medium text-white">
            {buttonText}
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
        <CarouselContent className="ml-1 flex gap-1.5">
          {topPicksData.map((item, idx) => (
            <CarouselItem
              key={item.id}
              className={cn("basis-[200px] pl-0 md:basis-[250px] lg:basis-1/6")}
            >
              <PosterCard
                key={idx}
                title={item.title[lang]}
                posterImage={item.image}
                category={item.category[lang]}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
