import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { MoveDown, MoveUp } from "lucide-react";



  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="flex items-center gap-2 rounded-full bg-[#2b1b3f] px-3 py-1 text-sm text-white">
          <span>
            {payload[0].value} hrs, {label}{" "}
            {payload[0].payload.percent < 0 ? (
              <MoveDown size={8} className="text-primary-rose inline-flex" />
            ) : (
              <MoveUp size={8} className="inline-flex text-[#0CB72B]" />
            )}
          </span>
          <span className={payload[0].payload.percent < 0 ? "text-primary-rose" : "text-[#0CB72B]"}>
            {payload[0].payload.percent}%
          </span>
        </div>
      );
    }
    return null;
  };

  // Custom ActiveDot with vertical dotted line
  const CustomActiveDot = ({ cx, cy, stroke, chartHeight }: any) => {
    return (
      <g>
        {/* vertical dashed line inside chart */}
        <line
          x1={cx}
          y1={cy}
          x2={cx}
          y2={chartHeight - 4} // -20 margin so line stays inside chart bottom
          stroke={stroke}
          strokeDasharray="4 4"
        />
        {/* main dot */}
        <circle cx={cx} cy={cy} r={6} fill={stroke} />
      </g>
    );
  };
const AnalyticsChartCard = ({title, strokeColor, id}: {title:string, strokeColor:string, id:string}) => {
  const data = [
    { day: "Monday", hours: 30, percent: -2.5 },
    { day: "Tuesday", hours: 60, percent: 5.25 },
    { day: "Wednesday", hours: 30, percent: 3.1 },
    { day: "Thursday", hours: 70, percent: -1.5 },
    { day: "Friday", hours: 30, percent: 0.8 },
    { day: "Saturday", hours: 60, percent: -2.2 },
    { day: "Sunday", hours: 70, percent: -0.5 },
  ];



  const chartHeight = 250;
  return (
    <div className="w-full rounded-2xl border border-[#595756] p-4">
      <div className="flex flex-col md:flex-row md:items-start justify-between">
        <div>
          <h2 className="mb-1 text-2xl font-semibold text-[#FFFAFA]">{title}</h2>
          <p className="text-xs text-[#A9A9A9]">
          Number of views in this week comparing to last week
          </p>
        </div>

        <div>
          <Select>
            <SelectTrigger className="w-[180px] rounded-xl border-none bg-[#B3B1B033] outline-none focus:ring-0">
              <SelectValue placeholder="This Month" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
                <SelectItem value="year">This Year</SelectItem>
                <SelectItem value="all">All Time</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <ResponsiveContainer width="100%" height={chartHeight}>
          <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
                <stop offset="10%" stopColor={strokeColor} stopOpacity={0.6} />
                <stop offset="95%" stopColor={strokeColor} stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="day" stroke="#aaa" hide />
            <YAxis hide />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="hours"
              stroke={strokeColor}
            //   fill="url(#colorUv)"
            fill={`url(#${id})`}
              strokeWidth={2}
              dot={false}
              activeDot={<CustomActiveDot chartHeight={200} />}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AnalyticsChartCard;
