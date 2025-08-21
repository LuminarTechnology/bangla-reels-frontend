import React from "react";
import { Card, CardContent } from "../../ui/card";
import { ArrowDown, ArrowUp } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
}

const MetricCard = ({ title, value, change, isPositive }: MetricCardProps) => {
  return (
    <Card className="rounded-2xl bg-white shadow-lg">
      <CardContent className="p-4">
        <div className="space-y-2">
          <p className="text-xl font-semibold text-[#7A7A7A]">{title}</p>
          <div className="inline-flex items-center gap-4">
            <p className="flex items-center text-3xl font-semibold text-[#242424]">{value}</p>
            <p
              className={`flex items-center gap-1 rounded px-1.5 py-1 text-base ${isPositive ? "bg-green-100 text-[#0CB72B]" : "bg-red-100 text-red-600"}`}
            >
              <span>{isPositive ? <ArrowUp size={16} /> : <ArrowDown size={16} />}</span>
              {change}
            </p>
          </div>
          <p className="mt-2 text-xs text-[#7A7A7A]">
            {isPositive ? "Increased" : "Decreased"} compare to last day
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default MetricCard;
