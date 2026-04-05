
import React from "react";
import { motion } from "framer-motion";

import body from "../assets/mascot/mascot_body.png"
import larm from "../assets/mascot/mascot_leftarmupdate2.png"
import rarm from "../assets/mascot/mascot_rightarm.png"
import tail from "../assets/mascot/mascot_tail.png"


export default function SplashScreen() {
  return (
    <div className="flex items-center justify-center h-screen bg-blue-900">
      <div className="relative w-[120px] h-[120px]">

        {/* Spinning Ring */}
        <motion.svg
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          width="200"
          height="200"
          viewBox="0 0 200 200"
        >
          <circle
            cx="100"
            cy="100"
            r="90"
            stroke="#00FFFF"
            strokeWidth="4"
            fill="none"
            strokeDasharray="565"
            strokeDashoffset="565"
          >
            <motion.animate
              attributeName="stroke-dashoffset"
              from="565"
              to="0"
              dur="1.5s"
              repeatCount="indefinite"
            />
          </circle>
        </motion.svg>

        {/* Tail */}
        <motion.img
          src={tail}
          style={{
          position: 'absolute',
            top: '30%',      // adjust vertical
            right: '18%',   // outside right
            width: '23%',
            transformOrigin: 'top left' // pivot at shoulder
          }}
          transition={{
            repeat: Infinity,
            duration: 1.2,
            ease: "easeInOut"
          }}
        />

        {/* Body */}
        <img 
          src={body} 
          className="w-full h-full object-contain"
        />

        {/* Left Arm */}
        <motion.img
          src={larm}
          style={{
            position: 'absolute',
            top: '62%',
            left: '10%',
            width: '23%',
            transformOrigin: '50% -15%' 
          }}
          animate={{
            x: [-14, 14, -6, 6, -4],
            rotate: [-7, 7, -3, 10, -4],
            scale: [1, 1.03, 0.98, 1.04, 1]
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "mirror",
            ease:  [0.45, 0, 0.55, 1]
          }}
        />

        {/* Right Arm */}
        <motion.img
          src={rarm}
          style={{
          position: 'absolute',
            top: '63%',      // adjust vertical
            right: '35%',   // outside right
            width: '23%',
            transformOrigin: 'top left' // pivot at shoulder
          }}
          transition={{
            repeat: Infinity,
            duration: 1.2,
            ease: "easeInOut"
          }}
        />
      </div>
    </div>
  );
}