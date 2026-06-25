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
import LessonTopics from "./pages/LessonTopics"; //LessonTopics
import Lessons from "./pages/Lessons"
import LessonContent from './pages/LessonContent'
import Quiz from "./pages/Quiz";
  // Lessons
    // Maths //
    import G1AdditionLesson from "./pages/lessons/maths/year1/g1AdditionLesson";
    import G1SubtractionLesson from "./pages/lessons/maths/year1/g1SubtractionLesson";
    // English //
    import G1EngGrammarNounLesson from "./pages/lessons/english/year1/g1EngGrammarNounLesson";
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
        <Route path="/topics/:gradeId/:subjectName" element={<LessonTopics />} />
        <Route path="/lesson/:gradeId/:subjectName/:topicId/:lessonId" element={<LessonContent />} />
          /**** Maths ****/
          <Route path="/practice/g1-addition" element={<G1AdditionLesson />} />
          <Route path="/practice/g1-subtraction" element={<G1SubtractionLesson />} />
          /**** English ****/
          <Route path="/practice/g1-nouns-1" element={<G1EngGrammarNounLesson />} />
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
