/*** src/pages/Home.jsx - Home Page***/

import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/NavBar";
import TopNavbar from "../components/TopNavbar";

/* Images - Grades */
import StarterFarmImg from "../assets/images/grades/png-bzcku_monkey.png";
import MountainWorldImg from "../assets/images/grades/png-bzcku_monkey.png";
import OceanWorldImg from "../assets/images/grades/png-bzcku_monkey.png";
import SpaceWorldImg from "../assets/images/grades/png-bzcku_monkey.png";
import StarterFarmBGImg from "../assets/images/grades/background/farm.jpg";

const grades = [
  { id: '1', name: "Starter Farm", grade: 1, progress: 0.75, unlocked: true, img: StarterFarmImg, bg: StarterFarmBGImg },
  { id: '2', name: "Mountain World", grade: 2, progress: 0.0, unlocked: false, img: MountainWorldImg },
  { id: '3', name: "Ocean World", grade: 3, progress: 0.0, unlocked: false, img: OceanWorldImg },
  { id: '4', name: "Space World", grade: 4, progress: 0.0, unlocked: false, img: SpaceWorldImg },
];

export default function Home() {
  const navigate = useNavigate();

  const handleGradeClick = (grade) => {
    if (grade.unlocked) {
      navigate(`/subjects/${grade.grade}`);
    } else {
      alert("This grade is locked!");
    }
  };

  return (
   <div className="min-h-screen bg-gradient-to-b from-blue-400 to-blue-600 flex flex-col items-center px-6 pt-24 pb-24">
        <TopNavbar />
        {/****  Title ****/}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-white mb-6"
        >
          Choose Your Grade
        </motion.h1>

        <p className="text-white/90 mb-10 text-lg md:text-xl text-center">
          Continue your learning adventure!
        </p>

        <div className="flex flex-col w-full max-w-3xl gap-6">
          {grades.map((grade) => (
            <motion.div
          key={grade.id}
          onClick={() => handleGradeClick(grade)}
          whileHover={{ scale: grade.unlocked ? 1.03 : 1 }}
          whileTap={{ scale: grade.unlocked ? 0.97 : 1 }}
          className={`
            relative
            flex flex-row items-center justify-between
            rounded-2xl
            overflow-hidden
            shadow-2xl
            transition-all
            bg-white
            ${grade.unlocked
              ? "cursor-pointer"
              : "bg-gray-300 cursor-not-allowed"
            }
          `}
        >

        {/* Image: Left */}
        <div className="flex items-center w-[65%] p-6 z-10">

          {/* Character */}
          <div className="w-32 h-32 flex-shrink-0">
            <img
              src={grade.img}
              alt={grade.name}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col flex-1 ml-6">

            <h2 className={`
              text-2xl font-bold mb-2
              ${grade.unlocked
                ? "text-gray-900"
                : "text-gray-500"
              }
            `}>
              {grade.name}
            </h2>

            <p className={`
              mb-4
              ${grade.unlocked
                ? "text-gray-700"
                : "text-gray-500"
              }
            `}>
              Grade {grade.grade}
            </p>

            <p className={`
              mb-1 text-sm font-semibold
              ${grade.unlocked
                ? "text-gray-700"
                : "text-gray-500"
              }
            `}>
              Progress: {Math.round(grade.progress * 100)}%
            </p>

            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
              <div
                className={`h-full ${
                  grade.unlocked
                    ? "bg-green-500"
                    : "bg-gray-400"
                }`}
                style={{
                  width: `${grade.progress * 100}%`
                }}
              />
            </div>

          </div>
        </div>

        {/* Right: Backgroun Panel */}
        {grade.bg && (
          <div
            className="
              absolute
              right-0
              top-0
              h-full
              w-[35%]
              bg-cover
              bg-center
              opacity-90
              rounded-r-2xl
            "
            style={{
              backgroundImage: `url(${grade.bg})`
            }}
          />
        )}

              {!grade.unlocked && (
                <span className="absolute top-2 right-2 text-sm font-bold text-gray-700">LOCKED</span>
              )}
            </motion.div>
          ))}
        </div>

      <Navbar />
    </div>
  );
}