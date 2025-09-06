import z from "zod";

export const filmDetailsSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  coverImage: z.instanceof(File),
})

export const episodeStatusSchema = z.enum([ 
  "pending",
  "uploading",
  "completed",
  "error",
  "unsupported",
  "processing"
]);

export const episodeFileSchema = z.object({
  id: z.string(),
  videoId: z.string(),
  file: z.instanceof(File),
  status: episodeStatusSchema,
  progress: z.number(),
  error: z.string().optional(),
  thumbnail: z.string().optional(),
  duration: z.string().optional(),
  resolution: z.string().optional(),
});

export const episodeDetailsSchema = z.object({
  videoId: z.string(),
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  tags: z.string().min(1, "Tag is required"),
});

export const themeSchema = z.enum([
    "romance",
    "suspense",
    "reelshort fan adaptation",
    "beyond genres"
])

export const contestDataSchema = filmDetailsSchema.extend({
    videos: z.array(episodeFileSchema).min(1, "At least one video is required"),
    details: episodeDetailsSchema,
    theme: themeSchema,
})

export type FilmDetailsData = z.infer<typeof filmDetailsSchema>;
export type VideoFileData = z.infer<typeof episodeFileSchema>;
export type editDetailsData = z.infer<typeof episodeDetailsSchema>;
export type ContestData = z.infer<typeof contestDataSchema>;

export const defaultContestData: ContestData = {
  title: "",
  description: "",
  coverImage: new File([], ""),
  videos: [],
  details: {
    videoId: "",
    title: "",
    description: "",
    tags: "",
  },
  theme: "romance",
};