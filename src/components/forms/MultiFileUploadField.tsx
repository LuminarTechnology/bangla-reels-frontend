"use client";

import * as React from "react";
import { Control, Controller } from "react-hook-form";
import { Label } from "../ui/label";

type MultiFileUploadFieldProps = {
  name: string;
  control: Control<any>;
  label?: string;
  disabled?: boolean;
};

export function MultiFileUploadField({
  name,
  control,
  label,
  disabled,
}: MultiFileUploadFieldProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div className="space-y-2">
          {label && <Label htmlFor={name}>{label}</Label>}
          <input
            type="file"
            id={name}
            multiple
            disabled={disabled}
            onChange={(e) => field.onChange(e.target.files ? Array.from(e.target.files) : [])}
            className={`w-full rounded-lg border px-3 py-2 ${error ? "border-red-500" : "border-gray-700"}`}
          />
          {error && <p className="text-sm text-red-500">{error.message}</p>}
        </div>
      )}
    />
  );
}
