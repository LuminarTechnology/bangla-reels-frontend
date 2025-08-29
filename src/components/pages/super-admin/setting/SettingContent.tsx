"use client";

import { FormInputField } from "@/src/components/forms/FormInputField";
import { Button } from "@/src/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

export default function FirebaseNotificationForm() {
  const keySchema = z.object({
    privateKeyJson: z.string().min(1, "Private key JSON is required"),
  });

  type KeyFormData = z.infer<typeof keySchema>;

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<KeyFormData>({
    resolver: zodResolver(keySchema),
    defaultValues: {
      privateKeyJson: "",
    },
  });

  const onSubmit = (data: KeyFormData) => {
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-4 rounded-lg bg-white p-3 md:p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h1 className="text-lg md:text-xl font-semibold">Firebase notification Setting</h1>
        <Button
          type="submit"
          className="rounded-full bg-black p-3 md:p-6 text-sm font-medium text-white transition-colors hover:bg-gray-800"
        >
          Submit
        </Button>
      </div>
      <hr className="my-[10px]"/>

      <div className="space-y-6">
        <div>
          <FormInputField
            control={control}
            name="privateKeyJson"
            label="Private Key JSON"
            placeholder="5000"
            className="rounded-4xl md:py-[26px]"
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
    </form>
  );
}
