"use client";

import { useTranslations } from "next-intl";
import React from "react";
import Banner from "./banner";
import { TopPicksSlider } from "./TopPicks";
import NewRelease from "./NewRelease";

const Home = () => {
  const t = useTranslations("HomePage");
  return (
    <div>
      <Banner />
      <TopPicksSlider sectionTitle={t("topPicks")} buttonText={t("btn")} />
      <NewRelease sectionTitle={t("new-release")} play={t("play")} />
      <TopPicksSlider sectionTitle={t("love-at-first-side")} buttonText={t("btn")} />
      <TopPicksSlider sectionTitle={t("tortured-love")} buttonText={t("btn")} />
      <TopPicksSlider sectionTitle={t("second-chance")} buttonText={t("btn")} />
    </div>
  );
};

export default Home;
