"use client"
import { Button } from "@/src/components/ui/button";
import SettingTabs from "@/src/components/pages/super-admin/setting/SettingTabs";
import { FormProvider, useForm } from "react-hook-form";

const SettingPage = () => {
  const methods = useForm();
  const onSubmit = (data: any) => console.warn(data)

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className="bg-[#F3F4F6] rounded-2xl p-2 md:px-9 md:py-6">
            <div className="flex justify-between items-center">
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