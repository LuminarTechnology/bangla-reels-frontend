import { FormFileUploadField } from "@/src/components/forms/FormFileUploadField";
import { FormInputField } from "@/src/components/forms/FormInputField";
import { FormRadioGroupField } from "@/src/components/forms/FormRadioGroupField";
import { FormSelectField } from "@/src/components/forms/FormSelectField";
import { FormToggleSwitchField } from "@/src/components/forms/FormToggleSwitchField";
import { FilmFormData } from "@/src/schema/FilmList.schema";
import React from "react";
import { Control, useWatch } from "react-hook-form";

interface FilmDetailsProps {
  control: Control<FilmFormData>;
}

const FilmDetails = ({ control }: FilmDetailsProps) => {
  const isBanner = useWatch({
    control,
    name: "isBanner",
    defaultValue: true,
  });
  return (
    <div className="space-y-2 md:space-y-3">
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
          required
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
          className="rounded-2xl border-gray-300 py-5"
          required
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
        required
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
        required
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <FormFileUploadField
            name="poster"
            control={control}
            label="Poster"
            accept="image/*"
            buttonText="Choose File"
            placeholder="No file chosen"
          />
          <p className="text-gray-400">JPG only, 1080 x 1440, max 5MB</p>
        </div>
        {isBanner && (
          <div>
            <FormFileUploadField
              name="banner"
              control={control}
              label="Banner"
              accept="image/*"
              buttonText="Choose File"
              placeholder="No file chosen"
            />
            {isBanner && <p className="text-gray-400">JPG only, 1080 x 1440, max 5MB</p>}
          </div>
        )}
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
