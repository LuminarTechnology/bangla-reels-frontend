"use client";

import React from "react";
import { motion } from "framer-motion";

const Error: React.FC = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-red-500/20 px-4 text-white">
      {/* Background animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-rose-600/20 via-red-500/10 to-black blur-3xl"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        style={{ backgroundSize: "300% 300%" }}
      />

      <motion.div
        className="relative w-full max-w-md space-y-8 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Error Icon */}
        <motion.div
          className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-rose-500 to-rose-600 shadow-lg"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.1, 1] }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01M12 5a7 7 0 100 14 7 7 0 000-14z"
            />
          </motion.svg>
        </motion.div>

        {/* Error Message */}
        <div className="space-y-2">
          <motion.h1
            className="text-2xl font-bold"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Oops! Something went wrong
          </motion.h1>
          <motion.p
            className="text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            We couldn’t load your content. Please try again.
          </motion.p>
        </div>

        {/* Buttons */}
        <motion.div
          className="space-y-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <button
            onClick={() => window.location.reload()}
            className="w-full rounded-lg bg-rose-500 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-rose-600 focus:ring-2 focus:ring-rose-400 focus:ring-offset-2 focus:ring-offset-black focus:outline-none"
          >
            Try Again
          </button>

          <button
            onClick={() => (window.location.href = "/")}
            className="w-full rounded-lg bg-gray-800 px-6 py-3 font-semibold text-gray-300 transition hover:bg-gray-700 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-black focus:outline-none"
          >
            Go Home
          </button>
        </motion.div>

        {/* Help text */}
        <motion.p
          className="text-xs text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          If the problem continues, contact our support team.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Error;
