"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/src/components/ui/button";
import { LoginFormData, loginSchema } from "@/src/schema/loginSchema.schema";
import { FormInputField } from "@/src/components/forms/FormInputField";

export default function SuperAdminDashboard() {
  const {
    handleSubmit,
    formState: { isSubmitting },
    control,
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });

  // ✅ Submit handler
  const onSubmit = (data: LoginFormData) => {
    // console.log("Login Data:", data);
    // 🔐 here you will call API for super admin login
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      {/* Login Card */}
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
        <div className="mb-6 space-y-2">
          <h1 className="text-center text-2xl font-bold text-gray-950">Sign in as a Super Admin</h1>
          <p className="text-center text-sm text-gray-700">
            Please provide info to Sign In into ReelShot
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Email */}
          <FormInputField
            name="email"
            control={control}
            label="Email"
            placeholder="Enter your email"
            type="email"
            colorScheme={{
              background: "bg-white",
              text: "text-gray-900",
              placeholder: "placeholder-gray-400",
              border: "border-gray-300",
              focusBorder: "focus:border-blue-500",
              focusRing: "focus:ring-2 focus:ring-blue-500",
              errorBorder: "border-red-500",
              errorText: "text-red-500",
              label: "text-gray-700",
              description: "text-gray-500",
            }}
          />

          {/* Password */}
          <FormInputField
            name="password"
            control={control}
            label="Password"
            placeholder="Enter your password"
            type="password"
            as="input"
            colorScheme={{
              background: "bg-white",
              text: "text-gray-900",
              placeholder: "placeholder-gray-400",
              border: "border-gray-300",
              focusBorder: "focus:border-blue-500",
              focusRing: "focus:ring-2 focus:ring-blue-500",
              errorBorder: "border-red-500",
              errorText: "text-red-500",
              label: "text-gray-700",
              description: "text-gray-500",
            }}
          />
          {/* Submit Button */}
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Logging in..." : "Login"}
          </Button>
        </form>
      </div>
    </div>
  );
}
