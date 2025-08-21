"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/src/components/ui/button";
import { LoginFormData, loginSchema } from "@/src/schema/loginSchema.schema";
import { FormInputField } from "@/src/components/forms/FormInputField";

interface LoginFormCardProps {
  onClose?: () => void;
}

export const LoginFormCard: React.FC<LoginFormCardProps> = ({ onClose }) => {
  const {
    handleSubmit,
    formState: { isSubmitting },
    control,
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });

  const onSubmit = (data: LoginFormData) => {
    // console.log("Login Data:", data);
    // 🔐 Call your API here
    if (onClose) onClose();
  };

  return (
    <div className="w-full max-w-md rounded-lg shadow-lg">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4"
      >
        {/* Email */}
        <FormInputField
          name="email"
          control={control}
          placeholder="Enter Address"
          type="email"
          colorScheme={{
            background: "bg-[#16151A]",
            text: "text-white",
            placeholder: "placeholder-[#A9A9A9]",
            border: "border-[#595756]",
            focusRing: "focus:ring-2 focus:ring-rose-500",
            label: "text-white",
            description: "text-gray-400",
            errorBorder: "border-red-500",
            errorText: "text-red-400",
          }}
        />

        {/* Password */}
        <FormInputField
          name="password"
          control={control}
          placeholder="Password"
          type="password"
          as="input"
          colorScheme={{
            background: "bg-[#16151A]",
            text: "text-white",
            placeholder: "placeholder-[#A9A9A9]",
            border: "border-[#595756]",
            focusRing: "focus:ring-2 focus:ring-rose-500",
            label: "text-white",
            description: "text-gray-400",
            errorBorder: "border-red-500",
            errorText: "text-red-400",
          }}
        />

        <p className="text-primary-rose cursor-pointer text-right">Forget Password?</p>

        {/* Submit Button */}
        <Button
          type="submit"
          className="bg-primary-rose hover:bg-primary-rose-hover w-full font-semibold"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Logging in..." : "Login"}
        </Button>
      </form>
    </div>
  );
};
