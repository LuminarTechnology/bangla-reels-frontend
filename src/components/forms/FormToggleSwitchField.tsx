"use client";

import * as React from "react";
import { Control, Controller } from "react-hook-form";
import { Switch } from "../ui/switch";
type FormToggleSwitchFieldProps = {
  name: string;
  control: Control<any>;
  label?: string;
  disabled?: boolean;
};

export function FormToggleSwitchField({
  name,
  control,
  label,
  disabled,
}: FormToggleSwitchFieldProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div className="space-y-2">
          <label className="flex items-center space-x-2">
            <Switch
              {...field}
              checked={field.value}
              disabled={disabled}
              onCheckedChange={field.onChange}
            />
            {label && <span>{label}</span>}
          </label>
          {error && <p className="text-sm text-red-500">{error.message}</p>}
        </div>
      )}
    />
  );
}
