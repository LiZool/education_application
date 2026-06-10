// src/pages/CompleteReward.jsx

import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Confetti from "react-confetti";

export default function CompleteReward() {

  const navigate = useNavigate();
  const location = useLocation();

  const {
      score = 0,
      maxQuestions = 10,
      replayRoute = "/practice/g1-addition",
      backRoute = "/subjects/1/Mathematics",
      subject = "",
      lesson = ""
  } = location.state || {};

  const [showUnlock, setShowUnlock] = useState(false);

  // Rewards
  const coins = score * 10;
  const gems = Math.floor(score / 2);
  const xp = score * 15;

  // XP %
  const xpPercent = Math.min((xp / 150) * 100, 100);

  let stars = "⭐";
  let message = "Nice Try!";
  let badge = "🎖️ Beginner";

  if (score >= 8) {
    stars = "⭐⭐⭐";
    message = "Amazing Work!";
    badge = "👑 Math Master";
  }

  else if (score >= 5) {
    stars = "⭐⭐";
    message = "Great Job!";
    badge = "🔥 Smart Learner";
  }

  useEffect(() => {

    // Show unlock popup for high score
    if (score >= 8) {

      setTimeout(() => {
        setShowUnlock(true);
      }, 1000);

    }

  }, [score]);

  return (
    <div className="
      min-h-screen
      bg-gradient-to-b
      from-sky-400
      to-blue-600
      flex
      items-center
      justify-center
      p-6
      relative
      overflow-hidden
    ">

      {/* CONFETTI */}
      <Confetti />

      {/* Floating Shapes */}
      <div className="absolute w-72 h-72 bg-white/10 rounded-full -top-20 -left-20" />
      <div className="absolute w-96 h-96 bg-white/10 rounded-full bottom-0 right-0" />

      {/* UNLOCK POPUP */}
      {showUnlock && (
        <div className="
          absolute
          top-10
          bg-yellow-300
          text-black
          font-extrabold
          px-8
          py-4
          rounded-3xl
          shadow-2xl
          text-2xl
          animate-bounce
          z-50
        ">
          🎉 NEW LESSON UNLOCKED!
        </div>
      )}

      {/* MAIN CARD */}
      <div className="
        relative
        bg-white
        rounded-[40px]
        shadow-2xl
        w-full
        max-w-md
        p-8
        text-center
        z-10
      ">

        {/* Trophy */}
        <div className="text-8xl animate-bounce mb-4">
          🏆
        </div>

        {/* Title */}
        <h1 className="text-5xl font-extrabold text-gray-800 mb-2">
          Congratulations!
        </h1>

        <p className="text-xl font-bold text-gray-500 mb-4">
            {lesson} • {subject}
        </p>

        {/* Message */}
        <p className="text-2xl font-bold text-gray-500 mb-4">
          {message}
        </p>

        {/* Stars */}
        <div className="text-6xl animate-pulse mb-6">
          {stars}
        </div>

        {/* SCORE */}
        <div className="
          bg-yellow-100
          rounded-3xl
          py-5
          mb-6
        ">
          <p className="text-lg text-gray-600">
            Final Score
          </p>

          <h2 className="text-6xl font-extrabold text-orange-500">
            {score}/{maxQuestions}
          </h2>
        </div>

        {/* REWARDS */}
        <div className="
          grid
          grid-cols-2
          gap-4
          mb-6
        ">

          {/* Coins */}
          <div className="
            bg-yellow-50
            rounded-2xl
            p-4
            shadow
          ">
            <div className="text-4xl mb-2">
              🪙
            </div>

            <p className="font-bold text-gray-700">
              +{coins} Coins
            </p>
          </div>

          {/* Gems */}
          <div className="
            bg-cyan-50
            rounded-2xl
            p-4
            shadow
          ">
            <div className="text-4xl mb-2">
              💎
            </div>

            <p className="font-bold text-gray-700">
              +{gems} Gems
            </p>
          </div>

        </div>

        {/* BADGE */}
        <div className="
          bg-purple-100
          rounded-3xl
          py-4
          mb-6
        ">
          <p className="text-lg font-bold text-purple-700">
            Badge Earned
          </p>

          <h3 className="text-3xl font-extrabold">
            {badge}
          </h3>
        </div>

        {/* XP BAR */}
        <div className="mb-8">

          <div className="
            flex
            justify-between
            text-sm
            font-bold
            text-gray-600
            mb-2
          ">
            <span>XP</span>
            <span>{xp}/150</span>
          </div>

          <div className="
            w-full
            h-6
            bg-gray-200
            rounded-full
            overflow-hidden
          ">

            <div
              className="
                h-full
                bg-gradient-to-r
                from-green-400
                to-emerald-500
                transition-all
                duration-1000
              "
              style={{
                width: `${xpPercent}%`
              }}
            />

          </div>
        </div>

        {/* BUTTONS */}
        <div className="flex flex-col gap-4">

          <button
            onClick={() => navigate(replayRoute)}
            className="
              bg-yellow-400
              hover:bg-yellow-300
              text-black
              font-bold
              text-xl
              py-4
              rounded-2xl
              shadow-lg
              hover:scale-105
              transition
            "
          >
            Play Again
          </button>

          <button
            onClick={() => navigate(backRoute, { replace: true })}
            className="
              bg-blue-500
              hover:bg-blue-400
              text-white
              font-bold
              text-xl
              py-4
              rounded-2xl
              shadow-lg
              hover:scale-105
              transition
            "
          >
            Back to Lessons
          </button>

        </div>

      </div>
    </div>
  );
}