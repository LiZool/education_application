// src/data/LessonsData.js

import AdditionImg from "../assets/images/grades/addition/What-Is-Addition-1.png";

export const LessonsData = {
  1: {
    English: [
    {
      unitId: 1,
      unitTitle: "Nouns",

      lessons: [
        {
          id: 1,
          title: "What are nouns?",
          subtitle: "Learn what nouns are",
          lessonRoute: "/practice/g1-enggrammarnouns",

          content: [
            {
              type: "text",
              value: "Nouns are the names of things around us. Nouns that are used to name general things are called 'common nouns'"
            },

            {
              type: "image",
              value: "/images/childrenbook.png"
            },

            {
              type: "text",
              value: "Example: cars, rabbit, ship"
            }
          ],

          quizId: "english-g1-alphabet"
        },

        {
          id: 2,
          title: "Common Nouns",
          subtitle: "Identify common nouns",
          lessonRoute: "/practice/g1-enggrammarnouns",

          content: [
            {
              type: "text",
              value: "Common nouns are general names for things."
            },

            {
              type: "image",
              value: "/images/childrenbook.png"
            },

            {
              type: "text",
              value: "Example: cars, animals, phones"
            }
          ],

          quizId: "english-g1-alphabet"
        },

        {
          id: 3,
          title: "Proper Nouns",
          subtitle: "Identify common nouns",
          lessonRoute: "/practice/g1-enggrammarnouns",

          content: [
            {
              type: "text",
              value: "Common nouns are general names for things."
            },

            {
              type: "image",
              value: "/images/childrenbook.png"
            },

            {
              type: "text",
              value: "Example: cars, animals, phones"
            }
          ],

          quizId: "english-g1-alphabet"
        }
      ]
    },

    {
      unitId: 2,
      unitTitle: "Verbs",

      lessons: [
        {
          id: 1,
          title: "What are nouns?",
          subtitle: "Learn what nouns are",
          lessonRoute: "/practice/g1-enggrammarnouns",

          content: [
            {
              type: "text",
              value: "Nouns are the names of things around us. Nouns that are used to name general things are called 'common nouns'"
            },

            {
              type: "image",
              value: "/images/childrenbook.png"
            },

            {
              type: "text",
              value: "Example: cars, rabbit, ship"
            }
          ],

          quizId: "english-g1-alphabet"
        },

        {
          id: 2,
          title: "Common Nouns",
          subtitle: "Identify common nouns",
          lessonRoute: "/practice/g1-enggrammarnouns",

          content: [
            {
              type: "text",
              value: "Common nouns are general names for things."
            },

            {
              type: "image",
              value: "/images/childrenbook.png"
            },

            {
              type: "text",
              value: "Example: cars, animals, phones"
            }
          ],

          quizId: "english-g1-alphabet"
        },

        {
          id: 3,
          title: "Proper Nouns",
          subtitle: "Identify common nouns",
          lessonRoute: "/practice/g1-enggrammarnouns",

          content: [
            {
              type: "text",
              value: "Common nouns are general names for things."
            },

            {
              type: "image",
              value: "/images/childrenbook.png"
            },

            {
              type: "text",
              value: "Example: cars, animals, phones"
            }
          ],

          quizId: "english-g1-alphabet"
        }
      ]
    },

    {
      unitId: 3,
      unitTitle: "Adjectives",

      lessons: [
        {
          id: 1,
          title: "What are nouns?",
          subtitle: "Learn what nouns are",
          lessonRoute: "/practice/g1-enggrammarnouns",

          content: [
            {
              type: "text",
              value: "Nouns are the names of things around us. Nouns that are used to name general things are called 'common nouns'"
            },

            {
              type: "image",
              value: "/images/childrenbook.png"
            },

            {
              type: "text",
              value: "Example: cars, rabbit, ship"
            }
          ],

          quizId: "english-g1-alphabet"
        },

        {
          id: 2,
          title: "Common Nouns",
          subtitle: "Identify common nouns",
          lessonRoute: "/practice/g1-enggrammarnouns",

          content: [
            {
              type: "text",
              value: "Common nouns are general names for things."
            },

            {
              type: "image",
              value: "/images/childrenbook.png"
            },

            {
              type: "text",
              value: "Example: cars, animals, phones"
            }
          ],

          quizId: "english-g1-alphabet"
        },

        {
          id: 3,
          title: "Proper Nouns",
          subtitle: "Identify common nouns",
          lessonRoute: "/practice/g1-enggrammarnouns",

          content: [
            {
              type: "text",
              value: "Common nouns are general names for things."
            },

            {
              type: "image",
              value: "/images/childrenbook.png"
            },

            {
              type: "text",
              value: "Example: cars, animals, phones"
            }
          ],

          quizId: "english-g1-alphabet"
        }
      ]
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
        title: "Learn addition",
        lessonRoute: "/practice/g1-addition",
        backRoute: "/subjects/1/Mathematics",
        
        content: [
          {
            type: "text",
            value: "Addition means combining numbers together."
          },

          {
            type: "text",
            value: "If we have 6 apples and add 4 more apple..."
          },

          {
            type: "image",
            value: AdditionImg,
            width: "w-80",
            align: "center"
          },

          {
            type: "text",
            value: "Now we have 10 apples!"
          },

          /*{
            type: "text",
            value: "2 + 1 = 3"
          } */
        ]
        
      },

      {
        id: 2,
        title: "Subtraction",
        lessonRoute: "/practice/g1-subtraction",
        backRoute: "/subjects/1/Mathematics",

        content: [
          {
            type: "text",
            value: "Subtraction means taking away numbers."
          },

          {
            type: "text",
            value: "If we have 5 apples and take away 3 apples..."
          },

          {
            type: "image",
            value: AdditionImg,
            width: "w-80",
            align: "center"
          },

          {
            type: "text",
            value: "Now we have 2 apples!"
          },

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