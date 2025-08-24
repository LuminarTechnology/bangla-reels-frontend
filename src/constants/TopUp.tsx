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

export const topUpDetails = {
  rewards_and_free_coins: [
    "Watch 1 Ad = 10 Coins",
    "Daily Login = 5 Coins",
    "Invite a Friend = 20 Coins",
    "Complete Special Tasks = Bonus Coins"
  ],
  tips: [
    {
      title: "1. Coin Packages with Price Tags:",
      packages: [
        { coins: 50, price: 1 },
        { coins: 100, price: 2 },
        { coins: 500, price: 8 },
        { coins: 1000, price: 15 },
        { coins: 2000, price: 25 }
      ]
    },
    "2. Reelshort features both free and paid content for everyone.",
    "3. Paid content can be unlocked using coins or by subscribing to a membership. Membership-only content can only be accessed after subscribing to a membership.",
    "4. Both the coins and the reward coins will never expire.",
    "5. Coins will be used first when unlocking episodes. If the amount is insufficient, reward coins will automatically be used.",
    "6. During the subscription period, you will have unlimited access to all the series on DramaBox.",
    "7. If you have any other questions, please reach out to our online customer service via 'Profile' → 'Help & feedback'."
  ]
};

