"use client";

import { Button } from "@/src/components/ui/button";
import { Card, CardContent } from "@/src/components/ui/card";

interface CongratulationsCardProps {
  onBackToDashboard?: () => void;
  onUploadAnother?: () => void;
}

export default function CongratulationsCard({
  onBackToDashboard,
  onUploadAnother,
}: CongratulationsCardProps) {
  return (
    <div className="flex items-center justify-center">
      <Card className="w-full border-0 p-0 shadow-none">
        <CardContent className="space-y-4 p-0 text-center">
          <div className="space-y-4 rounded-2xl border p-4">
            <h1 className="text-foreground text-2xl font-semibold">Congratulations!</h1>
            <div className="text-muted-foreground space-y-2">
              <p>Your video has been successfully submitted to the ReelShort.</p>
              <p>Thank you for participating!</p>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Button
              type="button"
              variant="outline"
              onClick={onBackToDashboard}
              className="rounded-3xl border-2 border-black bg-[#E7E6E6] p-5 text-black hover:bg-gray-50"
            >
              Back to Dashboard
            </Button>
            <Button
              type="button"
              onClick={onUploadAnother}
              className="rounded-3xl bg-black hover:bg-gray-800 border-2 border-black p-5"
            >Upload Another</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
