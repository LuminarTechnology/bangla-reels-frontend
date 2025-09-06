"use client";
import AnalyticsChartCard from "@/src/components/charts/AnalyticsChartCard";

const AnalyticsChart = () => {
  return (
    <div className="flex flex-col gap-6 md:flex-row">
      <AnalyticsChartCard title="Views Trend" strokeColor="#ff1f55" id="redFil" />

      <AnalyticsChartCard title="Watchtime Trend" strokeColor="#00c2ff" id="blueFil" />
    </div>
  );
};

export default AnalyticsChart;
