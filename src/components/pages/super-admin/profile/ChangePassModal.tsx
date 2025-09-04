import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from '@/src/components/ui/dialog';
import { useForm, FormProvider } from 'react-hook-form';
import { Button } from '@/src/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { AlertDialogHeader } from '@/src/components/ui/alert-dialog';
import { FormInputField } from '@/src/components/forms/FormInputField';
import { PasswordChangeFormData, passwordChangeSchema } from '@/src/schema/adminPass.schema';

interface ChangePassModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: PasswordChangeFormData) => void;
  isLoading?: boolean;
}

const ChangePassModal: React.FC<ChangePassModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  isLoading = false,
}) => {
  const methods = useForm<PasswordChangeFormData>({
    resolver: zodResolver(passwordChangeSchema),
    defaultValues: {
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
  });

  const {
    handleSubmit,
    reset,
    control,
    formState: { errors, isDirty },
  } = methods;

  const handleFormSubmit = (data: PasswordChangeFormData) => {
    onSubmit(data);
  };

  const handleCancel = () => {
    reset();
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-screen overflow-y-auto rounded-2xl">
        <AlertDialogHeader>
          <DialogTitle className="text-xl font-semibold">
            Change Password
          </DialogTitle>
        </AlertDialogHeader>

        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
            <FormInputField
              control={control}
              name="oldPassword"
              label="Old Password"
              required
              placeholder="Enter old password"
              className="rounded-3xl"
              type="password"
              colorScheme={{
                background: "bg-white",
                text: "text-[#242424]",
                placeholder: "placeholder-gray-500",
                border: "border-gray-300",
                focusBorder: "focus:border-blue-500",
                focusRing: "focus:ring-2 focus:ring-blue-500",
                label: "text-black font-medium",
                errorBorder: "border-red-500",
                errorText: "text-red-500 text-sm mt-1",
              }}
            />
            <div className="grid grid-cols-2 gap-4">
              <FormInputField
                control={control}
                name="newPassword"
                label="New Password"
                required
                placeholder="Enter new password"
                className="rounded-3xl"
                type="password"
                colorScheme={{
                  background: "bg-white",
                  text: "text-[#242424]",
                  placeholder: "placeholder-gray-500",
                  border: "border-gray-300",
                  focusBorder: "focus:border-blue-500",
                  focusRing: "focus:ring-2 focus:ring-blue-500",
                  label: "text-black font-medium",
                  errorBorder: "border-red-500",
                  errorText: "text-red-500 text-sm mt-1",
                }}
              />
              <FormInputField
                control={control}
                name="confirmPassword"
                label="Confirm Password"
                required
                placeholder="Confirm new password"
                className="rounded-3xl"
                type="password"
                colorScheme={{
                  background: "bg-white",
                  text: "text-[#242424]",
                  placeholder: "placeholder-gray-500",
                  border: "border-gray-300",
                  focusBorder: "focus:border-blue-500",
                  focusRing: "focus:ring-2 focus:ring-blue-500",
                  label: "text-black font-medium",
                  errorBorder: "border-red-500",
                  errorText: "text-red-500 text-sm mt-1",
                }}
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
                type="submit"
                className="rounded-3xl flex-1 bg-black text-white hover:bg-gray-900 disabled:opacity-50 px-6 py-[22px]"
                disabled={isLoading || !isDirty}
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Changing...
                  </div>
                ) : (
                  'Change Password'
                )}
              </Button>
            </div>
          </form>
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
};

export default ChangePassModal;