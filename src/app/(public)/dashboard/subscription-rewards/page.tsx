import { Button } from "@/src/components/ui/button";
import { Card } from "@/src/components/ui/card";
import { Separator } from "@/src/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/src/components/ui/tabs";
import Image from "next/image";
import { transactions, episodes } from "@/src/constants/SubscriptionItems";
import { EpisodeAndTransactionTable } from "@/src/components/pages/user-dashboard/subscription-rewards/EpisodeAndTransactionTable";

export default function WalletPage() {
  const transactionColumns = [
    { key: "amount", label: "Amount" },
    { key: "coins", label: "Coins" },
    { key: "trading", label: "Trading" },
    { key: "tradingHours", label: "Trading Hours" },
  ];

  const episodeColumns = [
    { key: "title", label: "Title" },
    { key: "series", label: "Series" },
    { key: "unlockedAt", label: "Unlocked at" },
    { key: "status", label: "Status" },
  ];
  return (
    <>
      <Card className="mb-5 rounded-2xl border-0 bg-[#16151A] p-6 text-white">
        <h3 className="text-2xl font-bold">My Wallet</h3>
        <div className="flex items-center justify-between pl-6">
          <p className="text-base font-semibold">
            <span className="text-2xl">0</span> coins
          </p>
          <p className="text-base font-semibold">
            <span className="text-2xl">0</span> Reward Coins
          </p>
          <Button variant="danger" className="rounded-2xl p-6 text-base font-semibold" size="sm">
            <p>Top Up</p>
          </Button>
        </div>
      </Card>
      <Card className="mb-5 rounded-2xl border-0 bg-[#FECBAA] p-6">
        <div className="flex items-start justify-start gap-6">
          <Image src={"/icons/vicon.png"} alt="vicon" width={60} height={60} />
          <h2 className="-mt-2 text-[40px] font-bold">Reelshort Membership</h2>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-start gap-2">
            <Image
              src={"/icons/tv-icon.png"}
              alt="tv-icon"
              width={28}
              height={26}
              className="h-[26px] w-[28px]"
            />
            <p className="-mt-1 text-2xl leading-none font-normal">
              Enjoy a vast library of popular short dramas for free
            </p>
          </div>
          <Button
            className="rounded-2xl bg-[#FFEBDF] p-6 text-base font-semibold text-black hover:text-white"
            size="sm"
          >
            <p>Active Now</p>
          </Button>
        </div>
      </Card>
      <Tabs defaultValue="transactions">
        <TabsList className="bg-[#111111]">
          <TabsTrigger
            value="transactions"
            className="data-[state=active]:text-primary-rose rounded-lg px-4 py-6 text-base font-semibold text-white data-[state=active]:bg-[#E83A5714]"
          >
            Transaction History
          </TabsTrigger>
          <Separator orientation="vertical" className="mx-3 h-4 bg-[#2D2B33]" />
          <TabsTrigger
            value="episodes"
            className="data-[state=active]:text-primary-rose rounded-lg px-4 py-6 text-base font-semibold text-white data-[state=active]:bg-[#E83A5714]"
          >
            Episodes Unlocked
          </TabsTrigger>
        </TabsList>
        <TabsContent value="transactions" className="mt-0">
          <div className="overflow-x-auto">
            <EpisodeAndTransactionTable columns={transactionColumns} data={transactions} />
          </div>
        </TabsContent>
        <TabsContent value="episodes" className="mt-0">
          <div className="overflow-x-auto">
            <EpisodeAndTransactionTable columns={episodeColumns} data={episodes} />
          </div>
        </TabsContent>
      </Tabs>
    </>
  );
}
