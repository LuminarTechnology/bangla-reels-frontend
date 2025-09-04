import AdsTab from "../components/pages/super-admin/setting/AdsTab";
import CurrencyTab from "../components/pages/super-admin/setting/CurrencyTab";
import GeneralTab from "../components/pages/super-admin/setting/GeneralTab";
import PaymentTab from "../components/pages/super-admin/setting/PaymentTab";
import ReportTab from "../components/pages/super-admin/setting/ReportTab";

export const settingTabs = [
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