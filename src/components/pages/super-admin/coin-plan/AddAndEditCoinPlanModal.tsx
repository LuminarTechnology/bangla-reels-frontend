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

// Schema validation
const coinPlanSchema = z.object({
  name: z.string().min(1, 'Plan name is required'),
  productKey: z.string().min(1, 'Product key is required'),
  price: z.string().min(1, 'Price is required'),
  offerPrice: z.string().min(1, 'Offer price is required'),
  coins: z.string().min(1, 'Coins is required'),
  bonusCoins: z.string().min(1, 'Bonus coins is required'),
  isActive: z.boolean(),
});

type CoinPlanFormData = z.infer<typeof coinPlanSchema>;

interface CoinPlanModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: CoinPlanFormData) => void;
  mode: 'add' | 'edit';
  isLoading?: boolean;
}

const AddAndEditCoinPlanModal: React.FC<CoinPlanModalProps> = ({
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
  } = useForm<CoinPlanFormData>({
    resolver: zodResolver(coinPlanSchema),
  });

  // Reset form when modal opens/closes or initialData changes
  React.useEffect(() => {
    if (isOpen) {
      reset({
        name: '',
        productKey: '',
        price: '',
        offerPrice: '',
        coins: '',
        bonusCoins: '',
        isActive: true,
      });
    }
  }, [isOpen, reset]);

  const handleFormSubmit = (data: CoinPlanFormData) => {
    onSubmit(data);
  };

  const handleCancel = () => {
    reset();
    onClose();
  };

  const modalTitle = mode === 'add' ? 'Add Coin Plan' : 'Edit Coin Plan';
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
              label="Coin Plan Name"
              required={true}
              placeholder="Basic"
              className="rounded-3xl"
              colorScheme={inputColorScheme}
            />
            
            <FormInputField
              control={control}
              name="productKey"
              label="Product Key"
              required={true}
              placeholder="PLAN001"
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
              name="coins"
              label="Coins"
              required={true}
              placeholder="500"
              className="rounded-3xl"
              colorScheme={inputColorScheme}
              type="number"
            />
            
            <FormInputField
              control={control}
              name="bonusCoins"
              label="Bonus Coins"
              required={true}
              placeholder="100"
              className="rounded-3xl"
              colorScheme={inputColorScheme}
              type="number"
            />
          </div>

          <FormToggleSwitchField
            name="isActive"
            control={control}
            label="Is Active?"
            labelClassName="w-1/2 flex-row-reverse justify-between"
          />

          <div className="flex justify-center gap-3 pt-4">
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

export default AddAndEditCoinPlanModal;