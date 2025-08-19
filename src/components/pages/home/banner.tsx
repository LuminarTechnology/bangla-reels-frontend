"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import Image from "next/image";
import { cn } from "@/src/lib/utils";
import { Button } from "../../ui/button";

interface Movie {
  id: number;
  title: string;
  image: string;
  subtitle?: string;
}

const movies: Movie[] = [
  {
    id: 1,
    title: "John Wick 4",
    subtitle: "The Story of Survival",
    image: "/images/banner/banner-1.jpg",
  },
  {
    id: 2,
    title: "The Life List",
    subtitle: "Thrilling Adventure",
    image: "/images/banner/banner-2.png",
  },
  {
    id: 3,
    title: "Holiday in the Wild",
    subtitle: "Unleash the Action",
    image: "/images/banner/banner-3.png",
  },
  {
    id: 4,
    title: "Lonely Planet",
    subtitle: "The Untold Journey",
    image: "/images/banner/banner-4.png",
  },
  {
    id: 5,
    title: "DAY WITH MY WIFE",
    subtitle: "Romance & Comedy",
    image: "/images/banner/banner-5.png",
  },
];

const Banner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const thumbnailRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (thumbnailRefs.current[currentSlide]) {
      thumbnailRefs.current[currentSlide]?.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [currentSlide]);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % movies.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? movies.length - 1 : prev - 1));
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 10000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="relative h-[350px] overflow-hidden bg-gray-900 sm:h-[420px] md:h-[500px] lg:h-[550px]">
      {/* Background */}
      <div className="absolute inset-0 transition-all duration-700 ease-in-out">
        <Image
          src={movies[currentSlide].image}
          alt={movies[currentSlide].title}
          fill
          priority
          className="rounded-none object-cover lg:rounded-lg"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex h-full items-center px-4 sm:px-8 md:-bottom-10 md:px-12 lg:px-16">
        <div className="animate-fadeIn max-w-xs sm:max-w-md md:max-w-lg">
          <h1 className="mb-2 text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl">
            {movies[currentSlide].title}
          </h1>
          {movies[currentSlide].subtitle && (
            <h2 className="mb-6 text-lg font-light text-white sm:mb-8 sm:text-xl md:text-2xl lg:text-3xl">
              {movies[currentSlide].subtitle}
            </h2>
          )}

          <div className="flex items-center space-x-3 sm:space-x-5">
            <Button size="circular" variant="danger" className="flex items-center space-x-3">
              <Play size={18} className="transition-transform group-hover:scale-110" />
            </Button>
            <div className="text-2xl text-white">Watch Now</div>
          </div>
        </div>
      </div>

      {/* Thumbnails */}
      <div className="absolute bottom-4 z-20 flex w-full items-center justify-center space-x-2 px-2 sm:bottom-10 sm:justify-end sm:space-x-3 sm:px-4">
        {/* Prev */}
        <Button
          variant={"navigation"}
          size={"circular-sm"}
          onClick={prevSlide}
          className="transition-colors hover:bg-white/70"
        >
          <ChevronLeft size={18} />
        </Button>

        {/* Thumbs */}
        <div className="scrollbar-hide flex max-w-[500px] space-x-2 overflow-x-auto sm:max-w-[300px] md:max-w-[400px]">
          {movies.map((movie, index) => (
            <div
              key={movie.id}
              ref={(el) => (thumbnailRefs.current[index] = el)}
              className={cn(
                "group relative flex-shrink-0 cursor-pointer rounded-lg transition-transform duration-300",
                currentSlide === index
                  ? "border-primary-rose border-2"
                  : "hover:border-primary-rose-hover border-2 border-transparent"
              )}
              onClick={() => setCurrentSlide(index)}
            >
              <div className="h-18 w-14 overflow-hidden rounded-lg sm:h-20 sm:w-16 md:h-28 md:w-20">
                <Image
                  src={movie.image}
                  alt={movie.title}
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="absolute right-0 bottom-1 left-0 px-1">
                <p className="truncate text-center text-[10px] font-medium text-white sm:text-xs">
                  {movie.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Next */}
        <Button
          variant={"navigation"}
          size={"circular-sm"}
          onClick={nextSlide}
          className="transition-colors hover:bg-white/70"
        >
          <ChevronRight size={18} />
        </Button>
      </div>
    </div>
  );
};

export default Banner;
