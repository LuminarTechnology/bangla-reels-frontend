import React from "react";
import YouMayLike from "@/src/components/pages/movie/YouMayLike";
import MovieDetailsMainSection from "@/src/components/pages/movie/MovieDetailsMainSection";

const MoviesDetailsPage = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="p-6">
        <div className="text-sm text-white/70">Home / John Wick 4</div>
      </nav>

      {/* Main Content */}
      <MovieDetailsMainSection />

      {/* You may like section */}
      <YouMayLike />
    </div>
  );
};

export default MoviesDetailsPage;
