"use client";

import * as React from "react";
import { Control, Controller } from "react-hook-form";
import { Label } from "../ui/label";

type ImageUploadFieldProps = {
  name: string;
  control: Control<any>;
  label?: string;
  disabled?: boolean;
};

export function ImageUploadField({ name, control, label, disabled }: ImageUploadFieldProps) {
  const [preview, setPreview] = React.useState<string | null>(null);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          const file = e.target.files?.[0] ?? null;
          field.onChange(file);
          if (file) setPreview(URL.createObjectURL(file));
        };

        return (
          <div className="space-y-2">
            {label && <Label htmlFor={name}>{label}</Label>}
            <input
              type="file"
              id={name}
              accept="image/*"
              disabled={disabled}
              onChange={handleChange}
              className={`w-full rounded-lg border px-3 py-2 ${error ? "border-red-500" : "border-gray-700"}`}
            />
            {preview && (
              <img
                src={preview}
                alt="Preview"
                className="mt-2 h-40 w-auto rounded-lg object-cover"
              />
            )}
            {error && <p className="text-sm text-red-500">{error.message}</p>}
          </div>
        );
      }}
    />
  );
}
