"use client";
import React from "react";
import { LineChart, Line, BarChart, Bar, ResponsiveContainer, Tooltip } from "recharts";
import { TrendingDown, TrendingUp, MoreHorizontal } from "lucide-react";
import RevenueChart from "./RevenueChart";

const profitData = [
  { month: 1, current: 20, previous: 10 },
  { month: 2, current: 25, previous: 18 },
  { month: 3, current: 32, previous: 35 },
  { month: 4, current: 39, previous: 42 },
  { month: 5, current: 41, previous: 44 },
  { month: 6, current: 30, previous: 41 },
  { month: 7, current: 41, previous: 30 },
  { month: 8, current: 47, previous: 34 },
  { month: 9, current: 44, previous: 26 },
  { month: 10, current: 50.55, previous: 41 },
];

const revenuePerVisitorData = [
  { day: 1, current: 32, previous: 28 },
  { day: 2, current: 45, previous: 42 },
  { day: 3, current: 38, previous: 35 },
  { day: 4, current: 42, previous: 40 },
  { day: 5, current: 48, previous: 45 },
  { day: 6, current: 35, previous: 38 },
  { day: 7, current: 41, previous: 39 },
  { day: 8, current: 38, previous: 36 },
];

const AnalyticsDashboard = () => {
  return (
    <div>
      <h1 className="my-6 text-2xl font-bold text-gray-900">Analytics Charts</h1>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="space-y-6">
          {/* Monthly Net Profit Chart */}
          <div className="flex w-full items-center justify-between rounded-lg border bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-start justify-between">
              <div>
                <div className="mb-2 flex items-center gap-2">
                  <h3 className="font-medium text-gray-600">Monthly Net Profit</h3>
                  <MoreHorizontal className="h-4 w-4 text-gray-400" />
                </div>
                <p className="mb-4 text-sm text-gray-500">Total Profit gained</p>
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-bold text-gray-900">$36.55</span>
                  <div className="flex items-center gap-1 text-red-500">
                    <TrendingDown className="h-4 w-4" />
                    <span className="text-sm">12.5%</span>
                  </div>
                  <span className="text-sm text-gray-500">VS last day</span>
                </div>
              </div>
            </div>

            <div className="h-32 w-1/2">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={profitData}>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "white",
                      border: "1px solid #e5e7eb",
                      borderRadius: "8px",
                      fontSize: "12px",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="previous"
                    stroke="oklch(0.704 0.191 22.216)"
                    strokeWidth={2}
                    dot={false}
                  />
                  <Line
                    type="monotone"
                    dataKey="current"
                    stroke="#8b5cf6"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Revenue Per Visitor Chart */}
          <div className="flex w-full items-center justify-between rounded-lg border bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-start justify-between">
              <div>
                <div className="mb-2 flex items-center gap-2">
                  <h3 className="font-medium text-gray-600">Revenue Per Visitor</h3>
                  <MoreHorizontal className="h-4 w-4 text-gray-400" />
                </div>
                <p className="mb-4 text-sm text-gray-500">
                  Average income per visitors in your website
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-bold text-gray-900">$36.55</span>
                  <div className="flex items-center gap-1 text-green-500">
                    <TrendingUp className="h-4 w-4" />
                    <span className="text-sm">5.25%</span>
                  </div>
                  <span className="text-sm text-gray-500">VS last day</span>
                </div>
              </div>
            </div>

            <div className="h-32 w-1/2">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={revenuePerVisitorData} barCategoryGap="20%">
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "white",
                      border: "1px solid #e5e7eb",
                      borderRadius: "8px",
                      fontSize: "12px",
                    }}
                  />
                  <Bar dataKey="previous" fill="#3b82f6" radius={[2, 2, 0, 0]} />
                  <Bar dataKey="current" fill="oklch(0.704 0.191 22.216)" radius={[2, 2, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Boost USD Balance Card */}
        <div className="h-96 rounded-lg bg-[#bee6d8] p-6 text-white shadow-sm">
          <div className="">
            <h3 className="mb-2 text-lg font-semibold text-[#056E46]">Boost your USD balance</h3>
            <div className="mb-4 text-4xl font-bold text-[#056E46]">by 2.5%</div>
          </div>

          {/* Decorative wave pattern */}
          <div className="relative bottom-0 h-60 overflow-hidden rounded-lg">
            <div className="absolute inset-0">
              <svg
                className="absolute bottom-0 h-full w-full"
                viewBox="0 0 400 100"
                preserveAspectRatio="none"
              >
                <path d="M0,100 Q0,100 200,40 T400,30 L400,100 L0,100 Z" fill="#0390AC" />
                <path d="M0,20 Q100,10 200,40 T400,60 L400,100 L0,100 Z" fill="#2ABFB7" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Revenue Generated Comparison Chart */}
      <RevenueChart />
    </div>
  );
};

export default AnalyticsDashboard;
