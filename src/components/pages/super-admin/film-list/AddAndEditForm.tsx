"use client";

import { Button } from "@/src/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/src/components/ui/dialog";
import * as z from "zod";

import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import StepIndicator from "./StepIndicator";
import { MoveRight } from "lucide-react";
import FilmDetails from "./FilmDetails";
import { defaultFormData, FilmFormData, filmSchema } from "@/src/schema/FilmList.schema";
import { VideoUploadComponent } from "./video-upload/VideoUpload";
import { EditDetails } from "./edit-details/EditDetails";
import Confirmation from "./Confirmation";

interface FilmModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (filmData: FilmFormData) => void;
  mode: "add" | "edit";
  initialData?: FilmFormData;
}

const steps = [
  {
    id: "film-details",
    label: "Film Details",
    fields: [
      "type",
      "name",
      "category",
      "description",
      "maxAdsForFreeView",
      "poster",
      "banner",
      "isBanner",
      "isTrending",
      "isActive",
    ],
  },
  {
    id: "upload-episodes",
    label: "Upload Episodes",
    fields: ["videos"],
  },
  { id: "edit-details", label: "Edit Details", fields: ["editDetails"] },
  { id: "confirmation", label: "Confirmation" },
];

const AddAndEditForm = ({ open, mode, onOpenChange, onSave, initialData }: FilmModalProps) => {
  const [previousStep, setPreviousStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const {
    control,
    handleSubmit,
    reset,
    trigger,
    getValues,
    formState: { errors },
  } = useForm<FilmFormData>({
    resolver: zodResolver(filmSchema),
    defaultValues: defaultFormData,
    mode: "onChange",
  });

  useEffect(() => {
    if (open && mode === "edit" && initialData) {
      reset(initialData);
    } else if (open && mode === "add") {
      reset(defaultFormData);
    }
  }, [mode, initialData, open, reset]);

  const handleCancel = () => {
    onOpenChange(false);
    if (mode === "add") {
      reset(defaultFormData);
      setCurrentStep(0);
      setPreviousStep(0);
    }
  };

  type Inputs = z.infer<typeof filmSchema>;
  type FieldName = keyof Inputs;

  const processForm: SubmitHandler<Inputs> = (data) => {
    console.log("here");
    console.log("Form submitter with data: ", data);
    onSave(data);
    return true;
  };

  const next = async () => {
    const allValues = getValues();
    console.log(currentStep, allValues);
    if (currentStep === steps.length - 2) {
      console.log("here to submit");
      handleSubmit(processForm)();
      console.log("after form submit");
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
    onOpenChange(false);
    if (mode === "add") {
      reset(defaultFormData);
      setCurrentStep(0);
      setPreviousStep(0);
    }
  };
  const onUploadAnother = () => {
    reset(defaultFormData);
    setCurrentStep(0);
    setPreviousStep(0);
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(isOpen) => {
        if (!isOpen) {
          if (mode === "add") {
            reset(defaultFormData);
            setCurrentStep(0);
            setPreviousStep(0);
          }
        }
        onOpenChange(isOpen);
      }}
    >
      <DialogContent className="m-4 flex h-[90vh] max-h-[1050px] w-3xl flex-col p-0 sm:max-w-[978px] [&>button]:rounded-full [&>button]:border-2 [&>button]:border-gray-800 [&>button]:p-[2px]">
        <DialogHeader className="flex-shrink-0 px-4 pt-4 sm:px-6">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-lg font-medium">
              {mode === "add" ? "Add Film List" : "Edit Film List"}
            </DialogTitle>
          </div>
          <StepIndicator steps={steps} currentStepIndex={currentStep} />
        </DialogHeader>

        {/* Form Container */}
        <form onSubmit={handleSubmit(processForm)} className="flex min-h-0 flex-1 flex-col">
          {/* Scrollable Step Content */}
          <div className="min-h-0 flex-1 space-y-4 overflow-y-auto px-4 sm:px-6">
            {currentStep === 0 && <FilmDetails control={control} />}
            {currentStep === 1 && <VideoUploadComponent control={control} errors={errors.videos} />}
            {currentStep === 2 && <EditDetails control={control} />}
            {currentStep === 3 && (
              <Confirmation
                onBackToDashboard={onBackToDashboard}
                onUploadAnother={onUploadAnother}
              />
            )}
          </div>
        </form>
        {/* Bottom Actions */}
        <div
          className={`mt-auto flex flex-shrink-0 flex-col gap-3 border-t px-4 py-4 sm:flex-row sm:px-6 ${currentStep === steps.length - 1 ? "hidden" : ""}`}
        >
          {currentStep === 0 && (
            <Button
              type="button"
              variant="ghost"
              onClick={handleCancel}
              className="order-2 flex-1 rounded-2xl border sm:order-1"
            >
              Cancel
            </Button>
          )}
          {currentStep !== 0 && (
            <Button
              type="button"
              variant="ghost"
              onClick={prev}
              className="order-2 flex-1 rounded-2xl border sm:order-1"
            >
              Back
            </Button>
          )}
          <Button
            type="button"
            onClick={next}
            className="order-1 flex-1 rounded-2xl bg-black hover:bg-gray-800 sm:order-2"
          >
            Continue
            <MoveRight />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddAndEditForm;
