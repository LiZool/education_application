// src/pages/games/G1AdditionQuiz.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function G1AdditionQuiz() {
    const navigate = useNavigate();

    const maxQuestions = 10;

    const generateQuestion = () => {

        const num1 = Math.floor(Math.random() * 10);
        const num2 = Math.floor(Math.random() * 10);

        const correct = num1 + num2;

        let options = [
            correct,
            correct + 1,
            correct - 1,
            correct + 2,
        ];

        // Remove duplicates
        options = [...new Set(options)];

        // Shuffle
        options = options.sort(() => Math.random() - 0.5);

        return {
            num1,
            num2,
            correct,
            options,
        };
    };

    const [question, setQuestion] = useState(generateQuestion());
    const [quizOver, setQuizOver] = useState(false);
    const [message, setMessage] = useState("");
    const [score, setScore] = useState(0);
    const [count, setCount] = useState(0);

    const checkAnswer = (selected) => {

        let newScore = score;

        if (selected === question.correct) {
            setMessage("✅ Correct!");
            newScore += 1;
            setScore(newScore);
        }

        else {
            setMessage(`❌ Wrong!`);
        }

        const nextCount = count + 1;
        setCount(nextCount);

        setTimeout(() => {

            if (nextCount >= maxQuestions) {
                navigate("/completerewards", {
                    state: {
                        score: newScore,
                        maxQuestions
                    }
                });

                // SAVE SCORE
                localStorage.setItem(
                    "g1AdditionScore",
                    newScore
                );

                return;
            }

            setQuestion(generateQuestion());
            setMessage("");

        }, 800);
    };

    // 🎮 GAME SCREEN
    return (
        <div className="min-h-screen bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center p-6">
            <div className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-2xl text-center">
                <p className="text-2xl font-bold mb-3">
                    Addition {count + 1} / {maxQuestions}
                </p>

                {/* Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-5 mb-8 overflow-hidden">
                    <div
                        className="
                            bg-gradient-to-r
                            from-green-400
                            to-green-600
                            h-5
                            rounded-full
                            transition-all
                            duration-500
                        "
                        style={{
                            width: `${((count + 1) / maxQuestions) * 100}%`
                        }}
                    />
                </div>

                <div className="
                    bg-[#6CD1F0]
                    rounded-3xl
                    py-10
                    px-6
                    mb-10
                    shadow-inner
                ">
                    <h1 className="text-6xl font-extrabold text-white">
                        {question.num1} + {question.num2}
                    </h1>
                </div>

                <div className="grid grid-cols-2 gap-8">

                    {question.options.map((option, index) => (

                        <button
                            key={index}
                            onClick={() => checkAnswer(option)}
                            className="
                                bg-[#BCC6CC]
                                hover:bg-[#8599A8]
                                text-white
                                text-3xl
                                font-extrabold
                                px-10
                                py-6
                                rounded-3xl
                                shadow-lg
                                hover:scale-110
                                active:scale-95
                                transition-all
                                duration-200
                            "
                        >
                            {option}
                        </button>

                    ))}

                </div>

                <p className="mt-8 text-3xl font-bold">
                    {message}
                </p>

                <p className="mt-4 text-xl">
                    Score: {score}
                </p>
            </div>
        </div>
    );
}