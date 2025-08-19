"use client";

import * as React from "react";
import { Control, Controller } from "react-hook-form";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

type FormSelectFieldProps = {
  name: string;
  control: Control<any>;
  label?: string;
  options: { label: string; value: string | number }[];
  placeholder?: string;
  disabled?: boolean;
};

export function FormSelectField({
  name,
  control,
  label,
  options,
  placeholder,
  disabled,
}: FormSelectFieldProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div className="space-y-2">
          {label && <Label htmlFor={name}>{label}</Label>}
          <Select {...field} disabled={disabled}>
            <SelectTrigger className={`w-full ${error ? "border-red-500" : ""}`}>
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
              {options.map((opt) => (
                <SelectItem key={opt.value} value={opt.value.toString()}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {error && <p className="text-sm text-red-500">{error.message}</p>}
        </div>
      )}
    />
  );
}
