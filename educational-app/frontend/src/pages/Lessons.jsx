// src/pages/Lessons.jsx

import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import TopNavbar from "../components/TopNavbar.jsx";
import Navbar from "../components/NavBar.jsx";

import { LessonsData } from "../data/LessonsData.js";

export default function Lessons() {
  const navigate = useNavigate();
  const { gradeId, subjectName } = useParams();

  const numericGradeId = Number(gradeId);

  // Get grade theme
  const gradeTheme = LessonsData[numericGradeId]?.theme;

  // Get units
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
        {/* MAIN CARD */}
        {/* bg-gradient-to-r from-yellow-400 via-pink-400 to-orange-400  */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 120 }}
          className="
            relative text-center px-12 py-6
            rounded-3xl
            bg-red-600 
            shadow-[0_10px_0px_rgba(0,0,0,0.2)]
          "
        >

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
            ✨ {subjectName} ✨
          </motion.h1>

          <div className="
            mt-4 inline-flex items-center gap-2
            px-6 py-2
            bg-white text-pink-600 font-extrabold
            rounded-full
            shadow-lg
          ">
            Grade {gradeId} Adventure
          </div>

        </motion.div>

      </div>

      {/* LESSONS */}
      <div className="flex flex-col items-center gap-12 py-8">
          {units.map((unit) => {

            // create lessons per unit
            const lessons = unit.lessons || [];

            if (!lessons.length) return null;

            // build rows for THIS unit only
            const rows = [];
            let index = 0;

            rows.push(lessons.slice(index, index + 1));
            index += 1;

            rows.push(lessons.slice(index, index + 2));
            index += 2;

            while (index < lessons.length) {
              rows.push(lessons.slice(index, index + 2));
              index += 2;
            }

            return (
              <div key={unit.unitId} className="w-full">

                {/* SECTION TITLE */}
                <h2 className="text-3xl font-bold text-white text-center mb-6">
                  {unit.title}
                </h2>

                {/* ROWS */}
                <div className="flex flex-col items-center gap-8">
                  {rows.map((row, rowIndex) => (
                    <motion.div
                      key={rowIndex}
                      className="flex justify-center gap-10"
                    >
                      {row.map((lesson) => (
                        <motion.button
                          key={lesson.id}
                          onClick={() =>
                            navigate(`/topics/${gradeId}/${subjectName}/${unit.unitId}`)
                          }
                          className="
                            w-28 h-28
                            rounded-full
                            bg-green-400
                            border-4 border-green-300
                            text-white font-fredoka font-bold
                            shadow-[0_8px_20px_rgba(0,0,0,0.18)]
                            flex items-center justify-center
                            text-center text-sm px-3
                          "
                          whileHover={{ scale: 1.15, y: -8 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {lesson.displayTitle || lesson.title}
                        </motion.button>
                      ))}
                      {/*                             
                            w-28 h-28 rounded-full
                            bg-gradient-to-br from-lime-300 to-green-500
                            border-b-8 border-green-700
                            text-white font-fredoka font-bold
                            flex items-center justify-center text-center text-xs px-2*/}
                    </motion.div>
                  ))}

                </div>
              </div>
            );
          })}

        </div>

      <Navbar />

    </div>
  );
}