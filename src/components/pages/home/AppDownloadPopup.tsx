import React from "react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../../ui/hover-card";
import { Button } from "../../ui/button";
import {  QrCode, Smartphone } from "lucide-react";
import Image from "next/image";

const AppDownloadPopup = () => {
  return (
    <HoverCard openDelay={0} closeDelay={100}>
      <HoverCardTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="h-10 w-10 rounded-full text-white hover:bg-transparent hover:text-gray-100"
        >
          <Smartphone className="h-4 w-4" />
          App
        </Button>
      </HoverCardTrigger>
      <HoverCardContent
        className="relative w-96 rounded-2xl border-none bg-[#16151A] p-0 shadow-xl before:absolute before:-top-2 before:right-1 before:h-0 before:w-0 before:-translate-x-1/2 before:border-r-8 before:border-b-8 before:border-l-8 before:border-r-transparent before:border-b-[#16151A] before:border-l-transparent before:content-['']"
        align="end"
        sideOffset={8}
      >
        <div className="flex items-start justify-between p-6">
          <div className="flex flex-col space-y-4">
            {/* Header Text */}
            <div>
              <h3 className="text-xl font-medium text-white">Scan QR code to</h3>
              <h3 className="text-xl font-medium text-white">download ReelShort App</h3>
            </div>

            {/* Download Icons and Text */}
            <div className="flex flex-col items-start space-y-2">
              <div className="flex items-center  gap-1 text-gray-300">
                <div className="relative">
                  <Image
                    src="/icons/playstore.png"
                    alt="android icon"
                    width={4}
                    height={4}
                    className="size-4"
                  />
                </div>
                <div className="relative">
                  <Image
                    src="/icons/app-store.png"
                    alt="apple icon"
                    width={4}
                    height={4}
                    className="size-4"
                  />
                </div>
              </div>
              <p className="text-xs text-[#B3B1B0]">Download on iOS or Android</p>
            </div>
          </div>

          {/* QR Code */}
          <div className="rounded bg-white p-2">
            <div className=" h-30 w-30 items-center ">
              <QrCode className="h-30 w-30 text-gray-400" />
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default AppDownloadPopup;
