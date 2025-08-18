import * as z from "zod";

export const commentSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  comment: z.string().min(10, "Feedback must be at least 10 characters long"),
  name: z.string({ error: "Please enter your name" }),
  website: z.string().optional(),
});

export type CommentFormData = z.infer<typeof commentSchema>;
