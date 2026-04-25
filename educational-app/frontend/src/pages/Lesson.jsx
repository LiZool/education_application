/*** Lesson.jsx Page ***/

import React from "react";
import { motion } from "framer-motion";

/* Images - Icons */
import IconHome from "../assets/images/icons/IconHome.png"
import IconHomeHover from "../assets/images/icons/IconHomeHover.png"
import IconLesson from "../assets/images/icons/IconLesson.png"
import IconLessonHover from "../assets/images/icons/IconLessonHover.png"
import IconAchievement from "../assets/images/icons/IconAchievements.png"
import IconAchievementHover from "../assets/images/icons/IconAchievementsHover.png"
import IconActivity from "../assets/images/icons/IconActivity.png"
import IconActivityHover from "../assets/images/icons/IconActivityHover.png"

/* Images - Icons */
import PopHover from "../assets/sfx/sfxpop.mp3"

function NavItem({ icon, hoverIcon, label }) {
  const audioRef = React.useRef(null);

  if (!audioRef.current) {
    audioRef.current = new Audio(PopHover);
    audioRef.current.volume = 0.4;
  }

  return (
    <motion.button
      onHoverStart={() => {
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch(() => {});
      }}

      initial={{ scale: 1, y: 0, rotate: 0 }}

      whileHover={{
        scale: 1.5,
        y: -2,
      }}

      animate={{
        scale: 1,
        y: 0,
        rotate: 0,
      }}

      transition={{
        type: "spring",
        stiffness: 500,
        damping: 10,
      }}

      className="group flex flex-col items-center text-sm relative"
    >
      <motion.div
        className="absolute w-14 h-14 rounded-full opacity-0"
        whileHover={{
          scale: [0.8, 1.4, 1],
          opacity: [0, 0.6, 0],
        }}
        transition={{ duration: 0.4 }}
      />

      <motion.img
        src={icon}
        className="w-9 h-9 group-hover:hidden relative z-10 transition-all duration-200"
      />

      <motion.img
        src={hoverIcon}
        className="w-9 h-9 hidden group-hover:block relative z-10 transition-all duration-200"
        whileHover={{
          rotate: [0, -10, 10, -5, 0],
        }}
        transition={{ duration: 0.4 }}
      />
      <span
        className="
          mt-1 text-sm
          transition-all duration-200
          group-hover:hidden
          hidden sm:block"
      >
        {label}
      </span>
    </motion.button>
  );
}

export default function Lesson() {
    React.useEffect(() => {
      const unlock = () => {
        const audio = new Audio(PopHover);
        audio.volume = 0;
        audio.play().then(() => {
          audio.pause();
        }).catch(() => {});

        window.removeEventListener("pointermove", unlock);
        window.removeEventListener("pointerdown", unlock);
      };

      // trigger on ANY early interaction
      window.addEventListener("pointermove", unlock);
      window.addEventListener("pointerdown", unlock);

      return () => {
        window.removeEventListener("pointermove", unlock);
        window.removeEventListener("pointerdown", unlock);
      };
    }, []);
  
  return (
    <div className="min-h-screen bg-blue-500 flex flex-col">

      {/* 🔝 TOP BAR */}
      <div className="w-full px-6 py-4 flex justify-between items-center bg-blue-600 text-white">
        <div>
          <p className="text-sm opacity-80">Welcome back</p>
          <h2 className="font-bold text-lg">User Name</h2>
        </div>

        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-500 font-bold">
          U
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 grid grid-cols-2 gap-4 pt-2 px-2">
        {[
            "Mathematics",
            "Science",
            "English",
            "Malay",
            "Technology",
            "Biology"
          ].map((subject, index) => (
            <div
              key={index}
              className="bg-white rounded-full w-full max-w-[230px] aspect-square mx-auto shadow-md flex flex-col items-center justify-center hover:scale-105 transition-all duration-200 cursor-pointer"
            >
              <div className="text-2xl mb-1">📘</div>
              {/* Subject Name */}
              <h3 className="text-sm font-bold text-center">
                {subject}
              </h3>

              {/* Progress Bar */}
              <div className="w-3/4 h-2 bg-gray-200 rounded-full mt-3 overflow-hidden">
                <div
                  className="h-full bg-blue-500"
                  style={{ width: `${(index + 1) * 15}%` }} // fake progress for now
                />
              </div>


              {/* Percentage */}
              <p className="text-xs mt-1 opacity-70">
                {(index + 1) * 15}%
              </p>
            </div>
          ))}

      </div>

      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-[600px]">
        <div className="bg-white/40 backdrop-blur-md rounded-2xl flex justify-center items-center gap-16 py-4"> 
        {/*  <div className="bg-white/40 backdrop-blur-md rounded-2xl flex justify-center items-center gap-16 py-4">  */}
          <NavItem icon={IconHome} hoverIcon={IconHomeHover} label="Home" />
          <NavItem icon={IconLesson} hoverIcon={IconLessonHover} label="Lessons" />
          <NavItem icon={IconActivity} hoverIcon={IconActivityHover} label="Progress" />
          <NavItem icon={IconAchievement} hoverIcon={IconAchievementHover} label="Awards" />
        </div>
      </div>
    </div>
  );
}