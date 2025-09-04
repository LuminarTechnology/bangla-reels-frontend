export interface MyEntryCardProps {
  title: string;
  poster: string;
  status: "Approved" | "Pending" | "Rejected";
  theme: string;
  uploadedOn: string;
  reviewTimeLeft?: string;
  reason?: string;
  bookmarks?: string;
  likes?: string;
  shares?: string;
}

const myEntriesData: MyEntryCardProps[] = [
  {
    title: "Entry 3 - Haunted Streets",
    poster: "/images/contest/GalleryofContestcardPoster.png",
    status: "Pending",
    theme: "Horror",
    uploadedOn: "Aug 23, 2025",
    reviewTimeLeft: "24 hour",
  },
  {
    title: "Entry 2 - Summer Nights",
    poster: "/images/contest/GalleryofContestcardPoster.png",
    status: "Approved",
    theme: "Romance",
    uploadedOn: "Aug 23, 2025",
    bookmarks: "866k",
    likes: "866k",
    shares: "866k",
  },
  {
    title: "Entry 1 - Haunted Streets",
    poster: "/images/contest/GalleryofContestcardPoster.png",
    status: "Rejected",
    theme: "Horror",
    uploadedOn: "Aug 23, 2025",
    reason: "Video resolution too low (480p).",
  },
];

export default myEntriesData;
