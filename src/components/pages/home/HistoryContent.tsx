import { ChevronRight, PlayCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface HistoryContentProps {
    historyItems: {
        id: number,
        title: string,
        episode: number,
        thumbnail: string,
        watchedProgress?: number
    }[],
    tabName: string,
    link:string
}
const HistoryContent = ({historyItems, tabName, link}: HistoryContentProps) => {
    return (
        <>
             {historyItems.length === 0 ? 
           (  
            <div className="flex flex-col items-center space-y-3">
                          <PlayCircle className="h-12 w-12 text-[#B3B1B0]" />
                          <p className="text-[#B3B1B0] text-sm">You haven't watched any videos yet.</p>
                        </div>
           )
             : historyItems.slice(0, 3).map((item) => (
                          <div
                            key={item.id}
                            className="relative  p-2 rounded-xl hover:bg-gray-900 cursor-pointer"
                          >
                            <div className="flex space-x-3">
                              <div className="relative">
                              <Image
                              src={item.thumbnail || "/placeholder.svg"}
                              alt={item.title}
                              width={69}
                              height={93}
                              className="w-[69px] h-[93px] rounded object-cover"
                            />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="text-white text-xl font-bold ">{item.title}</h3>
                              <p className="text-[#B3B1B0] text-base">Played to Episode {item.episode}</p>
                            </div>
                            </div>

                             {item?.watchedProgress && item.watchedProgress > 0 && (
            <div className="absolute bottom-1 left-1.5 h-1 w-full bg-gray-600">
              <div className="h-1 bg-red-500" style={{ width: `${item.watchedProgress}%` }} />
            </div>
          )}
                          </div>
                        ))}
                       {historyItems.length >0 && (
                         <div className="pt-2 flex justify-center">
                          <Link href={link} className="text-primary-rose text-sm font-medium hover:text-primary-rose-hover flex items-center">
                            More
                            <ChevronRight className="w-4 h-4 ml-1" />
                          </Link>
                        </div>
                       )}
        </>
    );
};

export default HistoryContent;