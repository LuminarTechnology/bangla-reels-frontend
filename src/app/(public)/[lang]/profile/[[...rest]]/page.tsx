"use client";

import React, { useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Avatar, AvatarFallback, AvatarImage } from "@/src/components/ui/avatar";
import { Button } from "@/src/components/ui/button";
import { FormInputField } from "@/src/components/forms/FormInputField";

const profileSchema = z
  .object({
    name: z.string().min(1, "Name is required"),
    phone: z.string().optional(),
    email: z.string().email(),
    oldPassword: z.string().optional(),
    newPassword: z.string().optional(),
    confirmPassword: z.string().optional(),
  })
  .refine(
    (data) => {
      if (data.newPassword && data.newPassword !== data.confirmPassword) {
        return false;
      }
      return true;
    },
    {
      message: "New passwords do not match",
      path: ["confirmPassword"],
    }
  );
type ProfileFormData = z.infer<typeof profileSchema>;

export default function ProfilePage() {
  const { user, isLoaded } = useUser();

  const { control, handleSubmit, reset } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: "",

      phone: "",
      email: "",
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });
  useEffect(() => {
    if (user) {
      reset({
        name: user.fullName || "",
        email: user.emailAddresses[0]?.emailAddress || "",
        phone: user.phoneNumbers?.[0]?.phoneNumber || "",
      });
    }
  }, [user, reset]);

  const onSubmit = (data: ProfileFormData) => {
    // console.log("Form Submitted", data);
    // Add your API call to save the data here
  };

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full text-white">
      {/* --- Avatar Section --- */}
      <div className="mb-8 flex flex-col items-center gap-4">
        <Avatar className="size-24 border-2 border-red-500">
          <AvatarImage src={user?.imageUrl} alt={user?.fullName || "User"} />
          <AvatarFallback>{user?.fullName?.charAt(0)}</AvatarFallback>
        </Avatar>
        <Button variant="danger">Change Avatar</Button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
        {/* --- Personal Details Section --- */}
        <fieldset className="space-y-6">
          <h2 className="text-2xl font-bold">Personal Details</h2>
          <div>
            <FormInputField name="name" control={control} label="Name" />
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <FormInputField name="email" control={control} label="Email" disabled />
            <FormInputField name="phone" control={control} label="Phone Number" />
          </div>
        </fieldset>

        {/* --- Change Password Section --- */}
        <fieldset className="space-y-6">
          <h2 className="text-2xl font-bold">Change Password</h2>
          <FormInputField
            name="oldPassword"
            control={control}
            label="Old Password"
            type="password"
            placeholder="********"
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <FormInputField
              name="newPassword"
              control={control}
              label="New Password"
              type="password"
              placeholder="New Password"
            />
            <FormInputField
              name="confirmPassword"
              control={control}
              label="Confirm Password"
              type="password"
              placeholder="Confirm Password"
            />
          </div>
        </fieldset>

        {/* --- Save Button --- */}
        <div className="flex justify-start">
          <Button type="submit" variant="danger" size="lg" className="px-10">
            Save
          </Button>
        </div>
      </form>
    </div>
  );
}
