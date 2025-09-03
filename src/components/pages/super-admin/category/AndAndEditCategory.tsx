import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/src/components/ui/dialog";
import { Button } from "@/src/components/ui/button";
import { FormInputField } from "@/src/components/forms/FormInputField";
import { FormToggleSwitchField } from "@/src/components/forms/FormToggleSwitchField";

// Schema validation
const AddAndEditCategorySchema = z.object({
  categoryName: z.string().min(1, "Category name is required"),
  subCategoryName: z.string().optional(),
  description: z.string().optional(),
  isActive: z.boolean(),
});

type AddAndEditCategoryFormData = z.infer<typeof AddAndEditCategorySchema>;

interface AddAndEditCategoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: AddAndEditCategoryFormData) => void;
  mode: "add" | "edit";
  isLoading?: boolean;
}

const AddAndEditCategoryModal: React.FC<AddAndEditCategoryModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  mode,
  isLoading = false,
}) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isDirty },
  } = useForm<AddAndEditCategoryFormData>({
    resolver: zodResolver(AddAndEditCategorySchema),
  });

  // Reset form when modal opens/closes or initialData changes
  React.useEffect(() => {
    if (isOpen) {
      reset({
        categoryName: "",
        subCategoryName: "",
        description: "",
        isActive: true,
      });
    }
  }, [isOpen, reset]);

  const handleFormSubmit = (data: AddAndEditCategoryFormData) => {
    onSubmit(data);
    onClose();
  };

  const handleCancel = () => {
    reset();
    onClose();
  };

  const modalTitle = mode === "add" ? "Create New Category" : "Edit Category";
  const submitButtonText = mode === "add" ? "Save" : "Update";

  const inputColorScheme = {
    background: "bg-white",
    text: "text-[#242424]",
    placeholder: "placeholder-gray-500",
    border: "border-gray-300",
    focusBorder: "focus:border-black",
    focusRing: "focus:ring-1 focus:ring-black",
    label: "text-black",
    errorBorder: "border-red-500",
    errorText: "text-red-500",
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-h-[90vh] overflow-y-auto rounded-2xl sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-semibold">{modalTitle}</DialogTitle>
        </DialogHeader>

        <div className="mt-4 space-y-6">
          <FormInputField
            control={control}
            name="categoryName"
            label="Category Name"
            required={true}
            placeholder="Love"
            className="rounded-3xl"
            colorScheme={inputColorScheme}
          />

          <FormInputField
            control={control}
            name="subCategoryName"
            label="Sub-Category Name"
            placeholder="Romance, Love story"
            className="rounded-3xl"
            colorScheme={inputColorScheme}
          />

          <FormInputField
            control={control}
            name="description"
            label="Description"
            required={true}
            placeholder="Write here..."
            className="rounded-2xl"
            colorScheme={inputColorScheme}
            as="textarea"
          />

          <FormToggleSwitchField
            name="isActive"
            control={control}
            label="Is Active?"
            labelClassName="flex-row-reverse justify-between"
          />

          <div className="flex justify-center gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={handleCancel}
              className="flex-1 rounded-3xl border-2 border-black bg-[#E7E6E6] p-5 text-black hover:bg-gray-50"
              disabled={isLoading}
            >
              Cancel
            </Button>

            <Button
              type="button"
              onClick={handleSubmit(handleFormSubmit)}
              className="flex-1 rounded-3xl bg-black px-6 py-[22px] text-white hover:bg-gray-900 disabled:opacity-50"
              disabled={isLoading || (!isDirty && mode === "edit")}
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                  {mode === "add" ? "Saving..." : "Updating..."}
                </div>
              ) : (
                submitButtonText
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddAndEditCategoryModal;
