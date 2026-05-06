// src/pages/LessonContent.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { lessonsData } from "../data/lessons";

export default function LessonContent() {
  const { subject, lesson } = useParams();
  const lessonId = Number(lesson);

  const currentLesson = lessonsData[subject]?.[lessonId];

  if (!currentLesson) {
    return <div className="text-white">Lesson not found</div>;
  }


  return (
    <div className="min-h-screen bg-blue-500 p-6 text-white">
      <h1 className="text-3xl font-bold mb-4">
        {subject} - Lesson {lesson}
      </h1>

      <div className="bg-white text-black p-6 rounded-xl">
        <p>{currentLesson.content}</p>
      </div>
    </div>
  );
}