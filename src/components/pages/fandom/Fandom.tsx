"use client";
import React, { useState } from "react";
import FandomCard from "./FandomCard";
import { ReusablePagination } from "../../common/ReusablePagination";

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

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 4;
  const totalPages = Math.ceil(fakeBlogs.length / blogsPerPage);

  const currentBlogs = fakeBlogs.slice(
    (currentPage - 1) * blogsPerPage,
    currentPage * blogsPerPage
  );

  const handlePageChange = (page: number) => setCurrentPage(page);

  return (
    <div className="my-4 md:my-8">
      {/* Blog Grid */}
      <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {currentBlogs.map((blog, i) => (
          <FandomCard
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

      {/* Pagination */}
      <ReusablePagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Blog;
