"use client";

import { Button } from "@/src/components/ui/button";
import * as z from "zod";

import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import StepIndicator from "./StepIndicator";
import { MoveRight } from "lucide-react";
import FilmDetails from "./FilmDetails";
import { defaultFormData, FilmFormData, filmSchema } from "@/src/schema/FilmList.schema";
// import { VideoUploadComponent } from "./video-upload/VideoUpload";
import { VideoUploadComponent } from "./video-upload/VideoUploadNew";
import { EditDetails } from "./edit-details/EditDetails";
import Confirmation from "./Confirmation";

interface FilmFormPageProps {
  onSave: (filmData: FilmFormData) => void;
  mode: string | null;
  initialData?: FilmFormData;
  onCancel?: () => void;
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

const FilmFormPage = ({ mode, onSave, initialData, onCancel }: FilmFormPageProps) => {
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
    if (mode === "edit" && initialData) {
      reset(initialData);
    } else if (mode === "add") {
      reset(defaultFormData);
    }
  }, [mode, initialData, reset]);

  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    }
    if (mode === "add") {
      reset(defaultFormData);
      setCurrentStep(0);
      setPreviousStep(0);
    }
  };

  type Inputs = z.infer<typeof filmSchema>;
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
    // console.log(currentStep, allValues);
    if (currentStep === steps.length - 2) {
      // console.log("here to submit");
      handleSubmit(processForm)();
      // console.log("after form submit");
    }

    const fields = steps[currentStep].fields;
    // console.log(fields);
    const output = await trigger(fields as FieldName[], { shouldFocus: true });
    // console.log(output, errors);
    if (!output) return;
    // console.log("here");
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
    <div className="mx-auto w-full">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">
          {mode === "add" ? "Add Film List" : "Edit Film List"}
        </h1>
        <div className="mt-6">
          <StepIndicator steps={steps} currentStepIndex={currentStep} />
        </div>
      </div>

      {/* Form Container */}
      <div className="rounded-lg border bg-white shadow-sm">
        <form onSubmit={handleSubmit(processForm)} className="flex h-full flex-col">
          {/* Form Content */}
          <div className="flex-1 space-y-4 p-3 md:p-6">
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
          className={`mt-auto flex flex-row gap-3 border-t bg-gray-50 px-6 py-4 ${
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

export default FilmFormPage;
