"use client";

import * as React from "react";
import { Control, Controller } from "react-hook-form";
import { Label } from "../ui/label";
import moment from "moment";

type TimePickerFieldProps = {
  name: string;
  control: Control<any>;
  label?: string;
  disabled?: boolean;
};

export function TimePickerField({ name, control, label, disabled }: TimePickerFieldProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        const timeValue = field.value ? moment(field.value) : null;

        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          const [hours, minutes] = e.target.value.split(":").map(Number);
          const newTime = timeValue ? timeValue.clone() : moment();
          newTime.set({ hour: hours, minute: minutes });
          field.onChange(newTime.toDate());
        };

        return (
          <div className="space-y-2">
            {label && <Label>{label}</Label>}
            <input
              type="time"
              value={timeValue ? timeValue.format("HH:mm") : ""}
              onChange={handleChange}
              disabled={disabled}
              className={`w-full rounded-lg border px-3 py-2 ${error ? "border-red-500" : "border-gray-700"}`}
            />
            {error && <p className="text-sm text-red-500">{error.message}</p>}
          </div>
        );
      }}
    />
  );
}
