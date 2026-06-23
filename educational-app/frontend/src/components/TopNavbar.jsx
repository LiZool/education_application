// src/assets/components/TopNavbar.jsx

import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import IconBtnBack from "../assets/images/icons/IconBtnBack.png"  //https://www.pngaaa.com/detail/5656797

export default function TopNavbar({ backRoute = "/" }) {
  
  const navigate = useNavigate();

  return (
    <div className="fixed top-0 left-0 w-full h-20 z-50 bg-yellow-300 border-b-4 border-yellow-500 shadow-lg">
      <div className="flex justify-between items-center px-6 py-4">

        {/* Back Button */}
        <motion.button
          onClick={() => navigate(backRoute)}
          whileHover={{ scale: 1.2, x: -3 }}
          whileTap={{ scale: 0.9 }}
        >
          <img
            src={IconBtnBack}
            alt="Back"
            className="w-10 h-10"
          />
        </motion.button>

        <div className="flex items-center gap-2 font-bold text-lg">
          <span>❤️</span>
          <span>5</span>
        </div>

        <div className="flex items-center gap-2 font-bold text-lg">
          <span>⭐</span>
          <span>1200</span>
        </div>

        <div className="flex items-center gap-2 font-bold text-lg">
          <span>🏆</span>
          <span>Lv.3</span>
        </div>

      </div>
    </div>
  );
}