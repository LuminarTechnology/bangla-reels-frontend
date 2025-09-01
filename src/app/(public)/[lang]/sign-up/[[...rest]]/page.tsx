"use client";
import { useLocale } from "@/src/app/LocaleProvider";
import { SignUp, useAuth, useUser } from "@clerk/nextjs";
import { useEffect } from "react";

export default function SignUpPage() {
  const { lang } = useLocale();
  const { user } = useUser();
  const { getToken } = useAuth();

  useEffect(() => {
    if (!user) return;

    // Backend API call
    const handleAfterSignUp = async (user: any) => {
      try {
        // Fetch fresh Clerk session token for backend verification
        const token = await getToken();

        // Call your backend API to sync user
        await fetch(`http://localhost:5000/api/v1/auth/signup`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            email: user.emailAddresses[0].emailAddress,
            name: user.firstName,
            avatar: user.imageUrl,
          }),
        });
      } catch (err) {
        console.error("Error syncing user with backend:", err);
      }
    };

    handleAfterSignUp(user);
  }, [user, lang]);

  return (
    <div className="my-4 flex min-h-screen items-center justify-center md:my-8">
      <SignUp
        path={`/${lang}/sign-up`}
        routing="path"
        signInUrl={`/${lang}/sign-in`}
        afterSignUpUrl={`/${lang}`}
        // fallbackRedirectUrl={`/${lang}`}
        appearance={{
          elements: { card: "shadow-none border-none" },
        }}
      />
    </div>
  );
}
