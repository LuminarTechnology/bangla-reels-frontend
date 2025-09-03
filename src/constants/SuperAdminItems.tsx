import { UserData } from "../types/superAdminUsers";
import { TableColumn } from "../types/reusableTable";
import { Avatar, AvatarFallback, AvatarImage } from "@/src/components/ui/avatar";
import { Button } from "@/src/components/ui/button";
import { Switch } from "@/src/components/ui/switch";

export const userData: UserData[] = [
  {
    no: "01",
    id: "612651",
    name: "Eleanor Pena",
    avatar: "/professional-woman.png",
    coins: 5296,
    plan: "A",
    date: "8/24/2025",
    isBlocked: true,
  },
  {
    no: "02",
    id: "612651",
    name: "Guy Hawkins",
    avatar: "/professional-man.png",
    coins: 5296,
    plan: "A",
    date: "8/23/2025",
    isBlocked: false,
  },
  {
    no: "03",
    id: "612651",
    name: "Courtney Henry",
    avatar: "/business-woman.png",
    coins: 5296,
    plan: "A",
    date: "8/22/2025",
    isBlocked: true,
  },
  {
    no: "04",
    id: "612651",
    name: "Dianne Russell",
    avatar: "/casual-woman.png",
    coins: 5296,
    plan: "A",
    date: "8/12/2025",
    isBlocked: false,
  },
  {
    no: "05",
    id: "612651",
    name: "Darrell Steward",
    avatar: "/casual-man.png",
    coins: 5296,
    plan: "A",
    date: "7/24/2025",
    isBlocked: false,
  },
  {
    no: "07",
    id: "612651",
    name: "Albert Flores",
    avatar: "/business-man.png",
    coins: 5296,
    plan: "A",
    date: "7/21/2025",
    isBlocked: false,
  },
  {
    no: "08",
    id: "612651",
    name: "Ronald Richards",
    avatar: "/professional-man-glasses.png",
    coins: 5296,
    plan: "A",
    date: "8/23/2025",
    isBlocked: false,
  },
  {
    no: "09",
    id: "612651",
    name: "Jacob Jones",
    avatar: "/young-man.png",
    coins: 5296,
    plan: "A",
    date: "8/23/2025",
    isBlocked: false,
  },
  {
    no: "10",
    id: "612651",
    name: "Darlene Robertson",
    avatar: "/professional-woman-smile.png",
    coins: 5296,
    plan: "A",
    date: "8/11/2025",
    isBlocked: false,
  },
];

const getInitials = (name: string) => {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
};

export const columns: TableColumn<UserData>[] = [
  {
    key: "no",
    label: "No",
    width: "w-16",
  },
  {
    key: "id",
    label: "Unique ID",
    width: "w-30",
    render: (value) => <span className="text-gray-500">{value}</span>,
  },
  {
    key: "name",
    label: "User Name",
    width: "w-48 text-left",
    render: (value, row) => (
      <div className="flex items-center">
        <Avatar className="mr-3 h-8 w-8">
          <AvatarImage src={row.avatar || "/placeholder.svg"} alt={row.name} />
          <AvatarFallback className="text-xs">{getInitials(row.name)}</AvatarFallback>
        </Avatar>
        <span className="text-sm font-medium text-[#242424]">{value}</span>
      </div>
    ),
  },
  {
    key: "coins",
    label: "Coins",
    width: "w-20",
  },
  {
    key: "plan",
    label: "Plan",
    width: "w-16",
  },
  {
    key: "date",
    label: "Date",
    width: "w-24",
    render: (value) => <span className="text-gray-500">{value}</span>,
  },
  {
    key: "isBlocked",
    label: "Is Block",
    width: "w-26",
    render: (value) => <Switch checked={value} className="data-[state=checked]:bg-black" />,
  },
  {
    key: "info",
    label: "Info",
    width: "w-16",
    render: () => (
      <Button variant="ghost" size="sm" className="hover:text-blue-800">
        View
      </Button>
    ),
  },
  {
    key: "history",
    label: "History",
    width: "w-16",
    render: () => (
      <Button variant="ghost" size="sm" className="hover:text-blue-800">
        View
      </Button>
    ),
  },
];
