import z from "zod";

export const filmDetailsSchema = z.object({
  id: z.string(),
  type: z.enum(["WEB SERIES", "MOVIES"]),
  name: z.string().min(1, "Name is required"),
  category: z.string().min(1, "Category is required"),
  description: z.string().min(1, "Description is required"),
  maxAdsForFreeView: z.string().min(1, "Max ads for free view is required"),
  poster: z.any().nullable(),
  banner: z.any().nullable(),
  isBanner: z.boolean(),
  isTrending: z.boolean(),
  isActive: z.boolean(),
});

export const videoStatusSchema = z.enum([
  "pending",
  "uploading",
  "completed",
  "error",
  "unsupported",
  "processing"
]);

export const videoFileSchema = z.object({
  id: z.string(),
  videoId: z.string(),
  file: z.instanceof(File),
  status: videoStatusSchema,
  progress: z.number(),
  error: z.string().optional(),
  thumbnail: z.string().optional(),
  duration: z.string().optional(),
  resolution: z.string().optional(),
});

export const editDetailsSchema = z.object({
  videoId: z.string(),
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  tags: z.string().min(1, "Tag is required"),
});

export const filmSchema = filmDetailsSchema.extend({
  videos: z.array(videoFileSchema).min(1, "At least one video is required"),
  editDetails: z.array(editDetailsSchema),
});

export type filmDetailsSchema = z.infer<typeof filmDetailsSchema>;
export type VideoFileData = z.infer<typeof videoFileSchema>;
export type editDetailsData = z.infer<typeof editDetailsSchema>;
export type FilmFormData = z.infer<typeof filmSchema>;

export const defaultFormData: FilmFormData = {
  id: "",
  type: "WEB SERIES",
  name: "",
  category: "",
  description: "",
  maxAdsForFreeView: "",
  poster: null,
  banner: null,
  isBanner: true,
  isTrending: true,
  isActive: true,
  videos: [], 
  editDetails: [],
};