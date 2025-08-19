import React from 'react';
import ThumbnailCard from './ThumbnailCard';

const YouMayLike = () => {
    return (
        <div className='bg-[#16151A] w-full p-4 rounded-2xl mt-6'>
            <h1 className="text-white text-2xl font-semibold mb-6">You may like</h1>

            <div className="flex flex-col gap-4 ">
              {/* Map through recommended videos */}
              {Array.from({ length: 5 }).map((_, index) => (
               <ThumbnailCard description='Stranger Things takes you to Hawkins, a small town where the strange is normal and secrets run deep. When a young boy goes missing, his friend...' key={index} />
              ))}
            </div>
        </div>
    );
};

export default YouMayLike;