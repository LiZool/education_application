// src/pages/games/G1AdditionQuiz.jsx

import React, { useState } from "react";

export default function G1AdditionQuiz() {

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
                setQuizOver(true);

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

    // ⭐ RESULTS SCREEN
    if (quizOver) {

        let stars = "⭐";

        if (score >= 8) {
            stars = "⭐⭐⭐";
        }

        else if (score >= 5) {
            stars = "⭐⭐";
        }

        return (
            <div className="min-h-screen bg-blue-500 flex flex-col items-center justify-center text-white p-6">

                <h1 className="text-5xl font-bold mb-6">
                    Quiz Complete!
                </h1>

                <p className="text-3xl mb-4">
                    Final Score: {score} / {maxQuestions}
                </p>

                <p className="text-6xl mb-8">
                    {stars}
                </p>

                <button
                    onClick={() => window.location.reload()}
                    className="
                        bg-yellow-400
                        text-black
                        font-bold
                        px-8 py-4
                        rounded-2xl
                    "
                >
                    Play Again
                </button>

            </div>
        );
    }

    // 🎮 GAME SCREEN
    return (
        <div className="min-h-screen bg-blue-500 flex flex-col items-center justify-center text-white p-6">

            <p className="text-2xl mb-4">
                Question {count + 1} / {maxQuestions}
            </p>

            <h1 className="text-6xl font-bold mb-10">
                {question.num1} + {question.num2}
            </h1>

            <div className="grid grid-cols-2 gap-4">

                {question.options.map((option, index) => (

                    <button
                        key={index}
                        onClick={() => checkAnswer(option)}
                        className="
                            bg-white
                            text-black
                            text-3xl
                            font-bold
                            px-10 py-6
                            rounded-2xl
                            hover:scale-105
                            transition
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
    );
}