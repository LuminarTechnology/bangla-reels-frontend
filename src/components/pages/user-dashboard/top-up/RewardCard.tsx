import React from "react";

type RewardCardProps = {
  index: number;
  text: string;
};

const RewardCard: React.FC<RewardCardProps> = ({ index, text }) => {
  return (
    <div
      key={index}
      className="flex h-20 cursor-pointer items-center rounded-xl border border-[#7A7A7A] bg-black/10 p-5 shadow-md transition hover:border-red-500"
    >
      <span className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-red-500 font-bold text-white">
        {index + 1}
      </span>
      <p className="font-medium">{text}</p>
    </div>
  );
};

export default RewardCard;
