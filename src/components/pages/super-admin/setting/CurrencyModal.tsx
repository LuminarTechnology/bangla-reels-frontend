import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/src/components/ui/dialog';
import { z } from "zod";
import { useForm } from 'react-hook-form';
import { Button } from '@/src/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormSelectField } from '@/src/components/forms/FormSelectField';

const currencyModalSchema = z.object({
  name: z.string().min(1, "Currency name is required"),
  symbol: z.string().min(1, "Currency symbol is required"),
  currencyCode: z.string().min(1, "Currency code is required"),
  countryCode: z.string().min(1, "Country code is required"),
});

type CurrencyModalFormData = z.infer<typeof currencyModalSchema>;

interface CurrencyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: CurrencyModalFormData) => void;
  mode: 'add' | 'edit';
  isLoading?: boolean;
}

const CurrencyModal: React.FC<CurrencyModalProps> = ({
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
  } = useForm<CurrencyModalFormData>({
    resolver: zodResolver(currencyModalSchema),
  });

  // Reset form when modal opens/closes or initialData changes
  React.useEffect(() => {
    if (isOpen) {
      reset({
        name: "",
        symbol: "",
        currencyCode: "",
        countryCode: "",
      });
    }
  }, [isOpen, reset]);

  const handleFormSubmit = (data: CurrencyModalFormData) => {
    onSubmit(data);
    reset();
    onClose();
  };

  const handleCancel = () => {
    reset();
    onClose();
  };

  const modalTitle = mode === 'add' ? 'Add Currency' : 'Edit Currency';
  const submitButtonText = mode === 'add' ? 'Submit' : 'Update';

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto rounded-2xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            {modalTitle}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className='space-y-3'>
              <FormSelectField
                control={control}
                name="name"
                label="Name"
                placeholder="Taka"
                options={[
                  { label: "Taka", value: "taka" },
                  { label: "Dollar", value: "dollar" },
                  { label: "Euro", value: "euro" },
                  { label: "Pound", value: "pound" },
                  { label: "Yen", value: "yen" }
                ]}
                className="rounded-3xl py-5 border-gray-300"
              />
              <FormSelectField
                control={control}
                name="currencyCode"
                label="Currency Code"
                placeholder="BDT"
                options={[
                  { label: "BDT", value: "taka" },
                  { label: "USD", value: "dollar" },
                  { label: "EUR", value: "euro" },
                  { label: "GBP", value: "pound" },
                  { label: "JPY", value: "yen" }
                ]}
                className="rounded-3xl py-5 border-gray-300"
              />

            </div>
            <div className='space-y-3'>
              <FormSelectField
                control={control}
                name="symbol"
                label="Symbol"
                placeholder="৳"
                options={[
                  { label: "৳", value: "taka" },
                  { label: "$", value: "dollar" },
                  { label: "€", value: "euro" },
                  { label: "£", value: "pound" },
                  { label: "¥", value: "yen" }
                ]}
                className="rounded-3xl py-5 border-gray-300"
              />
              <FormSelectField
                control={control}
                name="countryCode"
                label="Country Code"
                placeholder="BD"
                options={[
                  { label: "BD", value: "taka" },
                  { label: "USA", value: "dollar" },
                  { label: "EU", value: "euro" },
                  { label: "GB", value: "pound" },
                  { label: "JP", value: "yen" }
                ]}
                className="rounded-3xl py-5 border-gray-300"
              />
            </div>
          </div>

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

export default CurrencyModal;