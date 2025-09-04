import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
} from '@/src/components/ui/dialog';
import { useForm, FormProvider } from 'react-hook-form';
import { Button } from '@/src/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import AdminInfo from '@/src/components/common/AdminInfo';
import AvatarUpload from '@/src/components/common/AvatarUpload';
import { AdminInfoFormData, adminInfoSchema } from '@/src/schema/adminInfo.schema';

interface adminInfoProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: AdminInfoFormData) => void;
  isLoading?: boolean;
}

const EditProfileModal: React.FC<adminInfoProps> = ({
  isOpen,
  onClose,
  onSubmit,
  isLoading = false,
}) => {
  const methods = useForm<AdminInfoFormData>({
    resolver: zodResolver(adminInfoSchema),
    defaultValues: {
      fullName: 'Saiful Alam',
      phoneNumber: '+8801784-774586',
      email: 'admin@example.com'
    }
  });

  const {
    handleSubmit,
    reset,
    formState: { errors, isDirty },
  } = methods;

  const [avatarFile, setAvatarFile] = useState<File | null>(null);

  // Reset form when modal opens/closes
  React.useEffect(() => {
    if (isOpen) {
      reset({
        fullName: 'Saiful Alam',
        phoneNumber: '+8801784-774586',
        email: 'admin@example.com'
      });
      setAvatarFile(null);
    }
  }, [isOpen, reset]);

  const handleFormSubmit = (data: AdminInfoFormData) => {
    const submitData = {
      ...data,
      avatar: avatarFile,
    };
    onSubmit(submitData);
    reset();
    onClose();
  };

  const handleCancel = () => {
    reset();
    setAvatarFile(null);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-screen overflow-y-auto rounded-2xl">
        <div className="space-y-6 mt-4">
          <AvatarUpload
            onAvatarChange={(file) => setAvatarFile(file)}
            size="lg"
          />

          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
              <AdminInfo />

              <div className="flex justify-between gap-3">
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
                  disabled={isLoading}
                >
                  Save
                </Button>
              </div>
            </form>
          </FormProvider>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EditProfileModal;