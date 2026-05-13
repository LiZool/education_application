// src/pages/games/g1AdditionGame.jsx

export default function g1AdditionGame() 
{
        const generateQuestion = () => 
        {
            const num1 = Math.floor(Math.random() * 10);
            const num2 = Math.floor(Math.random() * 10);

            const correct = num1 + num2;

            return {
                num1,
                num2,
                correct,
        };
    };
}