"use client";

import * as React from "react";
import { Control, Controller } from "react-hook-form";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";

type FormCheckboxFieldProps = {
  name: string;
  control: Control<any>;
  label?: string;
  disabled?: boolean;
};

export function FormCheckboxField({ name, control, label, disabled }: FormCheckboxFieldProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div className="space-y-2">
          <label className="flex items-center space-x-2">
            <Checkbox {...field} checked={field.value} disabled={disabled} />
            {label && <span>{label}</span>}
          </label>
          {error && <p className="text-sm text-red-500">{error.message}</p>}
        </div>
      )}
    />
  );
}
