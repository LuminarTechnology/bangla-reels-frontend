import * as z from "zod";

// Ads Coin Reward Tab Schema
export const adsCoinRewardSchema = z.object({
  maxAds: z
    .string()
    .min(1, "Please provide the maximum number of ads per day")
    .refine((val) => !isNaN(parseInt(val, 10)) && parseInt(val, 10) > 0, {
      message: "Maximum ads must be a positive number",
    }),
  coinPerAd: z
    .string()
    .min(1, "Please provide the coins earned per ad")
    .refine((val) => !isNaN(parseInt(val, 10)) && parseInt(val, 10) > 0, {
      message: "Coins per ad must be a positive number",
    }),
  totalAdsView: z
    .string()
    .min(1, "Please provide the total ads viewed today")
    .refine((val) => !isNaN(parseInt(val, 10)) && parseInt(val, 10) >= 0, {
      message: "Total ads viewed must be a non-negative number",
    }),
});

export type adsCoinsRewardData = z.infer<typeof adsCoinRewardSchema>;


// Ads coin modal schema validation
export const adsCoinModalSchema = z.object({
  label: z.string().min(1, 'Label is required'),
  displayInterval: z.string().min(1, 'Display interval is required'),
  coinEarned: z
    .string()
    .min(1, 'Coins earned is required')
    .refine((val) => !isNaN(parseInt(val, 10)) && parseInt(val, 10) > 0, {
      message: 'Coins earned must be a positive number',
    }),
});

export type AdsCoinModalFormData = z.infer<typeof adsCoinModalSchema>;