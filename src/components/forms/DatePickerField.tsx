"use client";

import * as React from "react";
import { Control, Controller } from "react-hook-form";
import { Label } from "../ui/label";
import { CalendarIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import moment from "moment";

type DatePickerFieldProps = {
  name: string;
  control: Control<any>;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
};

export function DatePickerField({
  name,
  control,
  label,
  placeholder,
  disabled,
}: DatePickerFieldProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div className="space-y-2">
          {label && <Label htmlFor={name}>{label}</Label>}

          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={`w-full justify-between ${error ? "border-red-500" : ""}`}
                disabled={disabled}
              >
                {field.value
                  ? moment(field.value).format("YYYY-MM-DD")
                  : placeholder || "Select date"}
                <CalendarIcon className="ml-2 h-4 w-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={field.value ? new Date(field.value) : undefined}
                onSelect={(date) => field.onChange(moment(date).toDate())}
              />
            </PopoverContent>
          </Popover>

          {error && <p className="text-sm text-red-500">{error.message}</p>}
        </div>
      )}
    />
  );
}
