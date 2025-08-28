import { getRequestConfig, type GetRequestConfigParams } from "next-intl/server";

export default getRequestConfig(async ({ locale }: GetRequestConfigParams) => {
  const currentLocale = locale ?? "en";

  return {
    locale: currentLocale,
    messages: (await import(`@/src/locales/${currentLocale}.json`)).default,
  };
});
