import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="my-4 flex min-h-screen items-center justify-center md:my-8">
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
