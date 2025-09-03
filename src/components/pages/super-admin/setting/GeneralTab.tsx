"use client";
import React from "react";
import { FormInputField } from "@/src/components/forms/FormInputField";
import { useFormContext } from "react-hook-form";
// import { FormData } from "@/src/types/superAdminSettings";
import { FormToggleSwitchField } from "@/src/components/forms/FormToggleSwitchField";

export default function GeneralTab() {
  const methods = useFormContext();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 mt-4">
      {/* Left side */}
      <div className="flex-1 space-y-2">
        {/* Private key JSON */}
        <div className="bg-white p-3 sm:p-6 shadow-sm">
          <h1 className="text-lg md:text-xl font-semibold pb-2.5 mb-2.5 border-b">Firebase notification Setting</h1>
          <FormInputField
            control={methods.control}
            as="textarea"
            name="privateKeyJson"
            label="Private Key JSON"
            placeholder="Private Key JSON"
            className="rounded-md h-24"
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
        {/* App Setting */}
        <div className="bg-white p-3 sm:p-6 shadow-sm">
          <h1 className="text-lg md:text-xl font-semibold pb-2.5 mb-2.5 border-b">App Setting</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 justify-center items-center gap-2">
            <FormInputField
              control={methods.control}
              name="privacyPolicyLink"
              label="Privacy Policy Link"
              placeholder="Link"
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
              name="termsAndCondition"
              label="Terms and Condition"
              placeholder="Link"
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
        {/* Resend Email Setting */}
        <div className="bg-white  p-3 sm:p-6 shadow-sm">
          <h1 className="text-lg md:text-xl font-semibold pb-2.5 mb-2.5 border-b">Resend Email Setting</h1>
          <FormInputField
            control={methods.control}
            name="resentApiKey"
            label="Resend API Key"
            placeholder="Resend API Key"
            className="rounded-full h-11 ps-3"
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
        {/* Resend Email Setting */}
        <div className="bg-white  p-3 sm:p-6 shadow-sm">
          <h1 className="text-lg md:text-xl font-semibold pb-2.5 mb-2.5 border-b">Resend Email Setting</h1>
          <FormInputField
            control={methods.control}
            name="resentApiKey"
            label="Resend API Key"
            placeholder="Resend API Key"
            className="rounded-full h-11 ps-3"
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
        {/* Free Episode for NON VIP Setting */}
        <div className="bg-white  p-3 sm:p-6 shadow-sm">
          <h1 className="text-lg md:text-xl font-semibold pb-2.5 mb-2.5 border-b">Non-VIP Access Setting</h1>
          <FormInputField
            control={methods.control}
            name="freeEpisodesForNonVip"
            label="Free Episodes for Non VIP"
            placeholder="2"
            className="rounded-full h-11 ps-4"
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
        {/* Episode duration Setting */}
        <div className="bg-white  p-3 sm:p-6 shadow-sm">
          <h1 className="text-lg md:text-xl font-semibold pb-2.5 mb-2.5 border-b">Episodes Duration Setting</h1>
          <FormInputField
            control={methods.control}
            name="episodesDurationShorts"
            label="Episodes Duration Shorts (seconds)"
            placeholder="500"
            className="rounded-full h-11 ps-4"
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
        {/* Support Email Setting */}
        <div className="bg-white  p-3 sm:p-6 shadow-sm">
          <h1 className="text-lg md:text-xl font-semibold pb-2.5 mb-2.5 border-b">Support Email Setting</h1>
          <FormInputField
            control={methods.control}
            name="supportEmail"
            label="Support Email"
            placeholder="support@email.com"
            className="rounded-full h-11 ps-4"
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
        {/* Storage Setting */}
        <div className="flex-1 bg-white p-3 sm:p-6 shadow-sm">
          <h1 className="text-lg md:text-xl font-semibold pb-2.5 mb-2.5 border-b">Storage Setting</h1>
          <FormToggleSwitchField
            name="local"
            control={methods.control}
            label="Local"
            labelClassName="flex-row-reverse justify-between"
          />
          <FormToggleSwitchField
            name="digitalOceanSpace"
            control={methods.control}
            label="Digital Ocean Space"
            labelClassName="flex-row-reverse justify-between mt-4"
          />
        </div>
      </div>
    </div>
  );
}
