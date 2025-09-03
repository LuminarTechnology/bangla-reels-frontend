import React from "react";
import { Button } from "@/src/components/ui/button";
import { CircleCheckBig, CircleX } from "lucide-react";

const PaymentConfirmationModal = () => {
  return (
    <div className="relative mx-auto w-full max-w-[680px] rounded-2xl bg-[#0F0828] p-12 text-white">
      <button className="absolute top-4 right-4 flex items-center justify-center size-8 rounded-full bg-black/50 transition-colors hover:bg-black/80">
        <CircleX className="size-5 text-red-500" />
      </button>
      <div className="flex flex-col items-center gap-12 text-center">
        <CircleCheckBig className="size-[110px] text-red-500" />

        {/* Text container */}
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-3xl font-bold">Payment Confirmation</h1>
          <p className="max-w-md text-gray-400">
            Click Next to unlock the episode after successful payment. Payment
            information will be sent to your email address.
          </p>
        </div>
        <Button variant="danger" size="lg" className="px-12">
          Done
        </Button>
      </div>
    </div>
  );
};

export default PaymentConfirmationModal;