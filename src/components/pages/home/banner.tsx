"use client";
import React, { useState, useEffect, useRef } from "react";
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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % movies.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + movies.length) % movies.length);
  };

  return (
    <div className="relative h-[350px] sm:h-[420px] md:h-[500px] lg:h-[550px] overflow-hidden bg-gray-900">
      {/* Background */}
      <div className="absolute inset-0 transition-all duration-700 ease-in-out">
        <Image
          src={movies[currentSlide].image}
          alt={movies[currentSlide].title}
          fill
          priority
          className="object-cover rounded-none lg:rounded-lg"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 h-full flex items-center px-4 md:-bottom-10 sm:px-8 md:px-12 lg:px-16">
        <div className="max-w-xs sm:max-w-md md:max-w-lg animate-fadeIn">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
            {movies[currentSlide].title}
          </h1>
          {movies[currentSlide].subtitle && (
            <h2 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-light mb-6 sm:mb-8">
              {movies[currentSlide].subtitle}
            </h2>
          )}

        <div className="flex items-center space-x-3 sm:space-x-5">
            <Button size="circular" variant="danger" className="flex items-center space-x-3">
            
              <Play size={18} className="group-hover:scale-110 transition-transform" />
         
          </Button> 
          <div className="text-white text-2xl ">Watch Now</div>
        </div>
        </div>
      </div>

      {/* Thumbnails */}
      <div className="absolute bottom-4 sm:bottom-10 w-full flex justify-center sm:justify-end items-center space-x-2 sm:space-x-3 z-20 px-2 sm:px-4">
        {/* Prev */}
        <Button variant={"navigation"} size={"circular-sm"}
          onClick={prevSlide}
          className="transition-colors hover:bg-white/70"
        >
          <ChevronLeft size={18} />
        </Button>

        {/* Thumbs */}
        <div className="flex space-x-2 overflow-x-auto max-w-[500px] sm:max-w-[300px] md:max-w-[400px] scrollbar-hide">
          {movies.map((movie, index) => (
            <div
              key={movie.id}
              ref={(el) => (thumbnailRefs.current[index] = el)}
              className={cn(
                "relative group cursor-pointer flex-shrink-0 transition-transform duration-300 rounded-lg",
                currentSlide === index
                  ? "border-2 border-red-500"
                  : "border-2 border-transparent hover:border-red-500"
              )}
              onClick={() => setCurrentSlide(index)}
            >
              <div className="w-14 h-18 sm:w-16 sm:h-20 md:w-20 md:h-28 rounded-lg overflow-hidden">
                <Image
                  src={movie.image}
                  alt={movie.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="absolute bottom-1 left-0 right-0 px-1">
                <p className="text-white text-[10px] sm:text-xs font-medium truncate text-center">
                  {movie.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Next */}
        <Button variant={"navigation"} size={"circular-sm"}
          onClick={nextSlide}
          className=" transition-colors hover:bg-white/70"
        >
          <ChevronRight size={18} />
        </Button>
      </div>

      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.7s ease-in-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default Banner;
