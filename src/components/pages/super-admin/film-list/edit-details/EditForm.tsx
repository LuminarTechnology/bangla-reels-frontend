import { FormInputField } from "@/src/components/forms/FormInputField";
import React, { useEffect, useRef, useState } from "react";

function EditForm({
  control,
  currentEditData,
  selectedVideoIndex,
  updateEditDetail,
}: {
  control: any;
  currentEditData: any;
  selectedVideoIndex: number | null;
  updateEditDetail: (index: number, data: any) => void;
}) {
  console.log("EditForm render", { currentEditData, selectedVideoIndex });
  if (selectedVideoIndex === null) {
    return <p>Select a video first</p>;
  }

  if (!currentEditData?.isValid) {
    return <p>Loading episode details...</p>;
  }

  const { editIndex } = currentEditData;
  return (
    <div className="space-y-4">
      <FormInputField
        name={`editDetails.${editIndex}.title`}
        control={control}
        label="Title"
        placeholder="Enter episode title"
        value={currentEditData.editDetail.title}
        required = {false}
        onChange={(value) => updateEditDetail(editIndex, { title: value })}
        colorScheme={{
          background: "bg-white",
          text: "text-black",
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
        name={`editDetails.${editIndex}.description`}
        control={control}
        label="Description"
        placeholder="Write here..."
        as="textarea"
        required = {false}
        value={currentEditData.editDetail.description}
        onChange={(value) => updateEditDetail(editIndex, { description: value })}
        colorScheme={{
          background: "bg-white",
          text: "text-black",
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
        name={`editDetails.${editIndex}.tags`}
        control={control}
        label="Tags/keywords"
        placeholder="Film, Movie"
        value={currentEditData.editDetail.tags}
        onChange={(value) => updateEditDetail(editIndex, { tags: value })}
        colorScheme={{
          background: "bg-white",
          text: "text-black",
          placeholder: "placeholder-gray-500",
          border: "border-gray-300",
          focusBorder: "focus:border-black",
          focusRing: "focus:ring-1 focus:ring-black",
          label: "text-black",
          errorBorder: "border-red-500",
          errorText: "text-red-500",
        }}
      />

      {/* Optional: Show current video info */}
      {currentEditData.video && (
        <div className="border-t pt-4">
          <p className="text-muted-foreground text-sm">
            Editing: Episode {selectedVideoIndex + 1}
            {/* Add more video details if available: {currentEditData.video.resolution} • {currentEditData.video.duration} */}
          </p>
        </div>
      )}
    </div>
  );
}

export default React.memo(EditForm);