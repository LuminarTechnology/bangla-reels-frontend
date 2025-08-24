"use client";

import { Button } from "@/src/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/src/components/ui/dialog";
import * as z from "zod";



import { useEffect} from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormRadioGroupField } from "@/src/components/forms/FormRadioGroupField";
import { FormInputField } from "@/src/components/forms/FormInputField";
import { FormToggleSwitchField } from "@/src/components/forms/FormToggleSwitchField";
import { FormSelectField } from "@/src/components/forms/FormSelectField";
import { FormFileUploadField } from "@/src/components/forms/FormFileUploadField";

interface FilmModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (filmData: FilmFormData) => void;
  mode: "add" | "edit";
  initialData?: FilmFormData;
}

export interface FilmFormData {
  id?: string;
  type: "WEB SERIES" | "MOVIES";
  name: string;
  category: string;
  description: string;
  maxAdsForFreeView: string;
  poster: File | null;
  banner: File | null;
  isBanner: boolean;
  isTrending: boolean;
  isActive: boolean;
}

const filmSchema = z.object({
  type: z.enum(["WEB SERIES", "MOVIES"]),
  name: z.string().min(1, "Name is required"),
  category: z.string().min(1, "Category is required"),
  description: z.string().min(1, "Description is required"),
  maxAdsForFreeView: z.string().min(1, "Max ads for free view is required"),
  poster: z.any().nullable(),
  banner: z.any().nullable(),
  isBanner: z.boolean(),
  isTrending: z.boolean(),
  isActive: z.boolean(),
});
const defaultFormData: FilmFormData = {
  type: "WEB SERIES",
  name: "",
  category: "",
  description: "",
  maxAdsForFreeView: "",
  poster: null,
  banner: null,
  isBanner: true,
  isTrending: true,
  isActive: true,
};

const AddAndEditFilmModal = ({ open, mode, onOpenChange, onSave, initialData }: FilmModalProps) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FilmFormData>({
    resolver: zodResolver(filmSchema),
    defaultValues: defaultFormData,
  });

  useEffect(() => {
    if (mode === "edit" && initialData) {
      reset(initialData);
    } else {
      reset(defaultFormData);
    }
  }, [mode, initialData, open]);

  const onSubmit = (data: FilmFormData) => {
    onSave(data);
    onOpenChange(false);
    if (mode === "add") {
      reset(defaultFormData);
    }
  };

  const handleCancel = () => {
    onOpenChange(false);
    if (mode === "add") {
      reset(defaultFormData);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="m-4 flex h-[90vh] max-h-[600px] w-3xl flex-col p-0 sm:max-w-[800px] [&>button]:rounded-full [&>button]:border-2 [&>button]:border-gray-800 [&>button]:p-[2px]">
        <DialogHeader className="flex-shrink-0 px-4 py-4 sm:px-6">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-lg font-medium">
              {mode === "add" ? "Add Film List" : "Edit Film List"}
            </DialogTitle>
          </div>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="flex min-h-0 flex-1 flex-col">
          <div className="min-h-0 flex-1 space-y-4 overflow-y-auto px-4 py-4 sm:space-y-6 sm:px-6">
            <FormRadioGroupField
              name="type"
              control={control}
              label="Type"
              className="flex flex-row"
              options={[
                { label: "WEB SERIES", value: "WEB SERIES" },
                { label: "MOVIES", value: "MOVIES" },
              ]}
            />

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <FormInputField
                name="name"
                control={control}
                label="Name"
                placeholder="Enter name"
                className="rounded-2xl"
                colorScheme={{
                  background: "bg-white",
                  text: "text-black",
                  placeholder: "placeholder-gray-500",
                  border: "border-gray-300",
                  focusBorder: "focus:border-black",
                  focusRing: "focus:ring-1 focus:ring-black",
                  label: "text-black",
                  errorBorder: "border-red-500",
                  errorText: "text-red-500",
                }}
              />

              <FormSelectField
                name="category"
                control={control}
                label="Category"
                placeholder="Select Category"
                options={[
                  { label: "Action", value: "action" },
                  { label: "Drama", value: "drama" },
                  { label: "Comedy", value: "comedy" },
                ]}
                className="rounded-2xl"
              />
            </div>

            <FormInputField
              name="description"
              control={control}
              label="Description"
              placeholder="Enter description"
              as="textarea"
              colorScheme={{
                background: "bg-white",
                text: "text-black",
                placeholder: "placeholder-gray-500",
                border: "border-gray-300",
                focusBorder: "focus:border-black",
                focusRing: "focus:ring-1 focus:ring-black",
                label: "text-black",
                errorBorder: "border-red-500",
                errorText: "text-red-500",
              }}
            />

            <FormInputField
              name="maxAdsForFreeView"
              control={control}
              label="Max Ads For Free View"
              placeholder="Enter max ads"
              type="number"
              className="rounded-2xl"
              colorScheme={{
                background: "bg-white",
                text: "text-black",
                placeholder: "placeholder-gray-500",
                border: "border-gray-300",
                focusBorder: "focus:border-black",
                focusRing: "focus:ring-1 focus:ring-black",
                label: "text-black",
                errorBorder: "border-red-500",
                errorText: "text-red-500",
              }}
            />

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <FormFileUploadField
                name="poster"
                control={control}
                label="Poster"
                accept="image/*"
                buttonText="Choose File"
                placeholder="No file chosen"
              />
              <FormFileUploadField
                name="banner"
                control={control}
                label="Banner"
                accept="image/*"
                buttonText="Choose File"
                placeholder="No file chosen"
              />
            </div>

            <div className="space-y-4">
              <FormToggleSwitchField
                name="isBanner"
                control={control}
                label="Is Banner"
                labelClassName="flex-row-reverse justify-between"
              />
              <FormToggleSwitchField
                name="isTrending"
                control={control}
                label="Is Trending"
                labelClassName="flex-row-reverse justify-between"
              />
              <FormToggleSwitchField
                name="isActive"
                control={control}
                label="Is Active"
                labelClassName="flex-row-reverse justify-between"
              />
            </div>
          </div>

          <div className="flex flex-shrink-0 flex-col gap-3 border-t px-4 py-4 sm:flex-row sm:px-6">
            <Button
              type="button"
              variant="ghost"
              onClick={handleCancel}
              className="order-2 flex-1 rounded-2xl border sm:order-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="order-1 flex-1 rounded-2xl bg-black hover:bg-gray-800 sm:order-2"
            >
              {mode === "add" ? "Save" : "Update"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddAndEditFilmModal;
