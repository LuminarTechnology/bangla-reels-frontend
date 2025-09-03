"use client";
import React from "react";
import { FormInputField } from "@/src/components/forms/FormInputField";
import { useFormContext } from "react-hook-form";

export default function AdsTab() {
  const methods = useFormContext();

  return (
    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-4">
      {/* Left side */}
      <div className="flex-1 space-y-2">
        {/* Android Setting */}
        <div className="flex-1 bg-white p-3 sm:p-6 shadow-sm">
          <h1 className="text-lg md:text-xl font-semibold pb-2.5 mb-2.5 border-b">Android</h1>
          <FormInputField
            control={methods.control}
            name="androidGoogleReward"
            label="Android Google Reward"
            placeholder="ca-app-pub-1234567890/abcd1234"
            className="rounded-full h-10 mb-4"
            colorScheme={{
              background: "bg-white",
              text: "text-[#242424]",
              placeholder: "placeholder-gray-500",
              border: "border-gray-300",
              focusBorder: "focus:border-black",
              focusRing: "focus:ring-1 focus:ring-black",
              label: "text-black",
              errorBorder: "border-red-500",
              errorText: "text-red-500",
            }}
          />
          <FormInputField
            control={methods.control}
            name="androidGoogleNative"
            label="Android Google Native"
            placeholder="ca-app-pub-1234567890/abcd1234"
            className="rounded-full h-10"
            colorScheme={{
              background: "bg-white",
              text: "text-[#242424]",
              placeholder: "placeholder-gray-500",
              border: "border-gray-300",
              focusBorder: "focus:border-black",
              focusRing: "focus:ring-1 focus:ring-black",
              label: "text-black",
              errorBorder: "border-red-500",
              errorText: "text-red-500",
            }}
          />
        </div>
      </div>

      {/* Right side */}
      <div className="flex-1 flex flex-col space-y-2">
        {/* ISO Setting */}
        <div className="flex-1 bg-white p-3 sm:p-6 shadow-sm">
          <h1 className="text-lg md:text-xl font-semibold pb-2.5 mb-2.5 border-b">ISO</h1>
          <FormInputField
            control={methods.control}
            name="isoGoogleReward"
            label="ISO Google Reward"
            placeholder="ca-app-pub-1234567890/abcd1234"
            className="rounded-full h-10 mb-4"
            colorScheme={{
              background: "bg-white",
              text: "text-[#242424]",
              placeholder: "placeholder-gray-500",
              border: "border-gray-300",
              focusBorder: "focus:border-black",
              focusRing: "focus:ring-1 focus:ring-black",
              label: "text-black",
              errorBorder: "border-red-500",
              errorText: "text-red-500",
            }}
          />
          <FormInputField
            control={methods.control}
            name="isoGoogleNative"
            label="ISO Google Native"
            placeholder="ca-app-pub-1234567890/abcd1234"
            className="rounded-full h-10"
            colorScheme={{
              background: "bg-white",
              text: "text-[#242424]",
              placeholder: "placeholder-gray-500",
              border: "border-gray-300",
              focusBorder: "focus:border-black",
              focusRing: "focus:ring-1 focus:ring-black",
              label: "text-black",
              errorBorder: "border-red-500",
              errorText: "text-red-500",
            }}
          />
        </div>
      </div>
    </div>
  );
}
