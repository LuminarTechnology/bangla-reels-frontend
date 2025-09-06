"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function GlobalError() {
  const [showDetails, setShowDetails] = useState(false);

  const fakeError = {
    message: "Unexpected application crash. Please try again.",
    digest: "ERR-500-XYZ",
  };

  useEffect(() => {
    console.error("Global Error Captured:", fakeError);
  }, []);

  return (
    <html>
      <body className="bg-red-500/20 font-sans text-white antialiased">
        <div className="relative flex min-h-screen items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="z-10 w-full max-w-lg space-y-8 text-center"
          >
            {/* Error Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-rose-500 via-red-500 to-red-600 shadow-2xl"
            >
              <svg
                className="h-14 w-14 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </motion.div>

            {/* Title */}
            <div className="space-y-3">
              <h1 className="text-3xl font-extrabold tracking-tight">Something Went Wrong</h1>
              <p className="text-lg text-gray-300">
                Oops! The app ran into an issue. Let’s get you back on track.
              </p>
            </div>

            {/* Actions */}
            <div className="space-y-4">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.reload()}
                className="w-full rounded-xl bg-gradient-to-r from-rose-500 to-rose-600 px-8 py-4 font-semibold text-white shadow-lg transition-colors hover:from-rose-600 hover:to-rose-700 focus:outline-none"
              >
                Reload Page
              </motion.button>

              <div className="flex space-x-4">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => (window.location.href = "/")}
                  className="flex-1 rounded-xl bg-gray-800 px-6 py-3 font-semibold text-gray-300 transition-colors hover:bg-gray-700 focus:outline-none"
                >
                  Go Home
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowDetails(!showDetails)}
                  className="flex-1 rounded-xl bg-gray-800 px-6 py-3 font-semibold text-gray-300 transition-colors hover:bg-gray-700 focus:outline-none"
                >
                  {showDetails ? "Hide Details" : "Show Details"}
                </motion.button>
              </div>
            </div>

            {/* Error details (toggle) */}
            {showDetails && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 rounded-xl border border-gray-800 bg-gray-900/60 p-4 text-left"
              >
                <p className="mb-2 text-xs text-gray-500">Technical details:</p>
                <p className="font-mono text-sm break-all text-red-400">{fakeError.message}</p>
                <p className="mt-2 text-xs text-gray-500">Error ID: {fakeError.digest}</p>
              </motion.div>
            )}

            {/* Support info */}
            <p className="pt-6 text-sm text-gray-500">
              If this keeps happening, contact{" "}
              <Link href="/support" className="underline decoration-rose-500 hover:text-rose-400">
                support team
              </Link>
              .
            </p>
          </motion.div>

          {/* Animated Background Blobs */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute top-1/4 left-1/6 h-60 w-60 rounded-full bg-rose-500/10 blur-3xl"
          ></motion.div>
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity, delay: 2 }}
            className="absolute right-1/6 bottom-1/4 h-72 w-72 rounded-full bg-red-500/10 blur-3xl"
          ></motion.div>
        </div>
      </body>
    </html>
  );
}
