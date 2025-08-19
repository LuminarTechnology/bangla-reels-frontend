import * as z from "zod";

export const feedbackSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  feedback: z.string().min(10, "Feedback must be at least 10 characters long"),
  pictures: z.array(z.instanceof(File)).optional(),
});

export type FeedbackFormData = z.infer<typeof feedbackSchema>;
