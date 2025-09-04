"use client";
import { useLocale } from "@/src/app/LocaleProvider";
import { signInToBackend } from "@/src/services/auth/authService";
import { SignIn, useAuth } from "@clerk/nextjs";
import { useEffect, useState } from "react";

export default function SignInPage() {
  const { lang } = useLocale();
  const [loading, setLoading] = useState(false);
  const { getToken, isSignedIn } = useAuth();

  useEffect(() => {
    if (!isSignedIn) return;

    const sync = async () => {
      setLoading(true);
      try {
        const token = await getToken({ template: "backend" });
        console.log("token", token);
        if (!token) return;
        await signInToBackend(token);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    sync();
  }, [isSignedIn, getToken]);

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
