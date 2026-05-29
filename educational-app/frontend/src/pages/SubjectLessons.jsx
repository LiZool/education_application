// src/pages/SubjectLessons.jsx

import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { LessonsData } from "../data/LessonsData.js";

export default function SubjectLessons() {

  const navigate = useNavigate();
  const { gradeId, subjectName } = useParams();

  const lessons =
    LessonsData[gradeId]?.[subjectName] || [];

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-400 to-blue-600 p-6">

      {/* TOP HEADER */}
      <div className="relative flex items-center justify-center mb-8">

        {/* Back Button */}
        <button
          onClick={() => navigate(`/subjects/${gradeId}`)}
          className="
            absolute left-0
            bg-white
            text-black
            px-4 py-2
            rounded-xl
            shadow-md
            hover:scale-105
            transition
          "
        >
          ← Back
        </button>

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
      <div className="flex flex-col gap-0">

        {lessons.map((lesson, index) => (

          <motion.div
            key={lesson.id}

            whileHover={{
              scale: 1.02,
              y: -2
            }}

            whileTap={{
              scale: 0.98
            }}

            onClick={() =>
              navigate(
                `/lesson/${gradeId}/${subjectName}/${lesson.id}`
              )
            }

            className={`
              bg-white
              shadow-lg
              px-4 py-3
              cursor-pointer
              flex
              items-center
              justify-between
              border-b border-gray-200

              ${index === 0 ? "rounded-t-2xl" : ""}
              ${index === lessons.length - 1 ? "rounded-b-2xl border-b-0" : ""}
            `}
          >

            {/* LEFT */}
            <div className="flex items-center gap-3">

              {/* Lesson Number */}
              <div className="
                w-10 h-10
                rounded-full
                bg-yellow-400
                flex items-center justify-center
                text-lg
                font-bold
                text-white
              ">
                {index + 1}
              </div>

              {/* Lesson Info */}
              <div>
                <h2 className="text-lg font-bold text-gray-800">
                  {lesson.title}
                </h2>

                <p className="text-sm text-gray-500">
                  Tap to start
                </p>
              </div>

            </div>

            {/* RIGHT ICON */}
            <div className="text-2xl">
              📘
            </div>

          </motion.div>
        ))}
      </div>
    </div>
  );
}