"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const messages = [
  "Finding your next story...",
  "Loading amazing short films...",
  "Almost ready to stream!",
];

const Loading = () => {
  const [index, setIndex] = useState(0);

  // Rotate messages every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black text-white">
      {/* Animated background glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-rose-600/20 via-purple-700/20 to-black blur-3xl"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{ backgroundSize: "300% 300%" }}
      />

      {/* App Title */}
      <motion.h1
        className="z-10 text-4xl font-extrabold tracking-wide"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        ReelShort
      </motion.h1>

      {/* Animated Rotating Messages */}
      <div className="text-md relative z-10 mt-3 flex h-6 w-full items-center justify-center text-gray-400">
        <AnimatePresence mode="wait">
          <motion.span
            key={index} // unique key so AnimatePresence works
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute"
          >
            {messages[index]}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* Shimmer progress bar */}
      <div className="z-10 mt-6 h-1 w-44 overflow-hidden rounded-full bg-gray-800">
        <motion.div
          className="h-full w-1/2 bg-gradient-to-r from-rose-500 via-pink-400 to-purple-500"
          animate={{ x: ["-100%", "200%"] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
        />
      </div>
    </div>
  );
};

export default Loading;
