export const membershipCards = [
  {
    badge: "97% of users pick this",
    price: "6.99",
    originalPrice: "7.99",
    period: "week",
    discount: "-25%",
    duration: "1 week",
    showBadge: true,
  },
  {
    price: "99.99",
    originalPrice: "7.99",
    period: "year",
    discount: "-25%",
    duration: "1 year",
    showBadge: false,
  },
];

export const coinCards = [
  { coins: 100, price: 0.99, rewardCoins: 0 },
  { coins: 500, price: 0.99, rewardCoins: 50, bonus: "+10%" },
  { coins: 1000, price: 0.99, rewardCoins: 150, bonus: "+15%" },
  { coins: 2000, price: 0.99, rewardCoins: 1000, bonus: "+50%" },
];

export const paymentMethods = [
  {
    id: "card",
    icon: "/icons/card.png",
    iconAlt: "Card-icon",
    label: "Card",
  },
  {
    id: "google-pay",
    icon: "/icons/google.png",
    iconAlt: "Google Pay-icon",
    label: "Pay",
  },
];
