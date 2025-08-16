"use client";

import BlogCard from "@/src/components/pages/fandom/BlogCard";
import React, { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from "@/src/components/ui/pagination";
import { cn } from "@/src/lib/utils";

const fakeBlogs = [
  {
    backgroundImage:
      "https://www.reelshort.com/fandom/wp-content/uploads/2025/08/the-tutor-trap-cast.jpg",
    topic: "Movie Cast List",
    title: "FUTURE",
    date: "2025-06-05",
    headline: "Exploring Tomorrow's Cinematic Landscape",
    description:
      "A deep dive into upcoming releases that promise to reshape our understanding of modern storytelling and visual narrative.",
  },
  {
    backgroundImage: "/images/banner/banner-5.png",
    topic: "Adventure Movies",
    title: "WILD ESCAPES",
    date: "2025-07-12",
    headline: "Top Adventure Flicks of the Year",
    description:
      "From mountains to oceans, these films take viewers on unforgettable journeys filled with thrills and suspense.",
  },
  {
    backgroundImage: "/images/banner/banner-4.png",
    topic: "Romantic Drama",
    title: "LOVE STORY",
    date: "2025-05-20",
    headline: "The Most Anticipated Romantic Films",
    description:
      "A look at upcoming romantic dramas and comedies that are set to steal hearts and capture imaginations worldwide.",
  },
  {
    backgroundImage: "/images/banner/banner-3.png",
    topic: "Sci-Fi & Fantasy",
    title: "BEYOND EARTH",
    date: "2025-08-01",
    headline: "Exploring Futuristic Worlds",
    description:
      "Futuristic landscapes, alien civilizations, and extraordinary technologies—these upcoming sci-fi films are a feast for imagination.",
  },
];

export default function FandomPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 4;
  const totalPages = Math.ceil(fakeBlogs.length / blogsPerPage);

  const currentBlogs = fakeBlogs.slice(
    (currentPage - 1) * blogsPerPage,
    currentPage * blogsPerPage
  );

  const handlePageChange = (page: number) => setCurrentPage(page);

  return (
    <div className="px-2 sm:px-4 md:px-8 lg:px-16">
      {/* Blog Grid */}
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 my-10">
        {currentBlogs.map((blog, i) => (
          <BlogCard
            key={i}
            backgroundImage={blog.backgroundImage}
            topic={blog.topic}
            title={blog.title}
            date={blog.date}
            headline={blog.headline}
            description={blog.description}
          />
        ))}
      </div>

      {/* Shadcn Pagination */}
      <Pagination>
        <PaginationContent>
          {/* Previous Button - hide if currentPage === 1 */}
          {currentPage > 1 && (
            <PaginationItem>
              <PaginationPrevious
                className="cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(currentPage - 1);
                }}
              />
            </PaginationItem>
          )}

          {/* Page Numbers + Ellipsis */}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
            if (
              page === 1 ||
              page === totalPages ||
              (page >= currentPage - 1 && page <= currentPage + 1)
            ) {
              return (
                <PaginationItem key={page}>
                  <PaginationLink
                    isActive={currentPage === page}
                    onClick={(e) => {
                      e.preventDefault();
                      handlePageChange(page);
                    }}
                    className={cn(
                      "bg-white",
                      currentPage === page && "bg-red-500 border border-red-500 text-white"
                    )}
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              );
            } else if (
              (page === 2 && currentPage > 3) ||
              (page === totalPages - 1 && currentPage < totalPages - 2)
            ) {
              return (
                <PaginationItem key={`ellipsis-${page}`}>
                  <PaginationEllipsis />
                </PaginationItem>
              );
            }
            return null;
          })}

          {/* Next Button - hide if currentPage === totalPages */}

          {currentPage < totalPages && (
            <PaginationItem>
              <PaginationNext
                className="cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(currentPage + 1);
                }}
              />
            </PaginationItem>
          )}
        </PaginationContent>
      </Pagination>
    </div>
  );
}
