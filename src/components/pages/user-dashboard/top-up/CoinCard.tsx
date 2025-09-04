import { Card } from "@/src/components/ui/card";
import Image from "next/image";

interface CoinCardProps {
  coins: number;
  price: number;
  rewardCoins: number;
  bonus?: string;
  isSelected?: boolean;
  onClick?: () => void;
  className?: string;
}

const CoinCard: React.FC<CoinCardProps> = ({
  coins,
  price,
  rewardCoins,
  bonus,
  isSelected = false,
  onClick,
  className = "",
}) => {
  return (
    <div>
      <Card
        onClick={onClick}
        className={`min-w-[221px] cursor-pointer hover:border-primary-rose gap-1 rounded-2xl border-[#7A7A7A] bg-[#0F0828] px-3 sm:px-6 py-3 sm:py-5 text-white hover:bg-[#7e00000c] ${className} ${isSelected ? "border-primary-rose bg-[#7e00000c]" : ""}`}
      >
        <div className="flex items-center gap-2">
          <Image src="/icons/coin.png" alt="coin-icon" width={24} height={24} />
          <span className="text-2xl font-bold">{coins}</span>
          <span className="mt-2 text-sm font-bold">Coins</span>
          {bonus && (
            <span className="bg-primary-rose ml-2 rounded-lg px-2 py-1 text-xs font-normal">
              {bonus}
            </span>
          )}
        </div>
        <div className="text-primary-rose text-sm">
          {rewardCoins > 0 ? `+${rewardCoins} Reward Coins` : "+0 Reward Coins"}
        </div>
        <div className="mt-1 text-base">USD {price.toFixed(2)}</div>
      </Card>
    </div>
  );
};

export default CoinCard;
