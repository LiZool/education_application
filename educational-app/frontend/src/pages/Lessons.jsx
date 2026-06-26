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
                {/* UNIT HEADER */}
                <div className="flex justify-center mb-8">
                  <div
                    className="
                      w-full max-w-xl
                      bg-green-500
                      text-white
                      rounded-3xl
                      px-6 py-5
                      shadow-xl
                      flex items-center gap-4
                    "
                  >
                    {/* Back Arrow */}
                    <button
                      onClick={() => navigate(-1)}
                      className="
                        w-12 h-12
                        rounded-full
                        bg-white/20
                        flex items-center justify-center
                        text-2xl
                        hover:scale-110
                        transition
                      "
                    >
                      ←
                    </button>

                    {/* Text Wrapper */}
                    <div className="flex flex-col flex-1">
                      <p className="text-sm font-bold opacity-80 uppercase tracking-wide">
                        Section {unit.unitId}
                      </p>

                      <h2 className="text-2xl font-bold leading-tight break-words">
                        {unit.title}
                      </h2>
                    </div>
                  </div>
                </div>

                {/* SECTION TITLE */}
                <div className="flex justify-center mb-6">
                  <div className="w-full max-w-xl flex items-center gap-4 px-2">
                    {/* Left line */}
                    <div className="flex-1 h-[3px] bg-white rounded-full opacity-70"></div>

                    {/* Title */}
                    <h2 className="text-3xl font-bold text-white whitespace-nowrap">
                      {unit.title}
                    </h2>

                    {/* Right line */}
                    <div className="flex-1 h-[3px] bg-white rounded-full opacity-70"></div>
                  </div>
                </div>

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
                            navigate(`/lesson/${gradeId}/${subjectName}/${unit.unitId}/${lesson.id}`)
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