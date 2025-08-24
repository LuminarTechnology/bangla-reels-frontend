import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <SignIn
        path="/sign-in"
        routing="path"
        signUpUrl="/sign-up"
        afterSignUpUrl="/"
        fallbackRedirectUrl="/"
        appearance={{
          elements: { card: "shadow-none border-none" },
        }}
      />
    </div>
  );
}
