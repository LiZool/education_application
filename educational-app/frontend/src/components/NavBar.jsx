import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

/* Images Navbar - Icons */
import IconHome from "../assets/images/icons/IconHome.png"
import IconHomeHover from "../assets/images/icons/IconHomeHover.png"
import IconLesson from "../assets/images/icons/IconLesson.png"
import IconLessonHover from "../assets/images/icons/IconLessonHover.png"
import IconAchievement from "../assets/images/icons/IconAchievements.png"
import IconAchievementHover from "../assets/images/icons/IconAchievementsHover.png"
import IconActivity from "../assets/images/icons/IconActivity.png"
import IconActivityHover from "../assets/images/icons/IconActivityHover.png"

/* Sfx  */
import WooshHoversfx from "../assets/sfx/sfxwoosh2.mp3"
import UIsfx1 from "../assets/sfx/UISFX2.mp3"
import UIsfx from "../assets/sfx/UISFX.mp3"

function NavItem({ icon, hoverIcon, label, to }) {
    const navigate = useNavigate();
    const audioRef = React.useRef(null);
    
    if (!audioRef.current) {
        audioRef.current = new Audio(UIsfx1);
        audioRef.current.volume = 0.4;
    }
    
    return (
    <motion.button
        onClick={() => navigate(to)}
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
        transition={{ duration: 0.4 }} />
        <span
            className="
            mt-1 text-sm
            transition-all duration-200
            group-hover:hidden
            hidden sm:block">
            {label}
        </span>
    </motion.button>
  );
}


export default function Navbar() {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-[600px]">
      <div className="bg-white/40 backdrop-blur-md rounded-2xl flex justify-center items-center gap-16 py-4">
        <NavItem icon={IconHome} hoverIcon={IconHomeHover} label="Home" to="/home" />
        <NavItem icon={IconLesson} hoverIcon={IconLessonHover} label="Lessons" to="/subjects" />
        <NavItem icon={IconActivity} hoverIcon={IconActivityHover} label="Progress" />
        <NavItem icon={IconAchievement} hoverIcon={IconAchievementHover} label="Awards" />
      </div>
    </div>
  );
}