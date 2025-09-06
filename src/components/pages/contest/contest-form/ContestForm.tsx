"use client";

import { Button } from "@/src/components/ui/button";
import * as z from "zod";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import StepIndicator from "@/src/components/pages/super-admin/film-list/StepIndicator";
import { MoveRight } from "lucide-react";
import { VideoUploadComponent } from "@/src/components/pages/super-admin/film-list/video-upload/VideoUpload";
import { EditDetails } from "@/src/components/pages/super-admin/film-list/edit-details/EditDetails";
import Confirmation from "@/src/components/pages/super-admin/film-list/Confirmation";
import { ContestData, contestDataSchema, defaultContestData } from "@/src/schema/contest.schema";

interface ContestFormPageProps {
  onSave: (contestData: ContestData) => void;
  initialData?: ContestData;
  onCancel?: () => void;
}

const steps = [
  {
    id: "upload-episodes",
    label: "Upload Episodes",
    fields: ["videos"],
  },
  {
    id: "film-details",
    label: "Film Details",
    fields: ["title", "description", "coverImage"],
  },
  { id: "edit-details", label: "Edit Details", fields: ["details"] },
  { id: "confirmation", label: "Confirmation" },
];

const ContestFormPage = ({ onSave, initialData, onCancel }: ContestFormPageProps) => {
  const [previousStep, setPreviousStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const {
    control,
    handleSubmit,
    reset,
    trigger,
    getValues,
    formState: { errors },
  } = useForm<ContestData>({
    resolver: zodResolver(contestDataSchema),
    defaultValues: defaultContestData,
    mode: "onChange",
  });

  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    }
    reset(defaultContestData);
    setCurrentStep(0);
    setPreviousStep(0);
  };

  type Inputs = z.infer<typeof contestDataSchema>;
  type FieldName = keyof Inputs;

  const processForm: SubmitHandler<Inputs> = (data) => {
    // console.log("here");
    // console.table(data);
    // console.table(data.videos);
    // console.table(data.editDetails);
    onSave(data);
    return true;
  };

  const next = async () => {
    const allValues = getValues();
    console.log(currentStep, allValues);
    if (currentStep === steps.length - 2) {
      // console.log("here to submit");
      handleSubmit(processForm)();
      // console.log("after form submit");
    }

    const fields = steps[currentStep].fields;
    console.log(fields);
    const output = await trigger(fields as FieldName[], { shouldFocus: true });
    console.log(output, errors);
    if (!output) return;
    console.log("here");
    if (currentStep < steps.length - 1) {
      setPreviousStep(currentStep);
      setCurrentStep((step) => step + 1);
    }
  };

  const prev = () => {
    if (currentStep > 0) {
      setPreviousStep(currentStep);
      setCurrentStep((step) => step - 1);
    }
  };

  const onBackToDashboard = () => {
    if (onCancel) {
      onCancel();
    }
    reset(defaultContestData);
    setCurrentStep(0);
    setPreviousStep(0);
  };

  const onUploadAnother = () => {
    reset(defaultContestData);
    setCurrentStep(0);
    setPreviousStep(0);
  };
  
  return (
    <div className="mx-auto w-full">
      {/* Header */}
      <div className="">
        <div className="">
          <StepIndicator steps={steps} currentStepIndex={currentStep} theme="contest"/>
        </div>
      </div>

      {/* Form Container */}
      <div className="min-h-[600px] bg-[#0F0828] rounded-2xl my-10">
        <form onSubmit={handleSubmit(processForm)} className="flex h-full flex-col">
          {/* Form Content */}
          <div className="flex-1 space-y-4 p-3 md:p-6">
            {currentStep === 0 && <VideoUploadComponent control={control} errors={errors.videos} theme="contest"/>}
            {currentStep === 1 && <EditDetails control={control} />}
            {currentStep === 2 && (
              <Confirmation
                onBackToDashboard={onBackToDashboard}
                onUploadAnother={onUploadAnother}
              />
            )}
          </div>
        </form>

        {/* Bottom Actions */}
        <div
          className={`mt-auto flex flex-row gap-3 border-t bg-transparent px-6 py-4 ${
            currentStep === steps.length - 1 ? "hidden" : ""
          }`}
        >
          {currentStep === 0 && (
            <Button
              type="button"
              variant="ghost"
              onClick={handleCancel}
              className="flex-1 rounded-2xl border"
            >
              Cancel
            </Button>
          )}
          {currentStep !== 0 && (
            <Button
              type="button"
              variant="ghost"
              onClick={prev}
              className="flex-1 rounded-2xl border"
            >
              Back
            </Button>
          )}
          <Button
            type="button"
            onClick={next}
            className="flex-1 rounded-2xl bg-black hover:bg-gray-800"
          >
            Continue
            <MoveRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContestFormPage;
