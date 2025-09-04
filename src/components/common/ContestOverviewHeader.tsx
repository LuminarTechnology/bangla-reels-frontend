import Image from "next/image";
import React from "react";

interface OverviewHeaderProps {
  title: string;
}

export const OverviewHeader: React.FC<OverviewHeaderProps> = ({ title }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <Image
        src='/images/contest/contest.png'
        alt="contest logo"
        width={80}
        height={24}
        className=""
      />
      <h2 className="uppercase text-2xl text-[#FFFAFA] font-bold">{title}</h2>
    </div>
  );
};