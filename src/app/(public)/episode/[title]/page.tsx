import { Button } from '@/src/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import React from 'react';
import MuxPlayer from '@mux/mux-player-react';
import DetailsCard from '@/src/components/episodes/DetailsCard';
import EpisodeSelection from '@/src/components/episodes/EpisodeSelection';
import YouMayLike from '@/src/components/episodes/YouMayLike';
const defaultVideo = {
  title:"The Island",
  episode: "episode 01",
  description: "Stranded! Three years ago, in Maldives, a small town where the danger is beyond and covers six cities. When a young boy goes missing, his friends discover a hidden world known as The Upside Down. Alongside the boy, they discover that everything in this small town has become unexpected heroes.",
  playbackId: "OEGkD6ypFq1C02Rfoxpz2gjwERmDXNHNZITW6LylLFB4",
  genres: ["Action", "Horrible"]
}


const page = () => {
    return (
        <div className='p-6'>
            <div className='flex gap-4 h-screen'>
                {/* Video Player */}
                <div className='bg-black flex-1 relative'>
                    <div className="absolute top-4 left-4 z-10  " >
              <button className="text-white text-3xl font-semibold flex items-center cursor-pointer">
                <ChevronLeft size={30} className="mr-1 text-3xl" />
                {defaultVideo.title}
                
              </button>
              <div className="ml-8 text-xl text-white">{defaultVideo.episode}</div>
            </div>

<div className="relative w-full h-full ">
            <MuxPlayer
              playbackId={defaultVideo.playbackId}
              metadata={{
                video_id: "video-id-123456",
                video_title: `${defaultVideo.title} - ${defaultVideo.episode}`,
              }}
              streamType="on-demand"
              style={{
                height: "100%",
                // width: "100%",
               
              }}
              className=" h-full"
            />
          </div>
            
                </div>

                {/* Sidebar */}
                <div className='w-96 overflow-y-auto pb-8'>
     <div className='h-full'>
                       <div className=' inline-block'>
  <h1 className="text-primary-rose text-2xl font-bold">Details</h1>
  <div className="bg-primary-rose mx-auto w-10 h-[3px] mt-1"></div>
</div>

<DetailsCard description={defaultVideo.description} genres={defaultVideo.genres} />

<EpisodeSelection/>

<YouMayLike />
     </div>
                </div>
            </div>
        </div>
    );
};

export default page;