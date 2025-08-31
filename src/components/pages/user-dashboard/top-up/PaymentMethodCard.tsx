import Image from "next/image";

interface PaymentMethodCardProps {
  icon: string;
  iconAlt: string;
  label: string;
  isSelected?: boolean;
  onClick?: () => void;
  className?: string;
}

const PaymentMethodCard: React.FC<PaymentMethodCardProps> = ({
  icon,
  iconAlt,
  label,
  isSelected = false,
  onClick,
  className = ""
}) => {
  return (
    <div 
      className={`border-[#7A7A7A] hover:border-primary-rose bg-[#0F0828] flex w-64 items-center justify-center gap-2 rounded-2xl border py-5 text-white cursor-pointer hover:bg-[#7e00000c] transition-colors ${className} ${isSelected ? "border-primary-rose bg-[#7e00000c]" : ""}`}
      onClick={onClick}
    >
      <Image src={icon} alt={iconAlt} width={24} height={24} />
      <span className="text-base font-semibold">{label}</span>
    </div>
  );
};

export default PaymentMethodCard;