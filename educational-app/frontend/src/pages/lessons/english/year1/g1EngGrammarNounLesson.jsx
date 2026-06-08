// src/pages/lessons/english/year1/g1EngGrammarNounLesson.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { G1EnglishNounsQuestions } from "../../../../data/english/G1EnglishNounsQuestions";

export default function G1EngGrammarNounsLesson() {
    const navigate = useNavigate();

    const questions = G1EnglishNounsQuestions;

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);

    const [feedback, setFeedback] = useState(null);
    const [mode, setMode] = useState("question");

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

        setMode("feedback");
    };

    const nextQuestion = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion((prev) => prev + 1);
            setFeedback(null);
            setMode("question");
        } else {
            alert(`You got ${score} out of ${questions.length}`);
            navigate("/dashboard");
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center p-6">
            <div className="bg-white rounded-3xl shadow-2xl p-6 w-full max-w-xl text-center">

                {/* QUESTION SCREEN */}
                {mode === "question" && (
                    <>
                        <p className="text-2xl font-bold mb-3">
                            Nouns {currentQuestion + 1} / {questions.length}
                        </p>

                        <div className="bg-[#6CD1F0] rounded-3xl py-6 px-4 mb-6 shadow-inner">
                            <h1 className="text-3xl font-extrabold text-white">
                                {questions[currentQuestion].G1NounGrammarQuestions}
                            </h1>
                        </div>

                        <div className="grid grid-cols-2 gap-8">
                            {questions[currentQuestion].G1NounGrammarOptions.map(
                                (option, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleAnswer(option.text)}
                                        className="
                                            w-full
                                            bg-blue-500
                                            hover:bg-blue-600
                                            text-white
                                            rounded-3xl
                                            shadow-lg
                                            p-4
                                            hover:scale-105
                                            transition-all
                                        "
                                    >
                                        <img
                                            src={option.image}
                                            alt={option.text}
                                            className="
                                                w-40
                                                h-40
                                                object-contain
                                                mx-auto
                                                mb-2
                                            "
                                        />

                                        <p className="text-2xl font-bold capitalize">
                                            {option.text}
                                        </p>
                                    </button>
                                )
                            )}
                        </div>
                    </>
                )}

                {/* FEEDBACK SCREEN */}
                {mode === "feedback" && feedback && (
                    <div className="max-w-lg mx-auto">
                        <div className="overflow-hidden rounded-3xl shadow-xl">

                            <div
                                className={`
                                    py-6
                                    px-4
                                    text-center
                                    text-white
                                    ${
                                        feedback.type === "correct"
                                            ? "bg-green-500"
                                            : "bg-yellow-500"
                                    }
                                `}
                            >
                                <div className="text-5xl mb-2">
                                    {feedback.emoji}
                                </div>

                                <h1 className="text-3xl font-extrabold mb-1">
                                    {feedback.title}
                                </h1>

                                <p className="text-lg font-medium">
                                    {feedback.text}
                                </p>
                            </div>

                            <div
                                className={`
                                    bg-white
                                    border-4
                                    p-5
                                    text-center
                                    ${
                                        feedback.type === "correct"
                                            ? "border-green-500"
                                            : "border-yellow-500"
                                    }
                                `}
                            >
                                <p className="text-xl font-bold mb-3">
                                    Answer:
                                </p>

                                <img
                                    src={
                                        questions[currentQuestion]
                                            .G1NounGrammarOptions.find(
                                                (option) =>
                                                    option.text ===
                                                    questions[currentQuestion]
                                                        .G1NounGrammarAnswers
                                            )?.image
                                    }
                                    alt="correct answer"
                                    className="w-24 h-24 object-contain mx-auto"
                                />

                                <p className="text-lg font-bold mt-2 capitalize">
                                    {questions[currentQuestion].G1NounGrammarAnswers}
                                </p>
                            </div>
                        </div>

                        <button
                            onClick={nextQuestion}
                            className={`
                                mt-4
                                w-full
                                text-white
                                text-lg
                                font-bold
                                px-6
                                py-3
                                rounded-2xl
                                shadow-lg
                                hover:scale-105
                                transition-all
                                ${
                                    feedback.type === "correct"
                                        ? "bg-green-500 hover:bg-green-600"
                                        : "bg-yellow-500 hover:bg-yellow-600"
                                }
                            `}
                        >
                            Next Question →
                        </button>
                    </div>
                )}

                <p className="mt-6 text-xl font-bold">
                    Score: {score}
                </p>
            </div>
        </div>
    );
}