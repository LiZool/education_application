/*** Welcome.jsx Page ***/

import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

/* images */
import character from "../assets/images/childrenbook.png"
import border from "../assets/images/border/border3v2.png"
import border_2 from "../assets/images/border/border3v2_2.png"
import arrow_start from "../assets/images/arrow_start.png"

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#3B82F6] flex flex-col items-center justify-center text-center px-6">
      <div className="absolute top-10 left-10 w-16 h-16 bg-yellow-300 rounded-full opacity-70 blur-sm"></div>
      <div className="absolute bottom-10 right-10 w-20 h-20 bg-pink-400 rounded-full opacity-60 blur-sm"></div>
      <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-green-400 rounded-full opacity-60 blur-sm"></div>
      <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-2xl w-full max-w-[500px] text-center">
          {/* Title text */}
          <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-extrabold mb-2 text-white"
            >
              <span className="text-[#58CC02]">Kids</span>{" "}
              <span className="text-[#FFD93D]">Education</span>
              
              
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-base md:text-lg text-white/90 mb-6"
            >
              <h1>
                <span className="font-fredoka text-2xl md:text-3xl font-bold text-[#58CC02]">Let’s</span>{" "}
                <span className="font-fredoka text-2xl md:text-3xl font-bold text-[#FFD93D]">Play & Learn!</span>
              </h1>
          </motion.p>
          
          {/* Welcome Content */}
          <div className="relative w-full flex flex-col items-center mt-10">
            {/* Character */}
            <motion.img
              src={character}
              className="w-[240px] relative z-0 mb-[-40px]"
            />

            {/* Options */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 1 }}
              className="relative w-full z-10 -mt-16 md:-mt-10">
              <img src={border} className="hidden md:block w-full object-contain" />
              <img src={border_2} className="block md:hidden w-[85%] mx-auto" />

              <div className="absolute inset-0 flex flex-col gap-x-9 md:flex-row items-center justify-center gap-8 lg:gap-12 -translate-y-4 translate-x-2 md:translate-y-0">

                <motion.button 
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="text-white text-base hover:text-[#58CC02] hover:text-xl hover:font-bold">
                  Lessons
                </motion.button>

                <motion.button 
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="text-white text-base hover:text-[#58CC02] text-xl">
                  Progress
                </motion.button>

                <motion.button 
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="text-white text-base hover:text-[#58CC02] text-xl">
                  Achievement
                </motion.button>
              </div>
            </motion.div>

          </div>
        
          {/* Arrow Start Button */}
          <motion.div
            onClick={() => navigate("/lesson/1")}
            animate={{ 
              scale: [1, 1.08, 1],
              y: [0, -6, 0]
            }}
            whileHover={{ scale: 1.15, filter: "brightness(1.1)" }}
            whileTap={{ scale: 0.95 }}
            className="mt-[-30px] md:mt-3 relative flex items-center justify-center cursor-pointer"
          >
            <img
              src={arrow_start}
              className="w-[200px] md:w-[200px]"
            />

            <span className="
              absolute top-1/2 left-1/2 
              -translate-x-1/2 -translate-y-1/2 
              text-white font-bold drop-shadow-md 
              text-lg md:text-xl
            ">
              START
            </span>
          </motion.div>
      </div>
    </div>
);}