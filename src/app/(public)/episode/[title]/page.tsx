import { ChevronLeft } from "lucide-react";
import React from "react";
import MuxPlayer from "@mux/mux-player-react";
import DetailsCard from "@/src/components/pages/episodes/DetailsCard";
import EpisodeSelection from "@/src/components/pages/episodes/EpisodeSelection";
import YouMayLike from "@/src/components/pages/episodes/YouMayLike";
import ReusableBreadcrumb from "@/src/components/common/ReusableBreadcrumb";

const defaultVideo = {
  title: "The Island",
  episode: "episode 01",
  description:
    "Stranded! Three years ago, in Maldives, a small town where the danger is beyond and covers six cities. When a young boy goes missing, his friends discover a hidden world known as The Upside Down. Alongside the boy, they discover that everything in this small town has become unexpected heroes.",
  playbackId: "OEGkD6ypFq1C02Rfoxpz2gjwERmDXNHNZITW6LylLFB4",
  genres: ["Action", "Horrible"],
};

const page = () => {
  return (
    <div className="p-6">
      <div className="flex h-screen flex-col gap-4 md:flex-row">
        {/* Video Player */}
        <div className="group relative flex-1 bg-black">
          <div className="absolute top-3 -left-1 z-10 hidden group-hover:block group-hover:delay-1000">
            <button className="flex cursor-pointer items-center text-3xl font-semibold text-white">
              <ChevronLeft size={32} className="mr-1 text-3xl" />
              {/* {defaultVideo.title} */}
            </button>
            {/* <div className="ml-8 text-xl text-white">{defaultVideo.episode}</div> */}
          </div>

          <div className="relative h-full w-full">
            <MuxPlayer
              playbackId={defaultVideo.playbackId}
              metadata={{
                video_id: "video-id-123456",
                video_title: `${defaultVideo.title} - ${defaultVideo.episode}`,
              }}
              streamType="on-demand"
              title={`${defaultVideo.title} - ${defaultVideo.episode}`}
              accentColor="#E83A57"
              style={{
                height: "100%",
                // width: "100%",
                objectFit: "cover",
              }}
              className="h-full"
            />
          </div>
        </div>

        {/* Sidebar */}
        <div className="scrollbar-hide overflow-y-auto pb-8 md:w-96">
          <ReusableBreadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Collateral Hearts", href: "/movie/Collateral Hearts" },
              { label: "Episode" },
            ]}
          />
          <div className="h-full">
            <div className="inline-block">
              <h1 className="text-primary-rose text-2xl font-bold">Details</h1>
              <div className="bg-primary-rose mx-auto mt-1 h-[3px] w-10"></div>
            </div>

            <DetailsCard description={defaultVideo.description} genres={defaultVideo.genres} />

            <EpisodeSelection />

            <YouMayLike />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
