import { z } from "zod";

export const adminSettingsSchema = z.object({
  // General Tab
  privateKeyJson: z.string().optional(),
  privacyPolicyLink: z.string().optional(),
  termsAndCondition: z.string().optional(),
  resentApiKey: z.string().optional(),
  freeEpisodesForNonVip: z.union([z.number(), z.literal("")]).optional(),
  episodesDurationShorts: z.union([z.number(), z.literal("")]).optional(),
  supportEmail: z.string().optional(),
  local: z.boolean().optional().default(false),
  digitalOceanSpace: z.boolean().optional().default(false),
  
  // Payment Tab
  razorPay: z.boolean().optional().default(false),
  razorPayId: z.string().optional(),
  razorSecretKey: z.string().optional(),
  srtipePay: z.boolean().optional().default(false),
  stripePublishableKey: z.string().optional(),
  stripeSecretKey: z.string().optional(),
  googlePay: z.boolean().optional().default(false),
  flutterWave: z.boolean().optional().default(false),
  flutterWaveId: z.string().optional(),
  
  // Ads Tab
  androidGoogleReward: z.string().optional(),
  androidGoogleNative: z.string().optional(),
  isoGoogleReward: z.string().optional(),
  isoGoogleNative: z.string().optional(),
});

export type AdminSettingsType = z.infer<typeof adminSettingsSchema>;