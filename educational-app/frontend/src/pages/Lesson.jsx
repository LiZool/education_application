/*** Lesson.jsx Page ***/

import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

/* Images - Icons */
import IconHome from "../assets/images/icons/IconHome.png"
import IconHomeHover from "../assets/images/icons/IconHomeHover.png"
import IconLesson from "../assets/images/icons/IconLesson.png"
import IconLessonHover from "../assets/images/icons/IconLessonHover.png"
import IconAchievement from "../assets/images/icons/IconAchievements.png"
import IconAchievementHover from "../assets/images/icons/IconAchievementsHover.png"
import IconActivity from "../assets/images/icons/IconActivity.png"
import IconActivityHover from "../assets/images/icons/IconActivityHover.png"
/* Images - Lessons */
import IconLessonEnglish from "../assets/images/icons/Lessons/IconLessonEnglish.png"
import IconLessonMalay from "../assets/images/icons/Lessons/IconLessonMalay.png"
import IconLessonScience from "../assets/images/icons/Lessons/IconLessonScience.png"
import IconLessonMaths from "../assets/images/icons/Lessons/IconLessonMaths.png"
import IconLessonTechnology from "../assets/images/icons/Lessons/IconLessonTechnology.png"
import IconLessonGeography from "../assets/images/icons/Lessons/IconLessonGeography.png"
import IconLessonHistory from "../assets/images/icons/Lessons/IconLessonHistory.png"

/* Images - Icons */
import WooshHoversfx from "../assets/sfx/sfxwoosh2.mp3"
import UIsfx1 from "../assets/sfx/UISFX2.mp3"
import UIsfx from "../assets/sfx/UISFX.mp3"


/* References */
// https://www.pngfind.com/mpng/JRboTm_free-png-of-library-books-book-library-png/
// https://pixabay.com/sound-effects/search/hover/
// https://www.pngegg.com/en/png-wmaxi/download
// https://www.flaticon.com/free-icon/math_3426679
// https://www.clipartmax.com/download/m2H7i8b1Z5d3b1H7_png-malaysia-icon/
// https://www.flaticon.com/free-icon/geography_3635966
// https://icons-for-free.com/history+tutor+world+globe+icon-1320195955885841255/
// https://www.flaticon.com/free-icon/history_2132336
// https://www.flaticon.com/free-icon/english-language_5003987

function NavItem({ icon, hoverIcon, label }) {
  const audioRef = React.useRef(null);

  if (!audioRef.current) {
    audioRef.current = new Audio(UIsfx1);
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

function LessonCard({ subject, index }) {
  const navigate = useNavigate();
  const audioRef = React.useRef(null);

  if (!audioRef.current) {
    audioRef.current = new Audio(WooshHoversfx);
    audioRef.current.volume = 0.4;
  }

  return (
    <motion.div
      onHoverStart={() => {
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch(() => {});
      }}

      onClick={() => navigate(`/lessons/${subject.name}`)}
      whileHover={{ y: -8, scale: 1.03 }}

      className="
        cursor-pointer
        bg-white rounded-2xl w-full
        shadow-lg hover:shadow-xl
        p-4 flex flex-col items-center
      "
    >
      <h3 className="text-xl font-bold text-center">
        {subject.name}
      </h3>

      <img
        src={subject.icon}
        className="w-[80%] mx-auto mb-2 object-contain"
      />

      <div className="w-3/4 h-2 bg-gray-200 rounded-full mt-3 overflow-hidden">
        <div
          className="h-full bg-blue-500"
          style={{ width: `${(index + 1) * 15}%` }}
        />
      </div>

      <p className="text-xs mt-1 opacity-70">
        {(index + 1) * 15}%
      </p>
    </motion.div>
  );
}

export default function Lesson() {
    const subjects = [
      { name: "English", icon: IconLessonEnglish },
      { name: "Malay", icon: IconLessonMalay },
      { name: "Mathematics", icon: IconLessonMaths },
      { name: "Science", icon: IconLessonScience },
      { name: "Technology", icon: IconLessonTechnology },
      { name: "Geography", icon: IconLessonGeography },
      { name: "History", icon: IconLessonHistory },
    ];

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
      <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 px-6">
                      {/* flex-1 grid grid-cols-2 gap-3 pt-2 px-4 justify-items-center */}
         {subjects.map((subject, index) => (
          <LessonCard key={index} subject={subject} index={index} />
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