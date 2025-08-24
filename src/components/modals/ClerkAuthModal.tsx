import React from "react";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "../ui/dialog";

type ClerkAuthModalProps = {
  button: React.ReactNode;
  authComponent: React.ReactNode;
};

const ClerkAuthModal: React.FC<ClerkAuthModalProps> = ({ button, authComponent }) => {
  return (
    <Dialog>
      {/* Trigger Button */}
      <DialogTrigger asChild>{button}</DialogTrigger>
      <DialogTitle></DialogTitle>
      {/* Completely Unstyled Modal */}
      <DialogContent className="flex max-w-none items-center justify-center border-none bg-transparent p-10 shadow-none [&>button]:hidden">
        {authComponent}
      </DialogContent>
    </Dialog>
  );
};

export default ClerkAuthModal;
