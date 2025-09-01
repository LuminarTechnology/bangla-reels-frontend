"use client";

import * as React from "react";
import { Control, Controller } from "react-hook-form";
import { Label } from "../ui/label";
import { Upload } from "lucide-react";
import { cn } from "@/src/lib/utils";

type BulkVideoUploadFieldProps = {
  name: string;
  control: Control<any>;
  label?: string;
  disabled?: boolean;
};

export function BulkVideoUploadField({
  name,
  control,
  label,
  disabled,
}: BulkVideoUploadFieldProps) {
  const [previews, setPreviews] = React.useState<string[]>([]);
  const [dragActive, setDragActive] = React.useState(false);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        const handleFiles = (files: FileList | File[]) => {
          const newFiles = Array.from(files);
          field.onChange([...field.value ?? [], ...newFiles]);
          const newPreviews = newFiles.map((file) => URL.createObjectURL(file));
          setPreviews((prev) => [...prev, ...newPreviews]);
        };

        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          if (e.target.files) handleFiles(e.target.files);
        };

        const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
          e.preventDefault();
          e.stopPropagation();
          if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
          } else if (e.type === "dragleave") {
            setDragActive(false);
          }
        };

        const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
          e.preventDefault();
          e.stopPropagation();
          setDragActive(false);
          if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            handleFiles(e.dataTransfer.files);
            e.dataTransfer.clearData();
          }
        };

        return (
          <div className="space-y-2 px-6">
            {label && <Label htmlFor={name}>{label}</Label>}

            <div
              onDragEnter={handleDrag}
              onDragOver={handleDrag}
              onDragLeave={handleDrag}
              onDrop={handleDrop}
              className={`border-2 border-dashed rounded-lg p-12 text-center transition-colors ${
                dragActive ? "border-blue-500 bg-blue-50" : "border-gray-700"
              }`}
              onClick={() => {
                if (!disabled) {
                  document.getElementById(name)?.click();
                }
              }}
            >
              <div>
                <Upload className="h-8 w-8 mx-auto mb-4 text-gray-400" />
                <p className="text-gray-600 mb-2">
                  Drop your entry here, or{" "}
                  <button onClick={() => fileInputRef.current?.click()} className="text-black underline font-medium">
                    browse
                  </button>{" "}
                  to upload
                </p>
              </div>
              <input
                type="file"
                id={name}
                accept="video/*"
                multiple
                disabled={disabled}
                onChange={handleChange}
                className="hidden"
              />
            </div>

            {previews.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                {previews.map((src, idx) => (
                  <video
                    key={idx}
                    src={src}
                    controls
                    className="w-full h-40 rounded-lg object-cover"
                  />
                ))}
              </div>
            )}

            {error && <p className="text-sm text-red-500">{error.message}</p>}
          </div>
        );
      }}
    />
  );
}
