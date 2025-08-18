"use client";

import * as React from "react";
import { Control, Controller } from "react-hook-form";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";

type FormCheckboxGroupFieldProps = {
  name: string;
  control: Control<any>;
  label?: string;
  options: { label: string; value: string | number }[];
  disabled?: boolean;
};

export function FormCheckboxGroupField({
  name,
  control,
  label,
  options,
  disabled,
}: FormCheckboxGroupFieldProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        const handleChange = (value: string | number) => {
          if (Array.isArray(field.value)) {
            if (field.value.includes(value)) {
              field.onChange(field.value.filter((v) => v !== value));
            } else {
              field.onChange([...field.value, value]);
            }
          } else {
            field.onChange([value]);
          }
        };

        return (
          <div className="space-y-2">
            {label && <Label>{label}</Label>}
            <div className="flex flex-col space-y-2">
              {options.map((opt) => (
                <label key={opt.value} className="flex items-center space-x-2">
                  <Checkbox
                    checked={Array.isArray(field.value) && field.value.includes(opt.value)}
                    onCheckedChange={() => handleChange(opt.value)}
                    disabled={disabled}
                  />
                  <span>{opt.label}</span>
                </label>
              ))}
            </div>
            {error && <p className="text-sm text-red-500">{error.message}</p>}
          </div>
        );
      }}
    />
  );
}
