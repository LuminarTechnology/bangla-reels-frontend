"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/src/components/ui/button";
import { LoginFormData, loginSchema } from "@/src/schema/loginSchema.schema";
import { FormInputField } from "@/src/components/forms/FormInputField";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/src/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/src/components/ui/avatar";
import { User, ChevronDown } from "lucide-react";
import Image from "next/image";

interface LoginModalProps {
  TriggerButton: React.ReactNode;
}

export default function LoginModal({TriggerButton}:LoginModalProps) {
  const user = false;
  const [isOpen, setIsOpen] = useState(false);

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
    console.log("Login Data:", data);
    // 🔐 here you will call API for user login
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {TriggerButton}
      </DialogTrigger>
      <DialogContent 
        onInteractOutside={(e) => {
          e.preventDefault();
        }}
        className="min-w-[521px] rounded-2xl border-none bg-[#0B0000] p-9">
        <DialogHeader className="gap-3">
          <DialogTitle className="text-center text-2xl font-bold text-white">Login</DialogTitle>
        </DialogHeader>
        <div className="flex items-center justify-center gap-1 text-base">
          <p className="text-[#B3B1B0]">Don't have an account?</p>
          <p className="text-primary-rose font-semibold">Sign Up</p>
        </div>
        <div className="my-6 flex items-center gap-4">
          <div className="flex items-center gap-2 rounded-2xl bg-[#16151A] p-2 text-white">
            <Avatar className="h-6 w-6 border-[.34px] border-white">
              <AvatarImage src="/placeholder-user.jpg" alt="Guest" />
              <AvatarFallback className="bg-gray-600">
                <User className="h-4 w-4 text-white" />
              </AvatarFallback>
            </Avatar>
            <div className="flex gap-4">
              <div>
                <p>Sign in as Safiul Alam</p>
                <p className="flex items-center text-xs">
                  sasiyamkhan@gmail.com <ChevronDown className="relative top-[2px]" size={16} />
                </p>
              </div>
              <div className="rounded-lg bg-white p-2">
                <Image
                  src={"/icons/google.png"}
                  alt="Copy"
                  width={24}
                  height={24}
                  className="h-6 w-6 object-contain"
                />
              </div>
            </div>
          </div>
          <div className="rounded-2xl bg-[#16151A] px-7 py-4">
            <Image
              src={"/icons/facebook.png"}
              alt="Copy"
              width={24}
              height={24}
              className="h-6 w-6 object-contain"
            />
          </div>
          <div className="rounded-2xl bg-[#16151A] px-7 py-4">
            <Image
              src={"/icons/apple.png"}
              alt="Copy"
              width={24}
              height={24}
              className="h-6 w-6 object-contain"
            />
          </div>
        </div>

        {/* Login Card */}
          <div className="w-full max-w-md rounded-lg shadow-lg">
            <form onSubmit={(e) => {
              e.preventDefault();
              setIsOpen(false);
              handleSubmit(onSubmit)
            }} className="space-y-4">
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
      </DialogContent>
    </Dialog>
  );
}
