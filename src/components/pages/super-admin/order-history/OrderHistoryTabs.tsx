import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/src/components/ui/tabs";
import CoinHistoryTable from "./CoinHistoryTable";
import VIPHistoryTable from "./VIPHistoryTable";
import { Separator } from "@/src/components/ui/separator";

const tabs = [
  {
    name: "Coin Plan",
    value: "coin-plan",
    content: <CoinHistoryTable />,
  },
  {
    name: "VIP Plan",
    value: "vip plan",
    content: <VIPHistoryTable />,
  },
];
export default function OrderHistoryTabs() {
  return (
    <Tabs defaultValue={tabs[0].value} className="w-full relative">
      <Separator className="absolute top-9 -inset-x-8 !w-[104.4%]" />
      <TabsList className="w-fit flex justify-start gap-6 rounded-none border-b p-0">
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className="data-[state=active]:border-b-primary h-full rounded-none border-b-2 border-transparent pb-4 pl-0 text-[#4E4E4E] data-[state=active]:bg-[#F3F4F6] data-[state=active]:text-black data-[state=active]:shadow-none"
          >
            <span className="text-base cursor-pointer">{tab.name}</span>
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map((tab) => (
        <TabsContent key={tab.value} value={tab.value}>
          {tab.content}
        </TabsContent>
      ))}
    </Tabs>
  );
}
