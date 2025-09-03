"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { MessageCircle } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { commentSchema } from "@/src/schema/commentSchema.schema";
import { FormInputField } from "../../forms/FormInputField";

type CommentFormData = {
  comment: string;
  name: string;
  email: string;
  website?: string;
  saveInfo?: boolean;
};

const CommentSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm<CommentFormData>({
    resolver: zodResolver(commentSchema),
    defaultValues: {
      name: "",
      email: "",
      comment: "",
      website: "",
    },
  });

  const onSubmit = (data: CommentFormData) => {
    // console.log("Form Submitted ✅", data);
    reset(); // clear form after submit
  };

  return (
    <div className="mt-8 rounded-lg bg-[#0F0828] p-6 shadow-sm">
      <h3 className="mb-6 flex items-center text-xl font-bold text-gray-50">
        <MessageCircle className="mr-2 h-5 w-5" />
        Leave a Reply
      </h3>

      <p className="mb-6 text-sm text-gray-300">
        Your email address will not be published. Required fields are marked *
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Comment */}
        <FormInputField
          name="comment"
          control={control}
          label="Comment"
          placeholder="Enter your comment"
          as="textarea"
        />

        {/* Name & Email */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <FormInputField
            name="name"
            control={control}
            label="Name"
            placeholder="Enter your name"
            type="text"
          />
          <FormInputField
            name="email"
            control={control}
            label="Email"
            placeholder="Enter your email"
            type="email"
          />
        </div>

        {/* Website */}
        <FormInputField
          name="website"
          control={control}
          label="Website"
          placeholder="Enter your website"
          type="text"
        />

        {/* Save Info */}
        <div className="flex items-center">
          <input
            type="checkbox"
            id="saveInfo"
            {...register("saveInfo")}
            className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-red-600 focus:ring-2 focus:ring-red-500"
          />
          <label htmlFor="saveInfo" className="ml-2 text-sm text-gray-300">
            Save my name, email, and website in this browser for the next time I comment.
          </label>
        </div>

        {/* Submit */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="rounded-md bg-red-500 px-8 py-3 font-medium text-white transition-colors duration-200 hover:bg-red-600"
          >
            Post Comment
          </button>
        </div>
      </form>
    </div>
  );
};

export default CommentSection;
