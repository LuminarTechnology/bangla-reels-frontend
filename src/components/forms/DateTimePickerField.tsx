"use client";

import * as React from "react";
import { Control, Controller } from "react-hook-form";
import { Label } from "../ui/label";
import moment from "moment";

type DateTimePickerFieldProps = {
  name: string;
  control: Control<any>;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
};

export function DateTimePickerField({
  name,
  control,
  label,
  placeholder,
  disabled,
}: DateTimePickerFieldProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        const dateValue = field.value ? moment(field.value) : null;

        const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          const newDate = dateValue ? dateValue.clone() : moment();
          newDate.set({
            year: +e.target.value.split("-")[0],
            month: +e.target.value.split("-")[1] - 1,
            date: +e.target.value.split("-")[2],
          });
          field.onChange(newDate.toDate());
        };

        const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          const [hours, minutes] = e.target.value.split(":").map(Number);
          const newDate = dateValue ? dateValue.clone() : moment();
          newDate.set({ hour: hours, minute: minutes });
          field.onChange(newDate.toDate());
        };

        return (
          <div className="space-y-2">
            {label && <Label>{label}</Label>}
            <div className="flex space-x-2">
              <input
                type="date"
                value={dateValue ? dateValue.format("YYYY-MM-DD") : ""}
                onChange={handleDateChange}
                disabled={disabled}
                className={`w-full rounded-lg border px-3 py-2 ${error ? "border-red-500" : "border-gray-700"}`}
              />
              <input
                type="time"
                value={dateValue ? dateValue.format("HH:mm") : ""}
                onChange={handleTimeChange}
                disabled={disabled}
                className={`w-full rounded-lg border px-3 py-2 ${error ? "border-red-500" : "border-gray-700"}`}
              />
            </div>
            {error && <p className="text-sm text-red-500">{error.message}</p>}
          </div>
        );
      }}
    />
  );
}
