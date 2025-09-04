import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/src/components/ui/button";

interface NotFoundProps {
  title?: string;
  message?: string;
  showButton?: boolean;
  buttonText?: string;
  buttonLink?: string;
  className?: string;
}

export default function NotFound({
  title,
  message,
  showButton = true,
  buttonText = "Go back home",
  buttonLink = "/",
  className,
}: NotFoundProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-6 p-8 text-center ${className}`}
    >
      <Image
        src="/images/404NotFound.png"
        alt="Not Found Illustration"
        width={400}
        height={300}
        className="max-w-xs md:max-w-sm"
      />

      {title && (
        <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
      )}
      {message && (
        <p className="max-w-md text-gray-500">
          {message}
        </p>
      )}

      {showButton && (
        <Link href={buttonLink}>
          <Button variant="danger" size="lg">
            {buttonText}
          </Button>
        </Link>
      )}
    </div>
  );
}