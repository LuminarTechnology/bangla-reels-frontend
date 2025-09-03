import { FormFileUploadField } from "@/src/components/forms/FormFileUploadField";
import { FormInputField } from "@/src/components/forms/FormInputField";
import { FormRadioGroupField } from "@/src/components/forms/FormRadioGroupField";
import { FormSelectField } from "@/src/components/forms/FormSelectField";
import { FormToggleSwitchField } from "@/src/components/forms/FormToggleSwitchField";
import { FilmFormData } from "@/src/schema/FilmList.schema";
import React from "react";
import { Control, useWatch } from "react-hook-form";

interface FilmDetailsProps{
  control: Control<FilmFormData>
}

const FilmDetails = ({control}:FilmDetailsProps) => {
  const isBanner = useWatch({
    control,
    name: "isBanner",
    defaultValue: true,
  })
  return (
    <div className="min-h-0 flex-1 space-y-2 overflow-y-auto pt-2 pb-4 sm:space-y-4 px-1">
      <FormRadioGroupField
        name="type"
        control={control}
        label="Type"
        className="flex flex-row"
        options={[
          { label: "WEB SERIES", value: "WEB SERIES" },
          { label: "MOVIES", value: "MOVIES" },
        ]}
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <FormInputField
          name="name"
          control={control}
          label="Name"
          placeholder="Name"
          className="rounded-2xl"
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

        <FormSelectField
          name="category"
          control={control}
          label="Category"
          placeholder="Select Category"
          options={[
            { label: "Action", value: "action" },
            { label: "Drama", value: "drama" },
            { label: "Comedy", value: "comedy" },
          ]}
          className="rounded-2xl py-5 border-gray-300"
        />
      </div>

      <FormInputField
        name="description"
        control={control}
        label="Description"
        placeholder="Write here..."
        as="textarea"
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
        name="maxAdsForFreeView"
        control={control}
        label="Max Ads For Free View"
        placeholder="Enter max ads"
        type="number"
        className="rounded-2xl"
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

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <FormFileUploadField
          name="poster"
          control={control}
          label="Poster"
          accept="image/*"
          buttonText="Choose File"
          placeholder="No file chosen"
        />
        {isBanner && <FormFileUploadField
          name="banner"
          control={control}
          label="Banner"
          accept="image/*"
          buttonText="Choose File"
          placeholder="No file chosen"
        />}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 -mt-4 text-[#A9A9A9]">
        <p>JPG only, 1080 x  1440, max 5MB</p>
        {isBanner && <p>JPG only, 1080 x  1440, max 5MB</p>}
      </div>

      <div className="space-y-4">
        <FormToggleSwitchField
          name="isBanner"
          control={control}
          label="Is Banner"
          labelClassName="flex-row-reverse justify-between"
        />
        <FormToggleSwitchField
          name="isTrending"
          control={control}
          label="Is Trending"
          labelClassName="flex-row-reverse justify-between"
        />
        <FormToggleSwitchField
          name="isActive"
          control={control}
          label="Is Active"
          labelClassName="flex-row-reverse justify-between"
        />
      </div>
    </div>
  );
};

export default FilmDetails;
