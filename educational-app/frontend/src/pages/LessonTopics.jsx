import React from "react";
import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";

import TopNavbar from "../components/TopNavbar.jsx";
import Navbar from "../components/NavBar.jsx";

import { LessonsData } from "../data/LessonsData.js";

export default function LessonTopics() {
  const navigate = useNavigate();
  const { gradeId, subjectName } = useParams();

  const numericGradeId = Number(gradeId);
  const gradeTheme = LessonsData[numericGradeId]?.theme;

  const units =
    LessonsData[numericGradeId]?.subjects?.[subjectName]?.units || [];

  return (
    <div
      className={`min-h-screen ${gradeTheme?.bgColor} pt-28 pb-24 p-6 bg-cover bg-center`}
      style={{
        backgroundImage: `url(${gradeTheme?.bgImage})`,
      }}>

      <TopNavbar />

      {/* HEADER */}
      <div className="relative flex items-center justify-center mb-6">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 120 }}
          className="
            relative text-center px-12 py-6
            rounded-3xl
            bg-red-600
            shadow-[0_10px_0px_rgba(0,0,0,0.2)]
          ">

          <motion.h1
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
            className="
              text-5xl md:text-6xl
              font-fredoka font-extrabold
              text-white
              drop-shadow-[0_4px_0px_rgba(0,0,0,0.4)]
            "
          >
            ✨ Topics ✨
          </motion.h1>

          <div
            className="
              mt-4 inline-flex items-center gap-2
              px-6 py-2
              bg-white text-pink-600 font-extrabold
              rounded-full
              shadow-lg
            "
          >
            {subjectName}
          </div>
        </motion.div>
      </div>

      {/* TOPIC CARDS */}
        <div className="flex flex-col gap-8 py-8">
          {units.map((unit, index) => (
            <motion.div
              key={unit.unitId}
              whileHover={{ scale: 1.05, y: -8 }}
              whileTap={{ scale: 0.95 }}
              className="
                w-[90%]
                md:w-[75%]
                lg:w-[60%]
                xl:w-[50%]
                mx-auto
                bg-white
                rounded-3xl
                shadow-[0_8px_20px_rgba(0,0,0,0.18)]
                overflow-hidden
                cursor-pointer
              "
              onClick={() =>
                navigate(`/lessons/${gradeId}/${subjectName}/${unit.unitId}`)
              }
            >
              <div className="flex flex-col lg:flex-row items-stretch">

                {/* LEFT SIDE */}
                <div
                  className="
                    w-full lg:w-1/2
                    p-6
                    bg-blue-100
                    sm:bg-yellow-100
                    md:bg-green-100
                    lg:bg-pink-100
                    flex flex-col justify-center
                  "
                >

                  {/* Section */}
                  <p className="mt-2 text-sm font-medium">
                    Section {index + 1}
                  </p>

                  {/* Title */}
                  <p className="mt-2 font-bold text-lg">
                    {unit.title}
                  </p>

                  {/* Progress */}
                  <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                    <div
                      className="bg-green-500 h-full"
                      style={{
                        width: `${unit.lessons.length > 0 ? 100 : 0}%`,
                      }}
                    />
                  </div>

                  {/* Start / Continue button (desktop only) */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // prevents card onClick from triggering twice
                      navigate(
                        `/lessons/${gradeId}/${subjectName}/${unit.unitId}`
                      );
                    }}
                    className="
                      hidden lg:block
                      mt-4
                      w-full
                      bg-green-500
                      hover:bg-green-600
                      text-white
                      font-bold
                      py-3
                      rounded-2xl
                      transition
                    "
                  >
                    {unit.lessons.length > 0 ? "Continue" : "Start"}
                  </button>
                </div>

                {/* RIGHT SIDE */}
                <div className="w-full lg:w-1/2 flex items-center justify-center gap-6 p-6">

                  {/* Speech bubble */}
                  <div className="relative bg-yellow-200 rounded-xl px-4 py-2 inline-block">
                    <p className="font-bold">{unit.title}</p>
                    <div className="absolute top-1/2 -right-2 w-4 h-4 bg-yellow-200 rotate-45 -translate-y-1/2"></div>
                  </div>

                  {/* Image */}
                  <img
                    src={unit.image}
                    alt={unit.title}
                    className="w-28 h-28 object-contain"
                  />
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      <Navbar />
    </div>
  );
}