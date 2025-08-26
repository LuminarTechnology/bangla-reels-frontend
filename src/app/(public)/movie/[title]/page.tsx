import React from "react";
import YouMayLike from "@/src/components/pages/movie/YouMayLike";
import MovieDetailsMainSection from "@/src/components/pages/movie/MovieDetailsMainSection";
import ReusableBreadcrumb from "@/src/components/common/ReusableBreadcrumb";

const MoviesDetailsPage = () => {
  return (
    <div className="my-4 min-h-screen md:my-8">
      {/* Navigation */}

      <nav className="">
        <ReusableBreadcrumb items={[{ label: "Home", href: "/" }, { label: "John Wick 4" }]} />
      </nav>

      {/* Main Content */}
      <MovieDetailsMainSection />

      {/* You may like section */}
      <YouMayLike />
    </div>
  );
};

export default MoviesDetailsPage;
