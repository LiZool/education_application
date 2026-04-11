import React from "react";
import { motion } from "framer-motion";

/* images */
import character from "../assets/images/png-bzcku_monkey.png"
import border from "../assets/images/border/border.png"

export default function Welcome() {
  return (
    <div className="min-h-screen bg-green-400 flex flex-col items-center justify-center text-center px-6">
      {/* Text */}
      <h1 className="text-2xl font-bold mb-2">
        Kids Education
      </h1>
      <p className="text-lg mb-6">
        Play, learn and grow
      </p>

        <div className="relative w-full max-w-[1000px] aspect-[3/1] mt-20">

        {/* Character (BACK) */}
        <motion.img
          src={character}
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 1 }}
          className="absolute -top-20 left-[42%] -translate-x-1/2 w-[200px] z-0"
        />

        {/* Border (MIDDLE) */}
        <img
          src={border}
          className="absolute inset-0 top-10 w-full h-full object-contain pointer-events-none z-10"
        />

        {/* Buttons (FRONT) */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 -translate-y-1 translate-x-5 z-20">
          <button> Start </button>
          <button> Progress </button>
          <button> Achivement </button>
        </div>
    </div>


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