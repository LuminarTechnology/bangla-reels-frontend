import AnalyticsChartCard from "@/src/components/charts/AnalyticsChartCard";


const AnalyticsChart = () => {
    return (
        <div className="flex flex-col md:flex-row gap-6">
            <AnalyticsChartCard/>
            <AnalyticsChartCard/>
        </div>
    );
};

export default AnalyticsChart;