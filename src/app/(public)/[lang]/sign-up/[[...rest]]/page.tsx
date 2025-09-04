"use client";
import { useLocale } from "@/src/app/LocaleProvider";
import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  const { lang } = useLocale();

  return (
    <div className="my-4 flex min-h-screen items-center justify-center md:my-8">
      <SignUp
        path={`/${lang}/sign-up`}
        routing="path"
        signInUrl={`/${lang}/sign-in`}
        afterSignUpUrl={`/${lang}`}
        afterSignOutUrl={`/${lang}`}
        fallbackRedirectUrl={`/${lang}`}
        appearance={{
          elements: { card: "shadow-none border-none" },
        }}
      />
    </div>
  );
}
