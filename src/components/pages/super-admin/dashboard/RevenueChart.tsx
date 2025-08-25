import React from "react";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu";
import { ChevronDown, TrendingUp } from "lucide-react";

const revenueComparisonData = [
  { month: "Jan", lastYear: 40, thisYear: 38 },
  { month: "Feb", lastYear: 42, thisYear: 35 },
  { month: "Mar", lastYear: 38, thisYear: 32 },
  { month: "Apr", lastYear: 41, thisYear: 30 },
  { month: "May", lastYear: 43, thisYear: 28 },
  { month: "Jun", lastYear: 45, thisYear: 31 },
  { month: "Jul", lastYear: 44, thisYear: 35 },
  { month: "Aug", lastYear: 46, thisYear: 40 },
  { month: "Sep", lastYear: 48, thisYear: 45 },
  { month: "Oct", lastYear: 47, thisYear: 52 },
  { month: "Nov", lastYear: 45, thisYear: 48 },
  { month: "Dec", lastYear: 43, thisYear: 55 },
];

const RevenueChart = () => {
  return (
    <div className="mt-6 rounded-lg border bg-white p-6 shadow-sm">
      <div className="mb-6 flex flex-col md:flex-row items-center justify-between">
        <div>
          <h3 className="mb-1 text-lg font-semibold text-gray-700">Revenue Generated</h3>
          <p className="text-sm text-gray-500">
            Amount of revenue in this month comparing to last year
          </p>
        </div>

        <div className="flex flex-col md:flex-row  items-start md:items-center gap-4 mt-2 md:mt-0">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-blue-400"></div>
              <span className="text-sm text-gray-600">Last year</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
              <span className="text-sm text-gray-600">This year</span>
            </div>
            <div className="flex items-center gap-1 text-green-500">
              <TrendingUp className="h-4 w-4" />
              <span className="text-sm font-medium">5.25%</span>
            </div>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger className="text-bold flex items-center gap-2 rounded-md border border-gray-200 bg-gray-200 px-3 py-2 text-sm text-gray-600">
              Last month
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>All</DropdownMenuItem>
              <DropdownMenuItem>Todays</DropdownMenuItem>
              <DropdownMenuItem>Yesterdays</DropdownMenuItem>
              <DropdownMenuItem>Last 7 days</DropdownMenuItem>
              <DropdownMenuItem>Last 30 days</DropdownMenuItem>
              <DropdownMenuItem>This Month</DropdownMenuItem>
              <DropdownMenuItem>Last Month</DropdownMenuItem>
              <DropdownMenuItem>Custom Range</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={revenueComparisonData}>
            <defs>
              <linearGradient id="lastYear" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#60a5fa" stopOpacity={0.1} />
                <stop offset="95%" stopColor="#60a5fa" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="thisYear" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.2} />
                <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#9ca3af" }}
            />
            <YAxis hide />
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                fontSize: "12px",
              }}
            />
            <Area
              type="monotone"
              dataKey="lastYear"
              stroke="#60a5fa"
              strokeWidth={2}
              fill="url(#lastYear)"
            />
            <Area
              type="monotone"
              dataKey="thisYear"
              stroke="#10b981"
              strokeWidth={2}
              fill="url(#thisYear)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueChart;
