"use client";
import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import Image from "next/image";
import clsx from "clsx";

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
    <div className="relative h-[550px] overflow-hidden bg-gray-900">
      <div className="absolute inset-0 transition-all duration-700 ease-in-out ">
        <Image
          src={movies[currentSlide].image}
          alt={movies[currentSlide].title}
          fill
          priority
          className="object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-black/20 " />
      </div>

      {/* Main Content */}
      <div className="relative z-10 h-full flex items-center top-32 px-8 md:px-16">
        <div className="max-w-md animate-fadeIn">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-2">
            {movies[currentSlide].title}
          </h1>
          {movies[currentSlide].subtitle && (
            <h2 className="text-white text-3xl md:text-4xl font-light mb-8">
              {movies[currentSlide].subtitle}
            </h2>
          )}

          <button className="flex items-center space-x-3 text-white px-6 rounded-lg transition-all group">
            <div className="bg-red-500 hover:bg-red-700 p-2 rounded-full">
              <Play
                size={20}
                fill="white"
                className="group-hover:scale-110 transition-transform "
              />
            </div>
            <span className="font-medium">Watch Now</span>
          </button>
        </div>
      </div>

      {/* Thumbnails */}
      <div className="absolute bottom-14 right-4 flex items-center space-x-3 z-20">
        <button
          onClick={prevSlide}
          className="text-white transition-colors p-2 rounded-full bg-white/40 hover:bg-white/70"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="flex space-x-2 overflow-x-auto max-w-[300px] scrollbar-hide">
          {movies.map((movie, index) => (
            <div
              key={movie.id}
              ref={(el) => (thumbnailRefs.current[index] = el)}
              className={clsx(
                "relative group cursor-pointer flex-shrink-0 transition-transform duration-300 rounded-lg",
                currentSlide === index
                  ? "border-2 border-red-500 "
                  : "border-2 border-transparent hover:border-red-500"
              )}
              onClick={() => setCurrentSlide(index)}
            >
              <div className="w-16 h-20 md:w-20 md:h-28 rounded-lg overflow-hidden">
                <Image
                  src={movie.image}
                  alt={movie.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              <div className="absolute bottom-1 left-0 right-0 px-1">
                <p className="text-white text-xs font-medium truncate text-center">{movie.title}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="text-white transition-colors p-2 rounded-full bg-white/40 hover:bg-white/70"
        >
          <ChevronRight size={20} />
        </button>
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
