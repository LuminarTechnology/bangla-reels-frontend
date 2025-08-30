import React from 'react';
import Image from 'next/image';

interface ContestAwardCardProps {
  img: string;
  title: string;
}

const ContestAwardCard: React.FC<ContestAwardCardProps> = ({ img, title }) => {
  return (
    <div className='space-y-3 w-[45%] sm:w-fit max-w-[230px]'>
      <Image
        src={img}
        alt={title}
        width={188}
        height={280}
        className="rounded-lg object-cover w-full sm:w-[230px]"
      />
      <h3 className='text-base font-bold text-[#FFFAFA] text-center'>{title}</h3>
    </div>
  );
};

export default ContestAwardCard;