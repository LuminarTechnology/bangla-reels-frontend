"use client";

import * as React from "react";
import { Control, Controller } from "react-hook-form";
import { cn } from "@/src/lib/utils";
import { Eye, EyeOff } from "lucide-react";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";

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
};

export function FormInputField({
  name,
  control,
  label,
  placeholder,
  type = "text",
  as = "input",
  disabled = false,
  // required = false,
  description,
  className,
}: FormInputFieldProps) {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <Controller
      name={name}
      control={control}
      // rules={{
      //   required: label ? `${label} is required` : "This field is required",
      // }}
      render={({ field, fieldState: { error } }) => (
        <div className="space-y-2">
          {label && (
            <Label htmlFor={name} className="mb-2 block text-sm font-medium text-white">
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
                  className
                    ? className
                    : "h-32 w-full resize-none rounded-lg border px-3 py-2 text-gray-300 placeholder-gray-500 focus:outline-none",
                  error
                    ? "border-red-500 pr-10 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                    : "border-[#726E6E] bg-[#141414] focus:border-transparent focus:ring-2 focus:ring-rose-500"
                )}
              />
            ) : (
              <Input
                id={name}
                placeholder={placeholder}
                type={type === "password" ? (showPassword ? "text" : "password") : type}
                disabled={disabled}
                // required={required}
                {...field}
                className={cn(
                  "w-full resize-none rounded-lg border px-3 py-2 text-gray-300 placeholder-gray-500 focus:outline-none",
                  error
                    ? "border-red-500 pr-10 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                    : "border-[#726E6E] bg-[#141414] focus:border-transparent focus:ring-2 focus:ring-rose-500"
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
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            )}
          </div>

          {description && <p className="text-sm text-gray-400">{description}</p>}
          {error && <p className="text-sm text-red-500">{error.message}</p>}
        </div>
      )}
    />
  );
}
