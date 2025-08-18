"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Copy, Plus, X } from "lucide-react";

// Define the form schema
const feedbackSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  feedback: z.string().min(10, "Feedback must be at least 10 characters long"),
  pictures: z.array(z.instanceof(File)).optional(),
});

type FeedbackFormData = z.infer<typeof feedbackSchema>;

const FeedbackForm: React.FC = () => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [emailCopied, setEmailCopied] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    watch,
  } = useForm<FeedbackFormData>({
    resolver: zodResolver(feedbackSchema),
    defaultValues: {
      email: "",
      feedback: "",
      pictures: [],
    },
  });

  const supportEmail = "shotreel-support.com";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(supportEmail);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    const newFiles = [...uploadedFiles, ...files];
    setUploadedFiles(newFiles);
    setValue("pictures", newFiles);
  };

  const removeFile = (index: number) => {
    const newFiles = uploadedFiles.filter((_, i) => i !== index);
    setUploadedFiles(newFiles);
    setValue("pictures", newFiles);
  };

  const onSubmit = async (data: FeedbackFormData) => {
    try {
      // Simulate form submission
      console.log("Form submitted:", data);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      alert("Feedback submitted successfully!");
    } catch (error) {
      console.error("Error submitting feedback:", error);
      alert("Failed to submit feedback. Please try again.");
    }
  };

  return (
    <div className="">
      <h1 className="mb-6 text-2xl font-semibold text-white">Feedback</h1>

      <div className="mb-6">
        <p className="mb-4 text-sm text-gray-300">
          You can contact us via email or via the feedback below
        </p>

        <div className="mb-4 flex items-center gap-2">
          <div className="flex-1 rounded-lg border border-gray-700 bg-gray-800/50 px-3 py-2">
            <span className="text-sm text-gray-300">{supportEmail}</span>
          </div>
          <button
            onClick={copyEmail}
            className="rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-red-600"
          >
            {emailCopied ? "Copied!" : "Copy"}
          </button>
        </div>

        <div className="mb-6 flex items-center gap-4">
          <div className="h-px flex-1 border border-dashed bg-gray-600"></div>
          <span className="text-sm text-gray-400">or</span>
          <div className="h-px flex-1 border border-dashed bg-gray-600"></div>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="mb-2 block text-sm font-medium text-white">Your Email *</label>
          <input
            {...register("email")}
            type="email"
            placeholder="example@gmail.com"
            className="w-full rounded-lg border border-gray-700 bg-gray-800/50 px-3 py-2 text-gray-300 placeholder-gray-500 focus:border-transparent focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />
          {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-white">Feedback</label>
          <textarea
            {...register("feedback")}
            placeholder="Enter your feedback"
            rows={6}
            className="w-full resize-none rounded-lg border border-gray-700 bg-gray-800/50 px-3 py-2 text-gray-300 placeholder-gray-500 focus:border-transparent focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />
          {errors.feedback && (
            <p className="mt-1 text-xs text-red-400">{errors.feedback.message}</p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-white">Pictures</label>

          {uploadedFiles.length > 0 && (
            <div className="mb-3 space-y-2">
              {uploadedFiles.map((file, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-lg border border-gray-700 bg-gray-800/50 px-3 py-2"
                >
                  <span className="truncate text-sm text-gray-300">{file.name}</span>
                  <button
                    type="button"
                    onClick={() => removeFile(index)}
                    className="text-gray-400 transition-colors hover:text-red-400"
                  >
                    <X size={16} />
                  </button>
                </div>
              ))}
            </div>
          )}

          <label className="block">
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleFileUpload}
              className="hidden"
            />
            <div className="flex h-24 w-24 cursor-pointer items-center justify-center rounded-lg border-2 border-dashed border-gray-600 bg-gray-800/50 transition-colors hover:border-gray-500">
              <Plus className="text-gray-400" size={24} />
            </div>
          </label>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-lg bg-red-500 px-4 py-2 font-medium text-white transition-colors hover:bg-red-600 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isSubmitting ? "Submitting..." : "Confirm"}
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
