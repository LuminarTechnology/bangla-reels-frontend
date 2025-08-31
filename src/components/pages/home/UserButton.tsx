import React from "react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../../ui/hover-card";
import { Button } from "../../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";
import { User } from "lucide-react";
import { Separator } from "../../ui/separator";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";

const UserButton = () => {
  const { user, isSignedIn } = useUser();
  return (
    <div>
      <HoverCard openDelay={0} closeDelay={100}>
        <HoverCardTrigger asChild>
          <Link href={"/dashboard"} className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="relative size-8 rounded-full">
              <Avatar className="size-8">
                <AvatarImage src={user?.imageUrl} alt={user?.fullName || "user"} />
                <AvatarFallback>
                  <User className="size-4" />
                </AvatarFallback>
              </Avatar>
            </Button>
          </Link>
        </HoverCardTrigger>
        <HoverCardContent
          className="w-64 border-none bg-[#0F0828] p-0 shadow-lg shadow-black before:absolute before:-top-2 before:right-1 before:h-0 before:w-0 before:-translate-x-1/2 before:border-r-8 before:border-b-8 before:border-l-8 before:border-r-transparent before:border-b-[#16151A] before:border-l-transparent before:content-['']"
          align="end"
          sideOffset={8}
        >
          <div className="space-y-3 p-4">
            {/* User Info Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={user?.imageUrl} alt={user?.fullName || "Guest"} />
                  <AvatarFallback className="bg-gray-600">
                    <User className="h-4 w-4 text-white" />
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-white">Guest</p>
                </div>
              </div>
              {!isSignedIn && (
                <Link href={"/sign-in"}>
                  <Button variant="outline" size="sm" className="text-xs">
                    Log in
                  </Button>
                </Link>
              )}
            </div>

            {/* Coins and Bonus */}
            <div className="flex items-center space-x-4 py-2">
              <div className="flex items-center space-x-2">
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <span className="text-sm font-medium text-white">0 Coins</span>
              </div>
              <Separator orientation="vertical" className="h-4 bg-red-900" />
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-white">0 Bonus</span>
              </div>
            </div>

            {/* Top Up Button */}
            <Link href={"/dashboard/top-up"}>
              <Button variant="danger" className="w-full" size="sm">
                Top Up
              </Button>
            </Link>
          </div>
        </HoverCardContent>
      </HoverCard>
      {/* <LoginModal
        open={loginDialogOpen}
        onOpenChange={setLoginDialogOpen}
        onFormSubmit={() => setLoginDialogOpen(false)}
      /> */}
    </div>
  );
};

export default UserButton;
