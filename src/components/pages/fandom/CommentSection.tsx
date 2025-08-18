"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { MessageCircle } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { commentSchema } from "@/src/schema/commentSchema.schema";

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
    <div className="mt-8 rounded-lg bg-white p-6 shadow-sm">
      <h3 className="mb-6 flex items-center text-xl font-bold text-gray-900">
        <MessageCircle className="mr-2 h-5 w-5" />
        Leave a Reply
      </h3>

      <p className="mb-6 text-sm text-gray-600">
        Your email address will not be published. Required fields are marked *
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Comment */}
        <div>
          <label htmlFor="comment" className="mb-2 block font-medium text-gray-700">
            Comment *
          </label>
          <textarea
            id="comment"
            {...register("comment", { required: "Comment is required" })}
            rows={6}
            className="resize-vertical w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-red-500 focus:outline-none"
            placeholder="Write your comment here..."
          />
          {errors.comment && <p className="text-sm text-red-500">{errors.comment.message}</p>}
        </div>

        {/* Name & Email */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label htmlFor="name" className="mb-2 block font-medium text-gray-700">
              Name *
            </label>
            <input
              type="text"
              id="name"
              {...register("name", { required: "Name is required" })}
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-red-500 focus:outline-none"
              placeholder="Your name"
            />
            {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block font-medium text-gray-700">
              Email *
            </label>
            <input
              type="email"
              id="email"
              {...register("email", {
                required: "Email is required",
                pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" },
              })}
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-red-500 focus:outline-none"
              placeholder="your.email@example.com"
            />
            {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
          </div>
        </div>

        {/* Website */}
        <div>
          <label htmlFor="website" className="mb-2 block font-medium text-gray-700">
            Website
          </label>
          <input
            type="url"
            id="website"
            {...register("website")}
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-red-500 focus:outline-none"
            placeholder="https://yourwebsite.com"
          />
        </div>

        {/* Save Info */}
        <div className="flex items-center">
          <input
            type="checkbox"
            id="saveInfo"
            {...register("saveInfo")}
            className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-red-600 focus:ring-2 focus:ring-red-500"
          />
          <label htmlFor="saveInfo" className="ml-2 text-sm text-gray-700">
            Save my name, email, and website in this browser for the next time I comment.
          </label>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="rounded-md bg-red-500 px-8 py-3 font-medium text-white transition-colors duration-200 hover:bg-red-600"
        >
          Post Comment
        </button>
      </form>
    </div>
  );
};

export default CommentSection;
