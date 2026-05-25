/*** App.jsx Page ***/
import { BrowserRouter, Routes, Route, useLocation  } from "react-router-dom";
import React from "react";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import './App.css'
import SplashScreen from "./components/SplashScreenAnimation";

/* Pages */
import Welcome from './pages/Welcome'
import Home from "./pages/Home"
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Subjects from "./pages/Subjects";
import SubjectLessons from "./pages/SubjectLessons"
import LessonContent from './pages/LessonContent'
import Quiz from "./pages/Quiz";
import G1AdditionQuiz from "./pages/quiz/maths/year1/g1AdditionQuiz";
import CompleteReward from "./pages/CompleteReward";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/subjects/:gradeId" element={<Subjects />} />
        <Route path="/subjects/:gradeId/:subjectName" element={<SubjectLessons />} />
        <Route path="/lesson/:gradeId/:subjectName/:lessonId" element={<LessonContent />} />
          <Route path="/quiz/g1-addition" element={<G1AdditionQuiz />} />
        <Route path="/completerewards" element={<CompleteReward />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [loading, setLoading] = useState(() => {
  return !sessionStorage.getItem("welcomePlayed");
    });

    useEffect(() => {

      if (!sessionStorage.getItem("welcomePlayed")) {

        const timer = setTimeout(() => {
          setLoading(false);

          sessionStorage.setItem(
            "welcomePlayed",
            "true"
          );

        }, 2500);

        return () => clearTimeout(timer);
      }

    }, []);

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
