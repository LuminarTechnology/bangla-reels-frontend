import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/src/components/ui/tabs";
import { Separator } from "@/src/components/ui/separator";
import GeneralTab from "./GeneralTab";
import PaymentTab from "./PaymentTab";
import AdsTab from "./AdsTab";
import ReportTab from "./ReportTab";
import CurrencyTab from "./CurrencyTab";

const tabs = [
  {
    name: "General",
    value: "general",
    content: <GeneralTab />,
  },
  {
    name: "Payment",
    value: "payment",
    content: <PaymentTab />,
  },
  {
    name: "Ads",
    value: "ads",
    content: <AdsTab />,
  },
  {
    name: "Report",
    value: "report",
    content: <ReportTab />
  },
  {
    name: "Currency",
    value: "currency",
    content: <CurrencyTab />
  }
];
export default function SettingTabs() {
  return (
    <Tabs defaultValue={tabs[0].value} className="w-full relative">
      <Separator className="absolute top-9 -inset-x-8 !w-[104.4%]" />
      <TabsList className="w-fit justify-start gap-4 rounded-none border-b p-0">
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
