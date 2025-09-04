import React from 'react';
import { useForm } from 'react-hook-form';
import { FormInputField } from '../forms/FormInputField';
import { zodResolver } from '@hookform/resolvers/zod';
import { adminInfoSchema, AdminInfoFormData } from '@/src/schema/adminInfo.schema';

interface AdminInfoProps {
  disabled?: boolean;
  defaultValues?: Partial<AdminInfoFormData>;
}

const AdminInfo: React.FC<AdminInfoProps> = ({ 
  disabled = false, 
  defaultValues = {
    fullName: 'Saiful Alam',
    phoneNumber: '+8801784-774586',
    email: 'admin@example.com'
  }
}) => {
  // Initialize React Hook Form with schema validation
  const methods = useForm<AdminInfoFormData>({
    resolver: zodResolver(adminInfoSchema),
    defaultValues
  });
  
  const { control } = methods;

  return (
    <div className='flex-1 rounded-xl p-6 bg-white shadow-xs'>
      <h1 className="text-xl font-bold text-[#242424] mb-6">Personal Information</h1>
      
      <div className="space-y-4">
        <FormInputField
          control={control}
          name="fullName"
          label="Full Name"
          placeholder="Saiful Alam"
          className="rounded-full h-10"
          disabled={disabled}
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
          name="phoneNumber"
          label="Phone number"
          placeholder="+8801784-774586"
          className="rounded-full h-10"
          disabled={disabled}
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
          name="email"
          label="Email"
          type="email"
          disabled={disabled}
          placeholder=""
          className="rounded-full h-10"
          colorScheme={{
            background: "bg-white",
            text: "text-black",
            placeholder: "text-black",
            border: "border-gray-300",
            focusBorder: "focus:border-blue-500",
            focusRing: "focus:ring-2 focus:ring-blue-500",
            label: "text-black font-medium",
            errorBorder: "border-red-500",
            errorText: "text-red-500 text-sm mt-1",
          }}
        />
      </div>
    </div>
  );
};

export default AdminInfo;