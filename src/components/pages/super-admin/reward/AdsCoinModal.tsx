import React from 'react';
import * as z from 'zod';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/src/components/ui/dialog';
import { useForm } from 'react-hook-form';
import { Button } from '@/src/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormInputField } from '@/src/components/forms/FormInputField';
import { FormSelectField } from '@/src/components/forms/FormSelectField';
import { inputColorScheme } from '@/src/constants/AdsCoinRewardItems';
import { AdsCoinModalFormData, adsCoinModalSchema } from '@/src/schema/adsCoinRewardTabAndModal.schema';

interface AdsCoinModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: AdsCoinModalFormData) => void;
  mode: 'add' | 'edit';
  isLoading?: boolean;
}

const AdsCoinModal: React.FC<AdsCoinModalProps> = ({
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
  } = useForm<AdsCoinModalFormData>({
    resolver: zodResolver(adsCoinModalSchema),
  });

  // Reset form when modal opens/closes or initialData changes
  React.useEffect(() => {
    if (isOpen) {
      reset({
        label: '',
        displayInterval: '',
        coinEarned: '',
      });
    }
  }, [isOpen, reset]);

  const handleFormSubmit = (data: AdsCoinModalFormData) => {
    onSubmit(data);
    reset();
    onClose();
  };

  const handleCancel = () => {
    reset();
    onClose();
  };

  const modalTitle = mode === 'add' ? 'Add Ads Coin Reward' : 'Edit Ads Coin Reward';
  const submitButtonText = mode === 'add' ? 'Save' : 'Update';

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto rounded-2xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-center">
            {modalTitle}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          <div className="grid grid-cols-1 gap-4">
            <FormInputField
              control={control}
              name="label"
              label="Label"
              placeholder="Basic Ads Reward"
              className="rounded-3xl"
              colorScheme={inputColorScheme}
            />
            <FormSelectField
              control={control}
              name="displayInterval"
              label="Display Interval"
              placeholder="10 Seconds"
              options={[
                { label: "10 Seconds", value: "10s" },
                { label: "20 Seconds", value: "20s" },
                { label: "30 Seconds", value: "30s" }
              ]}
              className="rounded-3xl py-5 border-gray-300"
            />
            <FormInputField
              control={control}
              name="coinEarned"
              label="Coin Earned"
              placeholder="10 Coins"
              className="rounded-3xl"
              colorScheme={inputColorScheme}
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={handleCancel}
              className="rounded-3xl border-black border-2 text-black bg-[#E7E6E6] hover:bg-gray-50 p-5"
              disabled={isLoading}
            >
              Cancel
            </Button>

            <Button
              type="button"
              onClick={handleSubmit(handleFormSubmit)}
              className="rounded-3xl bg-black text-white hover:bg-gray-900 disabled:opacity-50 px-6 py-[22px]"
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

export default AdsCoinModal;