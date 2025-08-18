"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus, X } from "lucide-react";
import { FormInputField } from "@/src/components/forms/FormInputField";
import { FeedbackFormData, feedbackSchema } from "@/src/schema/feedbackSchema.schema";

const FeedbackForm: React.FC = () => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [emailCopied, setEmailCopied] = useState(false);

  const {
    handleSubmit,
    formState: { isSubmitting },
    setValue,
    control,
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
        <FormInputField
          name="email"
          control={control}
          label="Email"
          placeholder="Enter your email"
          type="email"
        />

        <FormInputField
          name="feedback"
          control={control}
          label="Feedback"
          placeholder="Enter your feedback"
          as="textarea"
        />

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
          className="w-full cursor-pointer rounded-lg bg-red-500 px-4 py-2 font-medium text-white transition-colors hover:bg-red-600 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isSubmitting ? "Submitting..." : "Confirm"}
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
