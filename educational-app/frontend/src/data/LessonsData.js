// src/data/LessonsData.js

export const LessonsData = {
  1: {
    English: [
      {
        id: 1,
        title: "Alphabet",

        content: [
          {
            type: "text",
            value: "The alphabet has 26 letters."
          },

          {
            type: "image",
            value: "/images/childrenbook.png"
          },

          {
            type: "text",
            value: "A is for Apple."
          }
        ],

        quizId: "english-g1-alphabet"
      }
    ],

    Malay: [
      {
        id: 1,
        title: "Karangan",

        content: [
          {
            type: "text",
            value: "Karangan helps students improve writing skills."
          }
        ]
      }
    ],

    Mathematics: [
      {
        id: 1,
        title: "Addition",
        gameRoute: "/games/g1-addition",
        content: [
          {
            type: "text",
            value: "Addition means combining numbers together."
          }
        ]
        
      },

      {
        id: 2,
        title: "Subtraction",

        content: [
          {
            type: "text",
            value: "Subtraction means - numbers together."
          }
        ]
      },

      {
        id: 3,
        title: "Multiplication",

        content: [
          {
            type: "text",
            value: "Addition means combining numbers together."
          }
        ]
      },

      {
        id: 4,
        title: "Division",

        content: [
          {
            type: "text",
            value: "Addition means combining numbers together."
          }
        ]
      },
    ]
  }
};