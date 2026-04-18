/*** Lesson.jsx Page ***/

import React from "react";

export default function Lesson() {
  return (
    <div className="min-h-screen bg-blue-500 flex flex-col">

      {/* 🔝 TOP BAR */}
      <div className="w-full px-6 py-4 flex justify-between items-center bg-blue-600 text-white">
        <div>
          <p className="text-sm opacity-80">Welcome back</p>
          <h2 className="font-bold text-lg">User Name</h2>
        </div>

        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-500 font-bold">
          U
        </div>
      </div>

      {/* 📚 MAIN CONTENT */}
      <div className="flex-1 flex flex-col items-center justify-center px-6">

        <div className="bg-white rounded-2xl p-6 w-full max-w-[600px] shadow-lg text-center">
          <p className="text-lg mb-4">
            Learn how to pronounce this word:
          </p>

          <div className="text-4xl font-bold mb-6">
            بسم
          </div>

          <div className="flex justify-center gap-4">
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg">
              Play Audio
            </button>

            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
              Record
            </button>
          </div>
        </div>

        <button className="mt-6 bg-yellow-400 px-6 py-3 rounded-xl font-bold">
          Next
        </button>

      </div>

      {/* 🔻 FLOATING BOTTOM NAV */}
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-[500px]">
      <div className="bg-white rounded-2xl flex justify-around items-center py-3 shadow-lg">

        <button className="flex flex-col items-center text-sm text-blue-500 font-semibold">
          📘
        </button>

        <button className="flex flex-col items-center text-sm text-gray-500">
          📊
        </button>

        <button className="flex flex-col items-center text-sm text-gray-500">
          🏆
        </button>

        <button className="flex flex-col items-center text-sm text-gray-500">
          👤
        </button>

      </div>
    </div>

    </div>
  );
}