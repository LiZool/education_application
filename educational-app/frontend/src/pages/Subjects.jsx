// src/pages/Subjects.js

import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Navbar from "../components/NavBar";
import TopNavbar from "../components/TopNavbar";

import { LessonsData } from "../data/LessonsData.js";
import { SubjectsData } from "../data/SubjectsData";

/* Images - Lessons */
import IconSubjectEnglish from "../assets/images/icons/Subjects/IconSubjectEnglish.png"
import IconSubjectMalay from "../assets/images/icons/Subjects/IconSubjectMalay.png"
import IconSubjectScience from "../assets/images/icons/Subjects/IconSubjectScience.png"
import IconSubjectMaths from "../assets/images/icons/Subjects/IconSubjectMaths.png"
import IconSubjectTechnology from "../assets/images/icons/Subjects/IconSubjectTechnology.png"
import IconSubjectGeography from "../assets/images/icons/Subjects/IconSubjectGeography.png"
import IconSubjectHistory from "../assets/images/icons/Subjects/IconSubjectHistory.png"

/* Sfx  */
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


function LessonCard({ subject, index, gradeId }) {
  const navigate = useNavigate();
  const audioRef = React.useRef(null);
  const [ripples, setRipples] = React.useState([]);

  const createRipple = (e) => {
  const rect = e.currentTarget.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const newRipple = { x, y, id: Date.now() };
  setRipples((prev) => [...prev, newRipple]);

  setTimeout(() => {
    setRipples((prev) => prev.filter(r => r.id !== newRipple.id));
  }, 500);};

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

      onClick={(e) => {
        createRipple(e);
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch(() => {});
        navigate(`/subjects/${gradeId}/${subject?.name ?? subject}`)
      }}

      whileHover={{ y: -10, scale: 1.05 }}
      whileTap={{ scale: 0.92, y: 2 }}

      className="
        group
        relative overflow-hidden
        cursor-pointer
        bg-white rounded-2xl w-full
        shadow-lg hover:shadow-xl
        hover:ring-4 hover:ring-gray-300
        p-4 flex flex-col items-center
      "
    >

      {/* 🔥 PUT RIPPLE HERE */}
      <div className="absolute inset-0 pointer-events-none">
        {ripples.map((r) => (
          <span
            key={r.id}
            className="absolute bg-blue-300 opacity-30 rounded-full animate-ping"
            style={{
              top: r.y,
              left: r.x,
              width: 100,
              height: 100,
              transform: "translate(-50%, -50%)"
            }}
          />
        ))}
      </div>

      {/* NORMAL CONTENT BELOW */}
      <h3 className="text-xl font-bold text-center mb-3">
        {subject.name}
      </h3>

      <img
        src={subject.icon}
        className="w-[70%] mx-auto mb-2 object-contain transition-transform duration-200 group-hover:scale-110"
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
    const { gradeId } = useParams();

    const subjects = SubjectsData[gradeId] || [];

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
      <TopNavbar />

      {/* MAIN CONTENT */}
      <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-8 pt-24 px-6 content-start">
                      {/* flex-1 grid grid-cols-2 gap-3 pt-2 px-4 justify-items-center */}
         {subjects.map((subject, index) => (
            <LessonCard
              key={index}
              subject={subject}
              index={index}
              gradeId={gradeId}
            />
          ))}
      </div>

      <Navbar />
    </div>
  );
}