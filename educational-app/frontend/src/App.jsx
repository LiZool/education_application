/*** App.jsx Page ***/
import { BrowserRouter, Router, Routes, Route, useLocation  } from "react-router-dom";
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
import G1AdditionGame from "./pages/games/G1AdditionGame";

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
          <Route path="/games/g1-addition" element={<g1AdditionGame />} />
        <Route path="/quiz/:id" element={<Quiz />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // 2.5 seconds

    return () => clearTimeout(timer);
  }, []);

  // 👇 THIS IS THE KEY PART
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
