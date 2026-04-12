import React from "react";
import { motion } from "framer-motion";

/* images */
import character from "../assets/images/png-bzcku_monkey.png"
import border from "../assets/images/border/border3v2.png"
import border_2 from "../assets/images/border/border3v2_2.png"

export default function Welcome() {
  return (
    <div className="min-h-screen bg-green-400 flex flex-col items-center justify-center text-center px-6">
      {/* Title text */}
      <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-extrabold mb-2 text-white"
        >
          <span className="text-yellow-300">Kids</span>{" "}
          <span className="text-white">Education</span>
          
          
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-base md:text-lg text-white/90 mb-6"
        >
          <h1>
            <span className="font-fredoka text-2xl md:text-3xl font-bold text-yellow-300">Let’s</span>{" "}
            <span className="font-fredoka text-white">Play & Learn!</span>
          </h1>
      </motion.p>
      
      {/* Welcom Content */}
      <div className="relative w-full max-w-[700px] mt-20">
        {/* Character */}
        <motion.img
          src={character}
          className="
            absolute -top-20 left-[55%] md:left-[50%] 
            -translate-x-1/2
            w-[230px] z-0"
        />

        {/* Wrapper - Border */}
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 1 }}
          className="relative mx-auto mt-20  z-10 ">
            
          {/* Desktop-Tablet-Larger screens */}
          <img
            src={border}
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 1 }}
            className="hidden md:block w-full h-auto object-contain"
          />

          {/* Mobile - Smaller Screens */}
          <img
            src={border_2}
            className="block md:hidden w-[120%] h-auto object-contain mx-auto"
          />

          {/* Buttons */}
          <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center gap-6 lg:gap-10 -translate-y-3 translate-x-2">
            <motion.button 
              whileHover={{ scale: 1.2 }} 
              transition={{ type: "spring", stiffness: 300 }}
              className="text-xl md:text-2xl lg:text-3xl text-white hover:text-yellow-300 transition-colors duration-200">
                <h1> Start </h1>
            </motion.button>

            <motion.button 
              whileHover={{ scale: 1.2 }} 
              transition={{ type: "spring", stiffness: 300 }}
              className="text-xl md:text-2xl lg:text-3xl text-white hover:text-yellow-300 transition-colors duration-200">
                Progress
            </motion.button>

            <motion.button 
              whileHover={{ scale: 1.2 }} 
              transition={{ type: "spring", stiffness: 300 }}
              className="text-xl md:text-2xl lg:text-3xl text-white hover:text-yellow-300 transition-colors duration-200">
                Achievement
            </motion.button>
          </div>
        </motion.div>
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