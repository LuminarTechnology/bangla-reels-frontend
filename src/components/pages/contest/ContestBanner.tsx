import React from "react";
import Image from "next/image";
import { Button } from "@/src/components/ui/button";
import { ChevronsRight, Info, Share, ListFilter } from "lucide-react";

import bannerImage from "../../../../public/images/contest/contestBanner.jpg";

const ContestBanner = () => {
  return (
    
    <section className="relative mb-6 md:mb-8 h-64 sm:h-80 lg:h-96 w-full overflow-hidden rounded-xl">
      <Image
        src={bannerImage}
        alt="Short video contest banner"
        placeholder="blur"
        quality={100}
        fill
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/10" />

      
      <div className="relative z-10 flex h-full items-end p-4 md:p-6">
        {/* Buttons Row */}
        <div className="flex w-full items-center justify-between">
          {/* Left Button */}
          <Button variant="danger" size="lg">
            <span>Enter the Contest</span>
            <ChevronsRight className="size-5" />
          </Button>

          {/* Right Buttons */}
          <div className="flex items-center gap-3">
            <Button variant="danger" size="icon">
              <ListFilter className="size-5" />
            </Button>
            <Button variant="danger" size="icon">
              <Info className="size-5" />
            </Button>
            <Button variant="danger" size="icon">
              <Share className="size-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContestBanner;