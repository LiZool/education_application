import React from "react";
import { motion } from "framer-motion";

/* images */
import character from "../assets/images/png-bzcku_monkey.png"


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

      {/* Mascot */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 1 }}
        className="mb-6"
      >
        {/* Replace with your mascot component */}
        <div className="w-[120px] h-[120px] bg-white rounded-full shadow-lg flex items-center justify-center">
          <div className="absolute inset-0">
                    {/* Neutral Body */}
                    <motion.img
                      src={character}
                      className="absolute w-full h-full object-contain"
                      animate={{ opacity: [1, 1, 0, 0, 1] }}
                      transition={{
                        duration: 5,
                        times: [0, 0.4, 0.5, 0.9, 1],
                        ease: [0.4, 0, 0.2, 1],
                        repeat: Infinity
                      }}
                    />
                  </div>
        </div>
      </motion.div>


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