import React from "react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../../ui/hover-card";
import Link from "next/link";
import { cn } from "@/src/lib/utils";
import { useLocale } from "next-intl";

const CategoryPopup = ({
  itemName,
  isCategory,
  lang,
}: {
  itemName: string;
  isCategory: boolean;
  lang: string;
}) => {
  const categories = [
    { name: "Actors", href: "/categories" },
    { name: "Actresses", href: "/categories" },
    { name: "Identities", href: "/categories" },
    { name: "Story Beats", href: "/categories" },
  ];

  return (
    <HoverCard openDelay={100} closeDelay={300}>
      <HoverCardTrigger asChild>
        <button
          className={cn(
            "flex cursor-pointer flex-col items-center text-base font-medium duration-200",
            isCategory ? "text-primary-rose" : "text-white"
          )}
        >
          {itemName}
          <span
            className={cn("mt-1 size-1 rounded-full", isCategory ? "bg-primary-rose" : "invisible")}
          ></span>
        </button>
      </HoverCardTrigger>
      <HoverCardContent
        className="relative w-48 overflow-hidden rounded-2xl border-none bg-[#0F0828] p-0 shadow-lg shadow-black before:absolute before:-top-2 before:left-1/2 before:h-0 before:w-0 before:-translate-x-1/2 before:border-r-8 before:border-b-8 before:border-l-8 before:border-r-transparent before:border-b-[#16151A] before:border-l-transparent before:content-['']"
        align="center"
        sideOffset={8}
      >
        <div>
          {categories.map((category) => (
            <Link
              key={category.name}
              href={`/${lang}/${category.href}`}
              className="block px-4 py-3 text-sm text-white transition-colors hover:bg-[#080414]"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default CategoryPopup;
