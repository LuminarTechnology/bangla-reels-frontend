"use client"
import { Button } from "@/src/components/ui/button";
import SettingTabs from "@/src/components/pages/super-admin/setting/SettingTabs";
import { FormProvider, useForm } from "react-hook-form";
import { adminSettingsSchema, AdminSettingsType } from "@/src/schema/adminSettings.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Resolver } from "react-hook-form";

const SettingPage = () => {
  const methods = useForm<AdminSettingsType>({
    resolver: zodResolver(adminSettingsSchema) as Resolver<AdminSettingsType>,
    defaultValues: {
      local: false,
      digitalOceanSpace: false,
    },
    mode: "onSubmit",
  });

  const onSubmit = (data: AdminSettingsType) => {
    console.warn("Submitted data:", data);
  };

  const onError = (errors: any) => {
    console.error("Validation errors:", errors);
    console.error("Please fix the validation errors before saving.");
  };

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit, onError)}>
          <div className="bg-[#F3F4F6] rounded-2xl p-2 md:px-9 md:py-6">
            <div className="flex justify-between items-center mb-4 sm:mb-2">
              <h3 className="text-2xl font-semibold mb-4">Settings</h3>
              <Button
                type="submit"
                className="rounded-full bg-black p-3 md:p-6 text-sm font-medium text-white transition-colors hover:bg-gray-800"
              >
                Save changes
              </Button>
            </div>
            <SettingTabs />
          </div>
        </form>
      </FormProvider>
    </>
  )
}

export default SettingPage