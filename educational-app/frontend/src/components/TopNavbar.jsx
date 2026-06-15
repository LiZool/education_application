import React from "react";

export default function TopNavbar() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-yellow-300 border-b-4 border-yellow-500 shadow-lg">
      <div className="flex justify-between items-center px-6 py-4">

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