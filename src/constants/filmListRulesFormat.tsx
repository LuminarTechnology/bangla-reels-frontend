import { ReactNode } from "react";

export type Rule = {
  id: number | string;
  content: ReactNode;
};

export type FormatItem = {
  label: string;
  value: ReactNode;
};

export const filmListrulesData: Rule[] = [
  {
    id: 1,
    content: (
      <>
        All submissions must be <strong>100% original</strong>. Unlicensed edits,
        mashups, or copied content are not allowed.
      </>
    ),
  },
  {
    id: 2,
    content: (
      <>
        The following are{" "}
        <span className="font-semibold text-red-500">strictly prohibited</span>:
        explicit sexual content or nudity; graphic violence, blood, or self-harm;
        promotion of illegal drugs, weapons, or any unlawful behavior.
      </>
    ),
  },
  {
    id: 3,
    content: (
      <>
        All entries must be <strong>vertical</strong> videos (<strong>9:16</strong>{" "}
        aspect ratio) and between <strong>45–90</strong> seconds long.
        <p className="mt-1">
          Adding <strong>subtitles</strong> is highly encouraged!
        </p>
      </>
    ),
  },
  {
    id: 4,
    content: (
      <>
        You may upload between <strong>1 to 100 episodes</strong> per entry.
        Submitting 10 or more episodes makes you eligible for the{" "}
        <strong>Best Series Award</strong>. More episodes = more chances to stand
        out!
      </>
    ),
  },
];

export const filmListformatData: FormatItem[] = [
  { label: "Video Length", value: "45–90 seconds" },
  { label: "Video Format", value: "MP4, MOV" },
  { label: "Video Ratio", value: "9:16 vertical" },
  { label: "Video File Size", value: "Max 500MB" },
  { label: "Video Resolution", value: "≥ 540 × 940" },
  { label: "Episodes Per Entry", value: "Up to 100 episodes" },
  { label: "Cover Image Format", value: "JPG, 1080×1440, Max 5MB" },
];
