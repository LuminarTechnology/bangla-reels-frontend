"use client";

import * as React from "react";
import { Control, Controller } from "react-hook-form";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

type FormRadioGroupFieldProps = {
  name: string;
  control: Control<any>;
  label?: string;
  options: { label: string; value: string | number }[];
  disabled?: boolean;
};

export function FormRadioGroupField({
  name,
  control,
  label,
  options,
  disabled,
}: FormRadioGroupFieldProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div className="space-y-2">
          {label && <Label>{label}</Label>}
          <RadioGroup
            {...field}
            className="flex flex-col space-y-2"
            disabled={disabled}
            onValueChange={field.onChange}
          >
            {options.map((opt) => (
              <label key={opt.value} className="flex items-center space-x-2">
                <RadioGroupItem value={opt.value.toString()} />
                <span>{opt.label}</span>
              </label>
            ))}
          </RadioGroup>
          {error && <p className="text-sm text-red-500">{error.message}</p>}
        </div>
      )}
    />
  );
}
