import React from 'react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '../../ui/hover-card';
import Link from 'next/link';
import { cn } from '@/src/lib/utils';

const CategoryPopup = ({itemName, isCategory}: {itemName:string, isCategory:boolean}) => {

    const categories = [
    { name: "Actors", href: "/categories" },
    { name: "Actresses", href: "/categories" },
    { name: "Identities", href: "/categories" },
    { name: "Story Beats", href: "/categories" },
  ]
    return (
        <HoverCard  openDelay={100} closeDelay={300}>
                    <HoverCardTrigger asChild>
                      <button
                        className={cn(
                          "text-base font-medium duration-200 flex flex-col items-center cursor-pointer",
                          isCategory ? "text-primary-rose" : "text-white",
                        )}
                      >
                        {itemName}
                         <span
      className={cn(
        "size-1 rounded-full mt-1",
        isCategory ? "bg-primary-rose" : "invisible"
      )}
    ></span>
                      </button>
                    </HoverCardTrigger>
                    <HoverCardContent
                      className="w-48 bg-[#16151A] rounded-2xl border-none p-0 shadow-xl relative before:content-[''] before:absolute before:-top-2 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-0 before:border-l-8 before:border-r-8 before:border-b-8 before:border-l-transparent before:border-r-transparent before:border-b-[#16151A]"
                      align="center"
                      sideOffset={8}
                    >
                      <div className="py-2">
                        {categories.map((category) => (
                          <Link
                            key={category.name}
                            href={category.href}
                            className="block px-4 py-3 text-white text-sm hover:bg-gray-800 transition-colors"
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