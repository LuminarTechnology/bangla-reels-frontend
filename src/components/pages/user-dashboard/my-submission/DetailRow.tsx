import { statusVariants } from "@/src/components/ui/button";
import { cn } from "@/src/lib/utils";

export const DetailRow = ({ label, value, status }: { label: string; value: string; status?: "Approved" | "Pending" | "Rejected" }) => (
  <>
    <h4 className="text-[#FFFAFA] font-semibold">{label}</h4>
    <p className="text-[#FFFAFA] font-semibold mx-2">:</p>
    <h4 className={cn("text-[#FFFAFA] font-semibold", label === "Review Status" && statusVariants({ status }))}>
      {value}
    </h4>
  </>
);