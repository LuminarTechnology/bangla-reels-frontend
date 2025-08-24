"use client";
import CoinCard from "@/src/components/pages/user-dashboard/top-up/CoinCard";
import MembershipCard from "@/src/components/pages/user-dashboard/top-up/MembershipCard";
import { Button } from "@/src/components/ui/button";
import { coinCards, membershipCards, paymentMethods } from "@/src/constants/TopUp";
import PaymentMethodCard from "@/src/components/pages/user-dashboard/top-up/PaymentMethodCard";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const TopUp = () => {
  const [selectedMembership, setSelectedMembership] = useState<number | null>(null);
  const [selectedCoin, setSelectedCoin] = useState<number | null>(null);
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null);

  const handlePayNow = () => {
    const selectedData = {
      membership: selectedMembership !== null ? membershipCards[selectedMembership] : null,
      coinCard: selectedCoin !== null ? coinCards[selectedCoin] : null,
      paymentMethod: selectedPayment ? paymentMethods.find(p => p.id === selectedPayment) : null
    };
    
    // console.log("Selected data:", selectedData);
    // Handle the selected data here
  };

  return (
    <>
      <div className="flex gap-6 text-sm">
        <p>Balance: 0</p>
        <p>ID: 6568541632</p>
      </div>
      <h2 className="text-2xl font-semibold">Top Up</h2>
      <section className="grid grid-cols-2 gap-5">
        {membershipCards.map((card, index) => (
          <MembershipCard 
            key={index} 
            {...card} 
            isSelected={selectedMembership === index}
            onClick={() => {
              setSelectedMembership(selectedMembership === index ? null : index);
              setSelectedCoin(null); // Clear coin selection when membership is selected
            }}  
          />
        ))}
      </section>
      <section className="grid grid-cols-4 gap-5">
        {coinCards.map((card, index) => (
          <CoinCard
            key={index}
            coins={card.coins}
            price={card.price}
            rewardCoins={card.rewardCoins}
            bonus={card.bonus}
            isSelected={selectedCoin === index}
            onClick={() => {
              setSelectedCoin(selectedCoin === index ? null : index);
              setSelectedMembership(null);
            }}
          />
        ))}
      </section>
      <section>
        <h4 className="pb-4 text-2xl font-semibold">Payment Method</h4>
        <div className="flex items-center justify-start gap-4">
          {paymentMethods.map((method) => (
            <PaymentMethodCard
              key={method.id}
              icon={method.icon}
              iconAlt={method.iconAlt}
              label={method.label}
              isSelected={selectedPayment === method.id}
              onClick={() => setSelectedPayment(selectedPayment === method.id ? null : method.id)}
            />
          ))}
        </div>
      </section>
      <div className="flex items-center gap-2 text-primary-rose text-base font-semibold cursor-pointer">More <ChevronDown className=""/></div>
      <div className="flex items-center justify-center">
        <Button
          variant="danger"
          className="w-[400px] rounded-2xl p-6 text-base font-semibold"
          size="sm"
          onClick={handlePayNow}
          disabled={(!selectedMembership && selectedMembership !== 0) && (!selectedCoin && selectedCoin !== 0)}
        >
          <p>Pay Now</p>
        </Button>
      </div>
    </>
  );
};

export default TopUp;
