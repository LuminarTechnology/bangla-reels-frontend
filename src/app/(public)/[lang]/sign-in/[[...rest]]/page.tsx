"use client";
import { useLocale } from "@/src/app/LocaleProvider";
import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  const { lang } = useLocale();
  return (
    <div className="my-4 flex min-h-screen items-center justify-center md:my-8">
      <SignIn
        path={`/${lang}/sign-in`}
        routing="path"
        signUpUrl={`/${lang}/sign-up`}
        afterSignInUrl={`/${lang}`}
        afterSignOutUrl={`/${lang}`}
        afterSignUpUrl={`/${lang}`}
        appearance={{
          elements: { card: "shadow-none border-none" },
        }}
      />
    </div>
  );
}
