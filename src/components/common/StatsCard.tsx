
export interface StatsCardProps {
  title: string;
  value: string | number;
  unit?: string;
  change: string;
  icon: React.ElementType;
  changeType?: "positive" | "negative" | "neutral";
}

const StatsCard = ({ stat }: { stat: StatsCardProps }) => {
  const getChangeColor = () => {
    switch (stat.changeType){
      case "positive" :
      return "text-[#0CB72B]";
      case "negative": 
      return "text-primary-rose";
      case "neutral":
        return "text-white";
      default: 
       return "text-white"
    }
  }
  return (
    <div className="relative w-full rounded-2xl border-2 border-[#D7D7D740] px-6 py-7">
      <div className="flex flex-col justify-between gap-3">
        <div className="w-fit rounded-md bg-[#E83A57] p-1.5">
          <stat.icon strokeWidth="1.25" className="size-7 text-[#FFFAFA]" />
        </div>
        <div className="flex items-baseline space-x-2">
          <span className="text-3xl font-semibold text-[#FFFAFA]">{stat.value}</span>
          <span className="text-sm text-[#B3B1B0]">{stat.unit}</span>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-[#B3B1B0]">{stat.title}</p>
        </div>
      </div>
      <div className={`absolute top-2.5 right-2.5 rounded-md bg-[#B3B1B033] px-2 py-1 text-xs ${getChangeColor()}`}>
        {stat.change}
      </div>
    </div>
  );
};

export default StatsCard;
