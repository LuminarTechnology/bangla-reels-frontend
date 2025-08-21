import MetricCard from "./MetricCard";


const DashboardMetrics = () => {

    const topRowMetrics = [
    { title: "Total Users", value: "577", change: "2.5%", isPositive: true },
    { title: "Total Category", value: "152", change: "4.3%", isPositive: true },
    { title: "Total Short Video", value: "450", change: "1.2%", isPositive: true },
    { title: "Total Movie Series", value: "220", change: "3.8%", isPositive: false },
    { title: "Total Revenue", value: "$36.55", change: "3.8%", isPositive: false },
  ]
    return (
        <div className="space-y-4">

            <h1 className="text-xl font-bold">Overview</h1>
      {/* Top row - 4 metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {topRowMetrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>
    </div>
    );
};

export default DashboardMetrics;