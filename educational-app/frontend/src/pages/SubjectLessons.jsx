// src/pages/SubjectLessons.jsx

import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import TopNavbar from "../components/TopNavbar";
import Navbar from "../components/NavBar";

import { LessonsData } from "../data/LessonsData.js";

export default function SubjectLessons() {
  const navigate = useNavigate();
  const { gradeId, subjectName } = useParams();

  // 1. FIRST: get lessons
  const lessons =
    (LessonsData[gradeId]?.[subjectName] || [])
      .flatMap(unit => unit.lessons || []);

  // 2. SECOND: build rows
  const rows = [];

  let index = 0;

  // Row 1 = 1 lesson
  rows.push(lessons.slice(index, index + 1));
  index += 1;

  // Row 2 = 2 lessons
  rows.push(lessons.slice(index, index + 2));
  index += 2;

  // Row 3 = 2 lessons each
  while (index < lessons.length) {
    rows.push(lessons.slice(index, index + 2));
    index += 2;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-400 to-blue-600 pt-24 pb-24 p-6">
      <TopNavbar />
      
      {/* TOP HEADER */}
      <div className="relative flex items-center justify-center mb-8">
        {/* Subject Title */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white">
            {subjectName}
          </h1>

          <p className="text-white/80">
            Grade {gradeId} Lessons
          </p>
        </div>
      </div>

      {/* LESSON LIST */}
      <div className="flex flex-col items-center gap-10 py-10">

        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="flex justify-center gap-10"
          >

            {row.map((lesson) => (
              <motion.button
                key={lesson.id}
                onClick={() =>
                  navigate(`/lesson/${gradeId}/${subjectName}/${lesson.id}`)
                }
                className="
                  w-28 h-28
                  rounded-full
                  bg-green-500
                  border-b-8 border-green-700
                  text-white font-bold
                  shadow-xl
                  flex items-center justify-center
                  text-center px-2
                "
                whileHover={{
                  y: -6,
                  boxShadow: "0 0 25px rgba(255,255,255,0.8)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                {lesson.title}
              </motion.button>
            ))}

          </div>
        ))}
        <Navbar />

      </div>
    </div>
  );
}