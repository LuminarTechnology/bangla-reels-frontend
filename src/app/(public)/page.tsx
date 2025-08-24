import Banner from "@/src/components/pages/home/banner";
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
