// src/pages/SubjectLessons.jsx

import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { LessonsData } from "../data/LessonsData.js";

export default function SubjectLessons() {

  const navigate = useNavigate();
  const { gradeId, subjectName } = useParams();

  // Get lessons for selected grade + subject
  const lessons = LessonsData[gradeId]?.[subjectName] || [];

  return (
    <div className="min-h-screen bg-blue-500 p-6 text-white">
      <h1 className="text-3xl font-bold mb-6">{subjectName} Lessons </h1>

      <div className="grid gap-4">
        {lessons.map((lesson) => (
          <motion.div
            key={lesson.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate(`/lesson/${gradeId}/${subjectName}/${lesson.id}`)}
            className="bg-white text-black p-4 rounded-xl shadow cursor-pointer"
          >
            {lesson.title}
          </motion.div>
        ))}
      </div>
    </div>
  );
}