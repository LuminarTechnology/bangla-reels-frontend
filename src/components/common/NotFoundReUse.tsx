import React from "react";
import Image from "next/image";

interface NotFoundProps {
  message?: string | null;
  className?: string;
}

const NotFound = ({ message = null, className }: NotFoundProps) => {
  return (
    <div className={`flex flex-col items-center justify-center gap-4 py-8 ${className}`}>
      <Image
        src="/images/NothingInside.png"
        alt="Nothing found illustration"
        width={132}
        height={92}
      />
      {/* only render if any message provided*/}
      {message && (
        <p className="mt-2 text-lg font-semibold text-gray-400">{message}</p>
      )}
    </div>
  );
};

export default NotFound;