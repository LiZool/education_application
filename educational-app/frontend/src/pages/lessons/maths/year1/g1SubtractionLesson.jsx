// src/pages/games/G1SubtractionQuiz.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function G1SubtractionQuiz() {
    const navigate = useNavigate();

    const maxQuestions = 10;

    const generateQuestion = () => {

        // num1 is 1-10
        const num1 =
            Math.floor(Math.random() * 10) + 1;

        // num2 is always <= num1
        const num2 =
            Math.floor(Math.random() * (num1 + 1));

        const correct = num1 - num2;

        let options = [
            correct,
            correct + 1,
            correct - 1,
            correct + 2,
        ];

        // remove negatives from options
        options = options.filter(
            (num) => num >= 0
        );

        // remove duplicates
        options = [...new Set(options)];

        // shuffle
        options = options.sort(
            () => Math.random() - 0.5
        );

        return {
            num1,
            num2,
            correct,
            options,
        };
    };

    const [question, setQuestion] = useState(generateQuestion());
    const [quizOver, setQuizOver] = useState(false);
    const [feedback, setFeedback] = useState(null);
    const [answered, setAnswered] = useState(false);
    const [score, setScore] = useState(0);
    const [count, setCount] = useState(0);
    const [mode, setMode] = useState("question");

    const checkAnswer = (selected) => {

        if (answered) return;

        setAnswered(true);

        let newScore = score;

        if (selected === question.correct) {

            newScore += 1;
            setScore(newScore);

            setFeedback({
                type: "correct",
                text: "Great Job!",
                emoji: "🎉"
            });

        }

        else {

            setFeedback({
                type: "wrong",
                text: `Good Try! Answer is ${question.correct}`,
                emoji: "🙂"
            });

        }

        const nextCount = count + 1;
        setCount(nextCount);
        setMode("feedback");
    };

    const nextQuestion = () => {
        if (count >= maxQuestions) {

            localStorage.setItem(
                "g1SubtractionScore",
                score
            );

            navigate("/completerewards", {
            state: {
                score,
                maxQuestions,
                replayRoute: "/practice/g1-subtraction"
            }
            })

            return;
        }

        setQuestion(generateQuestion());
        setFeedback(null);
        setAnswered(false);
        setMode("question");
    };

    // 🎮 GAME SCREEN
    return (
        <div className="min-h-screen bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center p-6">
            <div className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-2xl text-center">

    {/* QUESTION SCREEN */}
    {mode === "question" && (

        <>

            <p className="text-2xl font-bold mb-3">
                Subtraction {count + 1} / {maxQuestions}
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
                        width: `${(count / maxQuestions) * 100}%`
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
                    <span className="text-yellow-300">{question.num1}</span>

                    <span className="mx-4 text-white">-</span>

                    <span className="text-pink-300">{question.num2}</span>
                </h1>
            </div>

            <div className="grid grid-cols-2 gap-8">

                {question.options.map((option, index) => (

                    <button
                        key={index}
                        onClick={() => checkAnswer(option)}
                        disabled={answered}
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

        </>

    )}

    {/* FEEDBACK SCREEN */}
    {mode === "feedback" && feedback && (

        <div className="max-w-xl mx-auto">

            {/* CARD */}
            <div className="overflow-hidden rounded-[40px] shadow-2xl">

                {/* TOP HALF */}
                <div
                    className={`
                        py-12
                        px-8
                        text-center
                        text-white

                        ${feedback.type === "correct"
                            ? "bg-green-500"
                            : "bg-yellow-500"
                        }
                    `}
                >

                    <div className="text-8xl mb-4">
                        {feedback.emoji}
                    </div>

                    <h1 className="text-5xl font-extrabold mb-3">

                        {feedback.type === "correct"
                            ? "Correct!"
                            : "Good Try!"
                        }

                    </h1>

                    <p className="text-2xl font-medium">
                        {feedback.text}
                    </p>

                </div>

                {/* BOTTOM HALF */}
                <div
                    className={`
                        bg-white
                        border-4
                        rounded-b-[40px]
                        p-10
                        text-center

                        ${feedback.type === "correct"
                            ? "border-green-500"
                            : "border-yellow-500"
                        }
                    `}
                >

                    <p className="text-5xl font-extrabold mb-6 text-gray-800">
                        <span className="text-blue-500">
                            {question.num1}
                        </span>

                        <span className="mx-3 text-gray-700">
                            -
                        </span>

                        <span className="text-red-500">
                            {question.num2}
                        </span>

                        <span className="mx-3 text-gray-700">
                            =
                        </span>

                        <span className="text-green-500">
                            {question.correct}
                        </span>

                    </p>

                </div>

            </div>

            <button
                onClick={nextQuestion}
                className={`
                    mt-8
                    w-full
                    text-white
                    text-2xl
                    font-bold
                    px-10
                    py-5
                    rounded-3xl
                    shadow-lg
                    hover:scale-105
                    transition-all

                    ${feedback.type === "correct"
                        ? "bg-green-500 hover:bg-green-600"
                        : "bg-yellow-500 hover:bg-yellow-600"
                    }
                `}
            >
                Next Question →
            </button>

        </div>

    )}

    <p className="mt-4 text-xl">
        Score: {score}
    </p>

</div>
        </div>
    );
}