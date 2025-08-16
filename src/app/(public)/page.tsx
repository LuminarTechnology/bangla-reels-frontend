import ContainerWrapper from "@/src/components/common/ContainerWrapper";
import { PosterCard } from "@/src/components/common/PosterCard";
import BlogCard from "@/src/components/pages/fandom/BlogCard";
import Banner from "@/src/components/pages/home/banner";
import { StreamingCard } from "@/src/components/common/StreamingCard";
import { TopPicksSlider } from "@/src/components/pages/home/TopPicks";
import React from "react";
import NewRelease from "@/src/components/pages/home/NewRelease";

export default function HomePage() {
  return (
    <div>
      <Banner />
      <TopPicksSlider />
      <NewRelease />
      <TopPicksSlider sectionTitle="Love at first side" />
      <TopPicksSlider sectionTitle="Tortured Love" />
      <TopPicksSlider sectionTitle="Second chance" />
    </div>
  );
}
