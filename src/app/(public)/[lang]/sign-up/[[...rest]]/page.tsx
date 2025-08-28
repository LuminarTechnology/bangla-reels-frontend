import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="my-4 flex min-h-screen items-center justify-center md:my-8">
      <SignUp
        path="/sign-up"
        routing="path"
        signInUrl="/sign-in"
        afterSignUpUrl="/"
        fallbackRedirectUrl="/"
        appearance={{
          elements: { card: "shadow-none border-none" },
        }}
      />
    </div>
  );
}
