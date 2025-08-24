import { Card } from "@/src/components/ui/card";
import { Dot } from "lucide-react";
import Image from "next/image";

interface MembershipCardProps {
  badge?: string;
  price: number | string;
  originalPrice?: number | string;
  period?: string;
  discount?: string | number;
  duration?: string;
  showBadge?: boolean;
  isSelected?: boolean;
  onClick?: () => void;
  className?: string;
}

const MembershipCard = ({
  badge,
  price,
  originalPrice,
  period,
  discount,
  duration,
  showBadge = false,
  isSelected = false,
  onClick,
  className = ""
}: MembershipCardProps) => {
  console.log(isSelected);
  return (
    <Card 
      onClick={onClick}
      className={`cursor-pointer hover:border-primary-rose relative border border-[#7A7A7A] bg-[#0B0000] px-6 py-5 text-white hover:bg-[#7e00000c] ${className} ${isSelected ? "border-primary-rose bg-[#7e00000c" : ""}`}>
      {showBadge && badge && (
        <p className="text-primary-rose absolute top-0 right-0 rounded-tr-lg rounded-bl-lg bg-[#F8C2CB] px-2 py-1 text-xs font-semibold">
          {badge}
        </p>
      )}
      
      <div>
        <p className="mb-1 text-xl font-bold">MEMBERSHIP</p>
        <p className="text-xl font-bold">
          USD {price} <span className="text-sm font-bold">/{period}</span>
          {originalPrice && (
            <del className="ml-2 text-base font-normal text-[#7A7A7A]"> {originalPrice}</del>
          )}
          {discount && (
            <span className="bg-primary-rose ml-2 rounded-lg px-2 py-1 text-xs font-normal">
              {discount}
            </span>
          )}
        </p>
      </div>
      
      <div>
        <p className="text-primary-rose flex gap-2 leading-none">
          <Image src="/icons/crown.png" alt="Crown" width={18} height={14} />
          Unlimited access to all series for {duration}
        </p>
        <p className="flex items-center text-xs text-[#7A7A7A]">
          <span>Auto renew</span>
          <span className="flex items-center">
            <Dot className="mt-1" /> Cancel anytime
          </span>
        </p>
      </div>
    </Card>
  );
};

export default MembershipCard;