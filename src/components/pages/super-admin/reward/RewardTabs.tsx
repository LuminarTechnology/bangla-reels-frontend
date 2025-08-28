import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/src/components/ui/tabs";
import { Separator } from "@/src/components/ui/separator";
import AdsCoin from "./AdsCoin";
// import DailyCoin from "./DailyCoin";

const tabs = [
  {
    name: "Ads Coin",
    value: "ads-coin",
    content: <AdsCoin />,
  },
  // {
  //   name: "Daily Coin",
  //   value: "daily-coin",
  //   content: <DailyCoin />,
  // },
];

export default function RewardTabs() {
  return (
    <Tabs defaultValue={tabs[0].value} className="w-full relative">
      <Separator className="absolute top-9" />
      <TabsList className="w-fit justify-start gap-6 rounded-none border-b p-0">
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className="data-[state=active]:border-b-primary h-full rounded-none border-b-2 border-transparent pb-4 pl-0 pr-0 text-[#4E4E4E] font-normal data-[state=active]:bg-[#F3F4F6] data-[state=active]:text-black data-[state=active]:shadow-none cursor-pointer"
          >
            <span className="text-base">{tab.name}</span>
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