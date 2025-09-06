import { cn } from "@/src/lib/utils";
import { Check } from "lucide-react";

interface Step {
  label: string;
  id?: string;
}

interface StepperProps {
  steps: Step[];
  currentStepIndex: number;
  className?: string;
  theme?: "dashboard" | "contest";
}

export default function StepIndicator({ steps, currentStepIndex, className, theme }: StepperProps) {
  return (
    <div className="mx-auto mt-2 flex w-full items-center">
      {steps.map((step, index) => {
        const isCompleted = index < currentStepIndex || currentStepIndex === steps.length - 1;
        const isCurrent = index === currentStepIndex;
        const isUpcoming = index > currentStepIndex;

        return (
          <div key={step.id || index} className="relative flex flex-1 flex-col items-center">
            {/* Left line (including before first step) */}
            <div
              className={cn(
                "absolute top-3 left-0 h-0.5 w-1/2 border-t-2 border-dotted md:top-4",
                index <= currentStepIndex
                  ? theme === "contest"
                    ? "border-primary-rose"
                    : "border-black"
                  : "border-gray-300"
              )}
              style={{ width: "calc(50% - 16px)" }}
            />

            {/* Right line (including after last step) */}
            <div
              className={cn(
                "absolute top-3 right-0 h-0.5 w-1/2 border-t-2 border-dotted md:top-4",
                index <= currentStepIndex
                  ? theme === "contest"
                    ? "border-primary-rose"
                    : "border-black"
                  : "border-gray-300"
              )}
              style={{ width: "calc(50% - 16px)" }}
            />

            {/* Step Circle */}
            <div
              className={cn(
                "z-10 flex h-6 w-6 items-center justify-center rounded-full border-2 md:h-8 md:w-8",
                {
                  [theme === "contest"
                    ? "border-primary-rose bg-primary-rose text-white"
                    : "border-black bg-black text-white"]: isCompleted || isCurrent,
                  "border-gray-400 bg-gray-400 text-white": isUpcoming,
                }
              )}
            >
              <Check className={`${isCompleted ? "text-white" : "text-transparent"}`} />
            </div>

            {/* Label */}
            <span
              className={cn("mt-1 text-sm font-medium whitespace-nowrap md:mt-2 md:text-base", {
                [theme === "contest" ? "text-primary-rose" :"text-black"]: isCompleted || isCurrent,
                "text-gray-400": isUpcoming,
              })}
            >
              {step.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
