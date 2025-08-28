"use client";
import CoinCard from "@/src/components/pages/user-dashboard/top-up/CoinCard";
import MembershipCard from "@/src/components/pages/user-dashboard/top-up/MembershipCard";
import { Button } from "@/src/components/ui/button";
import { coinCards, membershipCards, paymentMethods, topUpDetails } from "@/src/constants/TopUp";
import PaymentMethodCard from "@/src/components/pages/user-dashboard/top-up/PaymentMethodCard";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import RewardCard from "@/src/components/pages/user-dashboard/top-up/RewardCard";

const TopUp = () => {
  const [selectedMembership, setSelectedMembership] = useState<number | null>(null);
  const [selectedCoin, setSelectedCoin] = useState<number | null>(null);
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null);

  const handlePayNow = () => {
    const selectedData = {
      membership: selectedMembership !== null ? membershipCards[selectedMembership] : null,
      coinCard: selectedCoin !== null ? coinCards[selectedCoin] : null,
      paymentMethod: selectedPayment ? paymentMethods.find((p) => p.id === selectedPayment) : null,
    };

    // console.log("Selected data:", selectedData);
    // Handle the selected data here
  };

  return (
    <main className="">
      <div className="flex gap-6 text-sm">
        <p>Balance: 0</p>
        <p>ID: 6568541632</p>
      </div>
      <h2 className="mt-6 text-2xl font-semibold">Top Up</h2>
      <section className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
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
      <section className="mt-8 grid items-center justify-start gap-5 md:grid-cols-3 xl:grid-cols-4">
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
      <div className="mx-auto rounded-2xl py-6 text-white shadow-lg">
        <h2 className="mb-6 text-2xl font-semibold">Rewards & Free Coins</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {topUpDetails.rewards_and_free_coins.map((reward, index) => (
            <RewardCard index={index} text={reward} />
          ))}
        </div>
      </div>
      <Accordion type="single" collapsible className="my-6 w-full" defaultValue="">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <div className="text-primary-rose flex cursor-pointer items-center gap-2 text-base font-semibold">
              More <ChevronDown className="" />
            </div>
          </AccordionTrigger>
          <AccordionContent className="mt-4 flex flex-col gap-4">
            <div className="space-y-6 text-[#B3B1B0]">
              {/* Tips Section */}
              <div>
                <h2 className="text-xl font-semibold">Tips</h2>
                <ul className="mt-2 list-inside list-none space-y-3">
                  {topUpDetails.tips.map((tip, index) => (
                    <li key={index} className="text-xl">
                      {typeof tip === "string" ? (
                        tip
                      ) : (
                        <div className="space-y-1">
                          <div>{tip.title}</div>
                          <ul className="ml-8 list-inside list-none">
                            {tip.packages.map((pkg, i) => (
                              <li key={i}>
                                {pkg.coins} Coins → ${pkg.price}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
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
      <div className="mt-9 flex items-center justify-center">
        <Button
          variant="danger"
          className="w-[400px] rounded-2xl p-6 text-base font-semibold"
          size="sm"
          onClick={handlePayNow}
          disabled={
            !selectedMembership && selectedMembership !== 0 && !selectedCoin && selectedCoin !== 0
          }
        >
          <p>Pay Now</p>
        </Button>
      </div>
    </main>
  );
};

export default TopUp;
