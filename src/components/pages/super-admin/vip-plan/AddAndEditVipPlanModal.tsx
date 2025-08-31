import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/src/components/ui/dialog';
import { Button } from '@/src/components/ui/button';
import { FormInputField } from '@/src/components/forms/FormInputField';
import { FormToggleSwitchField } from '@/src/components/forms/FormToggleSwitchField';
import { FormSelectField } from '@/src/components/forms/FormSelectField';

// Schema validation
const vipPlanSchema = z.object({
  name: z.string().min(1, 'Plan name is required'),
  tags: z.string().min(1, 'Tags are required'),
  price: z.string().min(1, 'Price is required'),
  offerPrice: z.string().min(1, 'Offer price is required'),
  validity: z.string().min(1, 'Validity is required'),
  validityType: z.string().min(1, 'Validity type is required'),
  isActive: z.boolean(),
});

type vipPlanFormData = z.infer<typeof vipPlanSchema>;

interface VipPlanModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: vipPlanFormData) => void;
  mode: 'add' | 'edit';
  isLoading?: boolean;
}

const AddAndEditVipPlanModal: React.FC<VipPlanModalProps> = ({
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
  } = useForm<vipPlanFormData>({
    resolver: zodResolver(vipPlanSchema),
  });

  // Reset form when modal opens/closes or initialData changes
  React.useEffect(() => {
    if (isOpen) {
      reset({
        name: '',
        tags: '',
        price: '',
        offerPrice: '',
        validity: '',
        validityType: '',
        isActive: true,
      });
    }
  }, [isOpen, reset]);

  const handleFormSubmit = (data: vipPlanFormData) => {
    onSubmit(data);
  };

  const handleCancel = () => {
    reset();
    onClose();
  };

  const modalTitle = mode === 'add' ? 'Add VIP Plan' : 'Edit VIP Plan';
  const submitButtonText = mode === 'add' ? 'Save' : 'Update';

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
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto rounded-2xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-center">
            {modalTitle}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormInputField
              control={control}
              name="name"
              label="VIP Plan Name"
              required={true}
              placeholder="Premium gold plan"
              className="rounded-3xl"
              colorScheme={inputColorScheme}
            />

            <FormInputField
              control={control}
              name="tags"
              label="Tags"
              required={true}
              placeholder="Premium"
              className="rounded-3xl"
              colorScheme={inputColorScheme}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormInputField
              control={control}
              name="price"
              label="Price"
              required={true}
              placeholder="$5.99"
              className="rounded-3xl"
              colorScheme={inputColorScheme}
            />

            <FormInputField
              control={control}
              name="offerPrice"
              label="Offer Price"
              required={true}
              placeholder="$4.99"
              className="rounded-3xl"
              colorScheme={inputColorScheme}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormInputField
              control={control}
              name="validity"
              label="Validity"
              required={true}
              placeholder="1 Month"
              className="rounded-3xl"
              colorScheme={inputColorScheme}
              type="number"
            />

            <FormSelectField
              control={control}
              name="validityType"
              label="Validity Type"
              placeholder="Weeks"
              options={[
                { label: "Weeks", value: "weeks" },
                { label: "Months", value: "months" },
                { label: "Year", value: "year" },
                { label: "Life time", value: "lifeTime" },
              ]}
              className="rounded-3xl py-5 border-gray-300"
            />
          </div>

          <FormToggleSwitchField
            name="isActive"
            control={control}
            label="Is Active?"
            labelClassName="w-1/2 flex-row-reverse justify-between"
          />

          <div className="flex justify-between gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={handleCancel}
              className="rounded-3xl flex-1 border-black border-2 text-black bg-[#E7E6E6] hover:bg-gray-50 p-5"
              disabled={isLoading}
            >
              Cancel
            </Button>

            <Button
              type="button"
              onClick={handleSubmit(handleFormSubmit)}
              className="rounded-3xl flex-1 bg-black text-white hover:bg-gray-900 disabled:opacity-50 px-6 py-[22px]"
              disabled={isLoading || (!isDirty && mode === 'edit')}
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  {mode === 'add' ? 'Saving...' : 'Updating...'}
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

export default AddAndEditVipPlanModal;