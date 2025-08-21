"use client";
import React, { ReactNode } from "react";
import { LogOut } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { toast } from "sonner";

const LogoutModal = ({ button }: { button: ReactNode }) => {
  const handleLogout = () => {
    // Add your logout logic here
    toast.success("User logged out");
  };

  return (
    <div className="">
      <AlertDialog>
        {/* Trigger Button */}
        <AlertDialogTrigger asChild className="cursor-pointer">
          {button}
        </AlertDialogTrigger>

        {/* Modal Content */}
        <AlertDialogContent className="w-96 rounded-3xl border-gray-900 bg-gray-950 p-8">
          <AlertDialogHeader className="space-y-6 text-center">
            <AlertDialogTitle className="text-center text-4xl leading-relaxed font-bold text-white">
              Are you sure to logout
            </AlertDialogTitle>
            <AlertDialogDescription className="sr-only">
              This action will log you out of your account.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter className="mx-auto flex items-center justify-center gap-5 sm:flex-col sm:space-y-3 md:flex-row md:space-y-0">
            <AlertDialogCancel className="mt-0 rounded-full border-none bg-white px-6 py-3 font-medium text-gray-900 hover:bg-gray-100">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleLogout}
              className="flex items-center justify-center gap-2 rounded-full bg-red-500 px-6 py-3 font-medium text-white hover:bg-red-600"
            >
              <LogOut className="h-4 w-4" />
              Log Out
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default LogoutModal;
