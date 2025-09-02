export interface currencyDataTypes {
  id: string;
  no: string;
  name: string;
  symbol: string;
  currencyCode: string;
  countryCode: string;
  default: boolean;
  date: string;
}

export const currencyData: currencyDataTypes[] = [
  {
    id: "1",
    no: "001",
    name: "Dollar",
    symbol: "$",
    currencyCode: "USD",
    countryCode: "US",
    default: true,
    date: "2025-09-02"
  },
  {
    id: "2",
    no: "002",
    name: "Taka",
    symbol: "৳",
    currencyCode: "BDT",
    countryCode: "BD",
    default: false,
    date: "2025-09-02"
  },
  {
    id: "3",
    no: "003",
    name: "Euro",
    symbol: "€",
    currencyCode: "EUR",
    countryCode: "EU",
    default: false,
    date: "2025-09-02"
  },
  {
    id: "4",
    no: "004",
    name: "Pound",
    symbol: "£",
    currencyCode: "GBP",
    countryCode: "GB",
    default: false,
    date: "2025-09-02"
  },
  {
    id: "5",
    no: "005",
    name: "Yen",
    symbol: "¥",
    currencyCode: "JPY",
    countryCode: "JP",
    default: false,
    date: "2025-09-02"
  },
  {
    id: "6",
    no: "006",
    name: "Rupee",
    symbol: "₹",
    currencyCode: "INR",
    countryCode: "IN",
    default: false,
    date: "2025-09-02"
  },
  {
    id: "7",
    no: "007",
    name: "Real",
    symbol: "R$",
    currencyCode: "BRL",
    countryCode: "BR",
    default: false,
    date: "2025-09-02"
  },
  {
    id: "8",
    no: "008",
    name: "Canadian Dollar",
    symbol: "C$",
    currencyCode: "CAD",
    countryCode: "CA",
    default: false,
    date: "2025-09-02"
  }
];