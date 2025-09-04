import { z } from 'zod';

export const adminInfoSchema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  phoneNumber: z.string().min(1, 'Phone number is required'),
  email: z.string().email('Invalid email address').min(1, 'Email is required'),
});

export type AdminInfoFormData = z.infer<typeof adminInfoSchema>;