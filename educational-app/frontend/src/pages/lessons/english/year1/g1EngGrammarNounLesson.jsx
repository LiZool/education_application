// src/pages/lessons/english/year1/g1EngGrammarNounLesson.jsx

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { G1EnglishNounsQuestions } from "../../../../data/english/G1EnglishNounsQuestions";
// https://www.magnific.com/free-vector/girl-having-breakfast-doodle-cartoon-character-isolated_19399730.htm#fromView=search&page=1&position=4&uuid=67832d48-8986-4e52-99f4-3b8f3a11a4c6&query=eat+cartoon

// Year Backgrounds 
import BGYear1 from "../../../../assets/images/grades/background/BGYear1.png"  // https://pngtree.com/back/down?id=MTE3MDQ5OQ==&type=1&time=1781835870&token=ZWIzOTk2Yzg0OWIwYTQ3YmNmNWJjZmI4M2MxYjA4MWM=&t=0
import IconBtnCancel from "../../../../assets/images/icons/IconBtnCancel.png"  // https://www.clipartmax.com/middle/m2i8i8Z5d3K9K9Z5_x-button-clipart-x-icon/
import IconCorrect from "../../../../assets/images/icons/IconCorrect.png"  // https://www.pngwing.com/en/free-png-abwde/download

export default function G1EngGrammarNounsLesson() {
    const navigate = useNavigate();

    const gradeTheme = {
        bgColor: "bg-blue-500",
        bgImage: BGYear1,
    };

    const questions = G1EnglishNounsQuestions;

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);

    const [feedback, setFeedback] = useState(null);
    const [isRestoring, setIsRestoring] = useState(true);

       useEffect(() => {
            const savedQuestion = localStorage.getItem("g1-nouns-progress");
            const savedScore = localStorage.getItem("g1-nouns-score");

            if (savedQuestion !== null) {
                setCurrentQuestion(Number(savedQuestion));
            }

            if (savedScore !== null) {
                setScore(Number(savedScore));
            }

            setIsRestoring(false);
        }, []);

        useEffect(() => {
            if (isRestoring) return;

            localStorage.setItem(
                "g1-nouns-progress",
                String(currentQuestion)
            );
        }, [currentQuestion, isRestoring]);

        useEffect(() => {
            if (isRestoring) return;

            localStorage.setItem(
                "g1-nouns-score",
                String(score)
            );
        }, [score, isRestoring]);

    const handleAnswer = (selectedOption) => {
        const correctAnswer =
            questions[currentQuestion].G1NounGrammarAnswers;

        if (selectedOption === correctAnswer) {
            setScore((prev) => prev + 1);

            setFeedback({
                type: "correct",
                title: "Correct!",
                text: "Great Job!",
                emoji: "🎉",
            });
        } else {
            setFeedback({
                type: "wrong",
                title: "Try Again!",
                text: `Good Try! Answer is ${correctAnswer}`,
                emoji: "🙂",
            });
        }
    };

    const nextQuestion = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion((prev) => prev + 1);
            setFeedback(null);
        } else {
            localStorage.removeItem("g1-nouns-progress");
            localStorage.removeItem("g1-nouns-score");

            navigate("/completerewards", {
                state: {
                    subject: "English",
                    lesson: "Nouns",
                    score,
                    maxQuestions: questions.length,
                    replayRoute: "/practice/g1-nouns-1",
                    backRoute: "/topics/1/English"
                }
            });
        }
    };

    if (isRestoring || questions.length === 0) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-blue-600">
                <p className="text-white text-xl font-bold">
                    Loading progress...
                </p>
            </div>
        );
    }

    return (
        <div 
            className={`
                min-h-screen 
                ${gradeTheme?.bgColor} 
                pt-4 pb-6 p-4
                flex items-center justify-center 
                bg-cover bg-center`}
            style={{
                backgroundImage: `url(${gradeTheme?.bgImage})`,
            }}>
            <div className="bg-white rounded-3xl shadow-2xl w-full max-w-xl text-center overflow-hidden flex flex-col">
                 <div className="flex flex-col flex-1">
                    {/* QUESTION SCREEN */}
                        <>
                            <div className="mt-2 pb-2 flex items-center gap-3">
                                {/* Cancel button */}
                                <button
                                    onClick={() => navigate("/topics/1/English")}W
                                    className="
                                        w-12 h-12
                                        flex items-center justify-center
                                        hover:scale-110
                                        transition-all
                                    "
                                >
                                    <img
                                        src={IconBtnCancel}
                                        alt="Cancel"
                                        className="w-6 h-6"
                                    />
                                </button>
                        
                                {/* Progress bar */}
                                <div className="flex-1 h-6 bg-gray-200 rounded-full overflow-hidden shadow-inner">
                                    <div
                                        className="
                                            h-full
                                            bg-gradient-to-r
                                            from-lime-400
                                            to-green-500
                                            transition-all
                                            duration-500
                                        "
                                        style={{
                                            width: `${((currentQuestion + 1) / questions.length) * 100}%`
                                        }}
                                    />
                                </div>

                                <div className="text-3xl animate-pulse">
                                    ❤️
                                </div>
                            </div>

                           <div className="flex flex-col sm:flex-row items-center justify-center mb-4 px-6 gap-3">
                                {/* Question */}
                                <div className="w-full max-w-[24rem] bg-[#6CD1F0] rounded-2xl py-2 px-3 shadow-inner">
                                    <h1 className="text-2xl font-extrabold text-white text-center">
                                        {questions[currentQuestion].G1NounGrammarQuestions}
                                    </h1>
                                </div>

                                {/* Score */}
                                <div className="text-blue-500 px-3 py-1 font-bold text-lg whitespace-nowrap sm:self-auto">
                                    ⭐ {score}
                                </div>

                            </div>

                            <div className="grid grid-cols-2 gap-8 justify-items-center px-5 max-w-[24rem] mx-auto mb-5">
                                {questions[currentQuestion].G1NounGrammarOptions.map(
                                    (option, index) => (
                                        <button
                                            key={index}
                                            onClick={() => handleAnswer(option.text)}
                                            className="
                                                w-[11rem] h-[11rem]
                                                p-3
                                                bg-white
                                                border-4 border-blue-300
                                                rounded-2xl
                                                shadow-md
                                                hover:shadow-xl
                                                flex flex-col items-center justify-center
                                                transition-all
                                                hover:border-blue-500
                                                hover:bg-blue-500
                                            "
                                        >
                                            <img
                                                src={option.image}
                                                alt={option.text}
                                                className="
                                                    w-[7.5rem] h-[7.5rem]
                                                    object-contain
                                                    mx-auto
                                                    mb-2
                                                    hover:scale-125
                                                "
                                            />

                                            <p className="hidden md:block text-xl font-bold capitalize">
                                                {option.text}
                                            </p>
                                        </button>
                                    )
                                )}
                            </div>
                        </>

                    {/* FEEDBACK SCREEN */}
                    {feedback && (
                    <div
                        className={`
                        w-full mt-1
                        ${
                            feedback.type === "correct"
                            ? "bg-green-100 border-green-500"
                            : "bg-yellow-100 border-yellow-500"
                        }
                        border-t-4
                        p-2
                        `}
                    >
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                        {/* Left side: icon + text */}
                        <div className="flex items-center gap-3 flex-1">
                            {feedback.type === "correct" && (
                            <img
                                src={IconCorrect}
                                alt="Correct"
                                className="w-12 h-12"
                            />
                            )}

                            <div className="text-left">
                            <h1
                                className={`text-2xl font-bold ${
                                feedback.type === "correct"
                                    ? "text-green-600"
                                    : "text-yellow-600"
                                }`}
                            >
                                {feedback.title}
                            </h1>

                            <p className="hidden md:block text-gray-700 font-medium">
                                {feedback.text}
                            </p>
                            </div>
                        </div>

                        {/* Right side button */}
                        <button
                            onClick={nextQuestion}
                            className={`
                            w-full md:w-auto
                            px-8 py-2
                            text-white font-bold rounded-2xl
                            ${
                                feedback.type === "correct"
                                ? "bg-green-500 hover:bg-green-600"
                                : "bg-yellow-500 hover:bg-yellow-600"
                            }
                            `}
                        >
                            Continue
                        </button>
                        </div>
                    </div>
                    )}
                </div>
            </div>
        </div>
    );
}