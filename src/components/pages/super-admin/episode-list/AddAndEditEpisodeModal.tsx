"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { EpisodeListData } from "./EpisodeTable";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/src/components/ui/dialog";
import { FormInputField } from "@/src/components/forms/FormInputField";
import { FormFileUploadField } from "@/src/components/forms/FormFileUploadField";
import { Button } from "@/src/components/ui/button";

const episodeSchema = z.object({
  episodeNumber: z.string().min(1, "Episode number is required"),
  video: z.any().optional(),
});

type EpisodeFormData = z.infer<typeof episodeSchema>;

interface AddAndEditEpisodeModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  mode: "add" | "edit";
  episodeData?: EpisodeListData;
  onSave: (data: EpisodeFormData) => void;
}

export function AddAndEditEpisodeModal({
  open,
  onOpenChange,
  mode,
  episodeData,
  onSave,
}: AddAndEditEpisodeModalProps) {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EpisodeFormData>({
    resolver: zodResolver(episodeSchema),
    defaultValues: {
      episodeNumber: "",
      video: null,
    },
  });

  useEffect(() => {
    if (open && mode === "edit" && episodeData) {
      reset({
        episodeNumber: episodeData.episodeNumber,
        video: null,
      });
    } else if (open && mode === "add") {
      reset({
        episodeNumber: "",
        video: null,
      });
    }
  }, [open, mode, episodeData, reset]);

  const onSubmit = (data: EpisodeFormData) => {
    onSave(data);
    onOpenChange(false);

    reset();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="m-4 flex h-auto max-h-[80vh] w-[95vw] max-w-[400px] flex-col p-0 [&>button]:rounded-full [&>button]:border-2 [&>button]:border-gray-800 [&>button]:p-[2px]">
        <DialogHeader className="flex-shrink-0 px-4 py-4 sm:px-6">
          <DialogTitle className="text-lg font-medium text-[#242424]">
            {mode === "add" ? "Add Episode List" : "Edit Episode List"}
          </DialogTitle>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto px-4 py-4 sm:px-6">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <FormInputField
              control={control}
              name="episodeNumber"
              label="Episode Number"
              placeholder="10"
              className="rounded-2xl"
              colorScheme={{
                background: "bg-white",
                text: "text-[#242424]",
                placeholder: "placeholder-gray-500",
                border: "border-gray-300",
                focusBorder: "focus:border-black",
                focusRing: "focus:ring-1 focus:ring-black",
                label: "text-black",
                errorBorder: "border-red-500",
                errorText: "text-red-500",
              }}
            />

            <FormFileUploadField
              control={control}
              name="video"
              label="Video"
              accept="video/*,image/*"
              multiple
            />

            <div className="pt-4">
              <Button
                type="submit"
                className="w-full rounded-full bg-black py-3 text-white hover:bg-gray-800"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
