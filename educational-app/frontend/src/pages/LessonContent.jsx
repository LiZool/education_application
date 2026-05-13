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

      <h1 className="text-4xl font-bold mb-6">
        {lesson.title}
      </h1>

      <div className="bg-white text-black rounded-2xl p-6 shadow-lg">

        <p className="text-lg leading-relaxed">
          <div className="space-y-4">
          {lesson.content.map((block, index) => {

            if (block.type === "text") {
              return (   
                <p
                  key={index}
                  className="text-lg leading-relaxed"
                >
                  {block.value}
                </p>
              );
            }

            if (block.type === "image") {
              return (
                <img
                  key={index}
                  src={block.value}
                  className="rounded-xl w-full"
                />
              );
            }

            return null;
          })}

        </div>
        </p>

        <button
          onClick={() => navigate(lesson.game)}

          className="
            mt-6
            bg-yellow-400
            hover:bg-yellow-300
            text-black
            font-bold
            px-6 py-3
            rounded-xl
          "
        >
          Start Quiz
        </button>

      </div>

    </div>
  );
}