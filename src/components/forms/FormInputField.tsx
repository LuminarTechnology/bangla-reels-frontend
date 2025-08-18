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
}: FormInputFieldProps) {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div className="space-y-2">
          {label && <Label htmlFor={name}>{label}</Label>}

          <div className="relative">
            {as === "textarea" ? (
              <Textarea
                id={name}
                placeholder={placeholder}
                disabled={disabled}
                {...field}
                className={cn(error && "border-red-500")}
              />
            ) : (
              <Input
                id={name}
                placeholder={placeholder}
                type={type === "password" ? (showPassword ? "text" : "password") : type}
                disabled={disabled}
                {...field}
                className={cn(error && "border-red-500 pr-10")}
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
