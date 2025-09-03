"use client";

import React from "react";
import { FormInputField } from "@/src/components/forms/FormInputField";
import { useFormContext } from "react-hook-form";
import { FormToggleSwitchField } from "@/src/components/forms/FormToggleSwitchField";

export default function PaymentTab() {
  const methods = useFormContext();

  return (
    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-4">
      {/* Left side */}
      <div className="flex-1 space-y-2">
        {/* Razon Pay Setting */}
        <div className="bg-white  p-3 sm:p-6 shadow-sm">
          <h1 className="text-lg md:text-xl font-semibold pb-2.5 border-b">Razor Pay Setting</h1>
          <FormToggleSwitchField
            name="razorPay"
            control={methods.control}
            label="Razor Pay (enable/disable for payment in app)"
            labelClassName="flex-row-reverse justify-between py-5 mb-5 border-b"
            labelSpanClassName="bg-[#F0F0F0] p-1 font-semibold text-[#242424]"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 justify-center items-center gap-2">
            <FormInputField
              control={methods.control}
              name="razorPayId"
              label="Razor Pay ID"
              placeholder="Razor Pay ID"
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
            <FormInputField
              control={methods.control}
              name="razorSecretKey"
              label="Razor Secret Key"
              placeholder="jduhbf_rhj_dfoigjfio"
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

        {/* Stripe Pay Setting */}
        <div className="bg-white  p-3 sm:p-6 shadow-sm">
          <h1 className="text-lg md:text-xl font-semibold pb-2.5 border-b">Stripe Pay Setting</h1>
          <FormToggleSwitchField
            name="srtipePay"
            control={methods.control}
            label="Stripe Pay (enable/disable for payment in app)"
            labelClassName="flex-row-reverse justify-between py-5 mb-5 border-b"
            labelSpanClassName="bg-[#F0F0F0] p-1 font-semibold text-[#242424]"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 justify-center items-center gap-2">
            <FormInputField
              control={methods.control}
              name="stripePublishableKey"
              label="Stripe Publishable Key"
              placeholder="fojkgpodfljkmg-dgfjkom-ad"
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
            <FormInputField
              control={methods.control}
              name="stripeSecretKey"
              label="Stripe Secret Key"
              placeholder="jduhbf_rhj_dfoigjfio"
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

      {/* Right side */}
      <div className="flex-1 flex flex-col space-y-2">

        {/* Google Pay Setting */}
        <div className="bg-white  p-3 sm:p-6 shadow-sm">
          <h1 className="text-lg md:text-xl font-semibold pb-2.5 border-b">Google Pay Setting</h1>
          <FormToggleSwitchField
            name="googlePay"
            control={methods.control}
            label="Google Pay (enable/disable for payment in app)"
            labelClassName="flex-row-reverse justify-between pt-5"
            labelSpanClassName="bg-[#F0F0F0] p-1 font-semibold text-[#242424]"
          />
        </div>

        {/* Flutter wave Setting */}
        <div className="flex-1 bg-white p-3 sm:p-6 shadow-sm">
          <h1 className="text-lg md:text-xl font-semibold pb-2.5 border-b">Flutter Wave Setting</h1>
          <FormToggleSwitchField
            name="flutterWave"
            control={methods.control}
            label="Flutter Wave (enable/disable for payment in app)"
            labelClassName="flex-row-reverse justify-between py-5 mb-5 border-b"
            labelSpanClassName="bg-[#F0F0F0] p-1 font-semibold text-[#242424]"
          />
          <FormInputField
            control={methods.control}
            name="flutterWaveId"
            label="Flutter Wave ID"
            placeholder="fojkgpodfljkmg-dgfjkom-ad"
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
