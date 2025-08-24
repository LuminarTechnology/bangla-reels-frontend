"use client";

import * as React from "react";
import { Control, Controller } from "react-hook-form";
import { cn } from "@/src/lib/utils";
import { Eye, EyeOff } from "lucide-react";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";

type ColorScheme = {
  background?: string;
  text?: string;
  placeholder?: string;
  border?: string;
  focusBorder?: string;
  focusRing?: string;
  errorBorder?: string;
  errorText?: string;
  label?: string;
  description?: string;
};

type FormInputFieldProps = {
  name: string;
  control: Control<any>;
  label?: string;
  placeholder?: string;
  type?: "text" | "email" | "password" | "number";
  as?: "input" | "textarea";
  disabled?: boolean;
  description?: string;
  required?: boolean;
  className?: string;
  colorScheme?: ColorScheme;
  defaultValue?: string | number | undefined;
};

export function FormInputField({
  name,
  control,
  label,
  placeholder,
  type = "text",
  as = "input",
  disabled = false,
  description,
  className,
  defaultValue = "",
  colorScheme = {
    background: "bg-gray-950",
    text: "text-white",
    placeholder: "placeholder-gray-400",
    border: "border-gray-700",
    focusRing: "focus:ring-2 focus:ring-rose-500",
    label: "text-white",
    description: "text-gray-400",
    errorBorder: "border-red-500",
    errorText: "text-red-400",
  },
}: FormInputFieldProps) {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field, fieldState: { error } }) => (
        <div className="space-y-2">
          {label && (
            <Label
              htmlFor={name}
              className={cn("mb-2 block text-sm font-medium", colorScheme.label)}
            >
              {label}
            </Label>
          )}

          <div className="relative">
            {as === "textarea" ? (
              <Textarea
                id={name}
                placeholder={placeholder}
                disabled={disabled}
                {...field}
                className={cn(
                  className,
                  "h-32 w-full resize-none rounded-lg px-3 py-4 focus:outline-none",
                  colorScheme.background,
                  colorScheme.text,
                  colorScheme.placeholder,
                  error
                    ? `${colorScheme.errorBorder} pr-10 focus:border-red-500 focus:ring-1 focus:ring-red-500`
                    : `${colorScheme.border} ${colorScheme.focusBorder} ${colorScheme.focusRing}`
                )}
              />
            ) : (
              <Input
                id={name}
                placeholder={placeholder}
                type={type === "password" ? (showPassword ? "text" : "password") : type}
                disabled={disabled}
                {...field}
                className={cn(
                  "w-full rounded-lg px-3 py-5 focus:outline-none",
                  className,
                  colorScheme.background,
                  colorScheme.text,
                  colorScheme.placeholder,
                  error
                    ? `${colorScheme.errorBorder} pr-10 focus:border-red-500 focus:ring-1 focus:ring-red-500`
                    : `${colorScheme.border} ${colorScheme.focusBorder} ${colorScheme.focusRing}`
                )}
              />
            )}

            {/* Password Toggle */}
            {type === "password" && (
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <Eye className="h-5 w-5" /> : <EyeOff className="h-5 w-5" />}
              </button>
            )}
          </div>

          {description && <p className={cn("text-sm", colorScheme.description)}>{description}</p>}
          {error && <p className={cn("text-sm", colorScheme.errorText)}>{error.message}</p>}
        </div>
      )}
    />
  );
}
