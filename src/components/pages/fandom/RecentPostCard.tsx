import Image from "next/image";
import React from "react";

type RecentPostCardProps = {
  image: string;
  title: string;
  date: string;
};

const RecentPostCard = ({ image, title, date }: RecentPostCardProps) => {
  return (
    <div className="flex space-x-3">
      <Image
        src={image}
        alt="Recent post"
        width={100}
        height={100}
        className="rounded object-cover"
      />
      <div>
        <h4 className="text-sm leading-tight font-medium text-gray-900">{title}</h4>
        <p className="mt-1 text-xs text-gray-500">{date}</p>
      </div>
    </div>
  );
};

export default RecentPostCard;
