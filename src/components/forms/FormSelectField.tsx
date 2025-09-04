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
  className?: string;
  required?: boolean;
  value?: string | number;
  onChange?: (value: string) => void;
};

export function FormSelectField({
  name,
  control,
  label,
  options,
  placeholder,
  disabled,
  className,
  required,
  value,
  onChange
}: FormSelectFieldProps) {
  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: required
          ? typeof required === "string"
            ? required
            : "This field is required"
          : false,
      }}
      render={({ field, fieldState: { error } }) => (
        <div className="space-y-4">
          {label && (
            <Label htmlFor={name}>
              <p className="relative inline">
                {label}
                {required && (
                  <span className="absolute -top-1 -right-2 text-base text-red-500">*</span>
                )}
              </p>
            </Label>
          )}
          <Select value={value !== undefined ? value : field.value} onValueChange={onChange || field.onChange} disabled={disabled}>
            <SelectTrigger className={`w-full ${className} ${error ? "border-red-500" : ""}`}>
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
