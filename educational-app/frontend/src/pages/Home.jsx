import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-blue-100 flex flex-col items-center justify-center text-center px-6">

      {/* Mascot */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 1 }}
        className="mb-6"
      >
        {/* Replace with your mascot component */}
        <div className="w-[120px] h-[120px] bg-white rounded-full shadow-lg flex items-center justify-center">
          🐱
        </div>
      </motion.div>

      {/* Text */}
      <h1 className="text-2xl font-bold mb-2">
        Hi there! 👋
      </h1>
      <p className="text-lg mb-6">
        Let’s learn together!
      </p>

      {/* Main Button */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.05 }}
        className="bg-yellow-400 text-black text-xl font-bold py-4 px-8 rounded-full shadow-lg"
      >
        Let’s Start!
      </motion.button>

      {/* Parent option */}
      <button className="mt-6 text-sm text-gray-600 underline">
        For Parents
      </button>

    </div>
  );
}