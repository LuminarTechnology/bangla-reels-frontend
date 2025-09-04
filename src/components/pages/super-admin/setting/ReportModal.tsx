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
import { FormInputField } from '@/src/components/forms/FormInputField';
import { inputColorScheme } from '@/src/constants/AdsCoinRewardItems';

const reportSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .max(100, "Title must not exceed 100 characters"),
});

type ReportModalData = z.infer<typeof reportSchema>;

interface ReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: ReportModalData) => void;
  mode: 'add' | 'edit';
  isLoading?: boolean;
}

const ReportModal: React.FC<ReportModalProps> = ({
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
  } = useForm<ReportModalData>({
    resolver: zodResolver(reportSchema),
  });

  // Reset form when modal opens/closes or initialData changes
  React.useEffect(() => {
    if (isOpen) {
      reset({
        title: ''
      });
    }
  }, [isOpen, reset]);

  const handleFormSubmit = (data: ReportModalData) => {
    onSubmit(data);
    reset();
    onClose();
  };

  const handleCancel = () => {
    reset();
    onClose();
  };

  const modalTitle = mode === 'add' ? 'Add Title' : 'Edit Title';
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
          <div className="grid grid-cols-1 gap-4">
            <FormInputField
              control={control}
              name="title"
              label="Title"
              required
              placeholder="Enter Title"
              className="rounded-3xl"
              colorScheme={inputColorScheme}
            />
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

export default ReportModal;