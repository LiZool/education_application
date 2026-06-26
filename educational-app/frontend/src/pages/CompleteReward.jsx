// src/pages/CompleteReward.jsx

import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Confetti from "react-confetti";

export default function CompleteReward() {
  const navigate = useNavigate();
  const location = useLocation();

  const {
    score = 0,
    maxQuestions = 10,
    replayRoute = "/practice/g1-addition",
    backRoute = "/topics/1/Mathematics",
    subject = "",
    lesson = "",
  } = location.state || {};

  const xp = score * 15;

  let message = "Nice Try!";
  let emoji = "🙂";

  if (score >= 8) {
    message = "Amazing!";
    emoji = "🎉";
  } else if (score >= 5) {
    message = "Great Job!";
    emoji = "⭐";
  }

  return (
    <div className="min-h-screen bg-[#74C365] flex flex-col justify-between relative overflow-hidden">

      {/* Confetti */}
      <Confetti />

      {/* TOP CELEBRATION AREA */}
      <div className="flex-1 flex items-center justify-center">
        <div className="text-[180px] animate-bounce">
          🏆
        </div>
      </div>

      {/* BOTTOM CONTENT */}
      <div className="bg-white p-8 shadow-[0_-10px_30px_rgba(0,0,0,0.08)]">

        {/* Lesson Complete */}
        <h1 className="text-4xl font-extrabold text-center text-gray-800">
          Lesson Complete
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-6">
          {lesson} • {subject}
        </p>

        {/* Reward Boxes */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {/* Score */}
          <div className="bg-yellow-50 rounded-3xl p-6 text-center">
            <p className="text-gray-500 font-medium mb-2">Score</p>
            <h3 className="text-4xl font-extrabold text-orange-500">
              {score}/{maxQuestions}
            </h3>
          </div>

          {/* Result Message */}
          <div className="bg-blue-50 rounded-3xl p-6 text-center">
            <p className="text-gray-500 font-medium mb-2"> Result </p>
            <h3 className="text-3xl font-extrabold text-blue-500">
              {message}
            </h3>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <button
            onClick={() => navigate(replayRoute, { replace: true })}
            className="
              w-full md:w-1/2
              bg-yellow-400 text-black 
              font-bold py-4 rounded-2xl text-xl"
          >
            Play Again
          </button>

          <button
            onClick={() => navigate(backRoute, { replace: true })}
            className="
            w-full md:w-1/2
            bg-blue-500 text-white 
            font-bold py-4 rounded-2xl text-xl"
          >
            Back to Lessons
          </button>
        </div>
      </div>
    </div>
  );
}