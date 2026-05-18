// src/pages/LessonContent.js

import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { LessonsData } from "../data/LessonsData.js";

export default function LessonContent() {

  const navigate = useNavigate();

  const {
    gradeId,
    subjectName,
    lessonId
  } = useParams();

  // Find selected lesson
  const lesson =
    LessonsData[gradeId]?.[subjectName]?.find(
      (l) => l.id === Number(lessonId)
    );

  // If lesson doesn't exist
  if (!lesson) {
    return (
      <div className="min-h-screen bg-blue-500 flex items-center justify-center text-white text-2xl">
        Lesson not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-blue-500 p-6 text-white">

      <div className="relative flex items-center justify-center mb-6">

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
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

        <h1 className="text-4xl font-bold text-white text-center">
          {lesson.title}
        </h1>

      </div>

      <div className="bg-white text-black rounded-2xl p-6 shadow-lg">
        <div className="space-y-4">
          {lesson.content.map((item, index) => {

            if (item.type === "text") {
              return (
               <p
                  key={index}
                  className="
                    text-2xl
                    leading-relaxed
                    text-center
                    font-bold
                    text-gray-700
                  "
                >
                  {item.value
                    .split(/(\d+|\+|\-|\=)/g)
                    .map((part, i) => {

                      // Highlight numbers
                      if (part === "6") {
                        return (
                          <span
                            key={i}
                            className="inline-block text-red-500 text-6xl animate-bounce"
                          >
                            {part}
                          </span>
                        );
                      }

                      if (part === "4") {
                        return (
                          <span
                            key={i}
                            className="inline-block text-green-500 text-6xl animate-bounce"
                          >
                            {part}
                          </span>
                        );
                      }

                      if (part === "10") {
                        return (
                          <span
                            key={i}
                            className="inline-block text-purple-500 text-7xl animate-bounce"
                          >
                            {part}
                          </span>
                        );
                      }

                      // Highlight, math symbols
                      if (["+", "-", "="].includes(part)) {
                        return (
                          <span
                            key={i}
                            className="
                              text-blue-500
                              text-4xl
                              mx-2
                              font-extrabold
                            "
                          >
                            {part}
                          </span>
                        );
                      }

                      return part;
                    })}
                </p>
              );
            }

            if (item.type === "image") {
              return (
                <img
                  key={index}
                  src={item.value}
                  alt=""
                  className="rounded-xl w-full"
                />
              );
            }

            return null;
          })}
        </div>

        <div className="flex justify-center mt-4">
          <button
            onClick={() => navigate(lesson.quizRoute)}
            className="
              mt-6
              bg-yellow-400
              hover:bg-yellow-300
              text-black
              font-bold
              px-8 py-4
              rounded-2xl
              hover:scale-125
              transition
            "
          >
            Start Quiz
          </button>
        </div>
      </div>

    </div>
  );
}