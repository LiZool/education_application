// src/data/LessonsData.js

// Year Backgrounds 
import BGYear1 from "../assets/images/grades/background/BGYear1.png"

// Images
import AdditionImg from "../assets/images/grades/addition/What-Is-Addition-1.png";

export const LessonsData = {
  1: {
    theme: {
      bgColor: "bg-blue-500",
      bgImage: BGYear1,
    },

    subjects: {
      English: {
        units: [
          {
            unitId: 1,
            title: "Nouns",
            lessons: [
              {
                id: 1,
                title: "What are nouns?",
                displayTitle: "Level 1",
                subtitle: "Basics of nouns",
                lessonRoute: "/practice/g1-nouns-1",
                quizId: "english-g1-nouns-1",
                content: [
                  { type: "text", value: "Nouns are names of people, places, or things." },
                  { type: "image", value: "/images/childrenbook.png" }
                ]
              },
              {
                id: 2,
                title: "Common Nouns",
                displayTitle: "Level 2",
                subtitle: "Learn common nouns",
                lessonRoute: "/practice/g1-nouns-2",
                quizId: "english-g1-nouns-2",
                content: [
                  { type: "text", value: "Common nouns are general names like 'car' or 'dog'." }
                ]
              },
              {
                id: 3,
                title: "Proper Nouns",
                displayTitle: "Level 3",
                subtitle: "Learn proper nouns",
                lessonRoute: "/practice/g1-nouns-3",
                quizId: "english-g1-nouns-3",
                content: [
                  { type: "text", value: "Proper nouns are specific names like 'John' or 'London'." }
                ]
              }
            ]
          },

          {
            unitId: 2,
            title: "Verbs",
            lessons: []
          },

          {
            unitId: 3,
            title: "Adjectives",
            lessons: []
          }
        ]
      },

      Malay: {
        units: [
          {
            unitId: 1,
            title: "Karangan",
            lessons: [
              {
                id: 1,
                title: "What is Karangan?",
                content: [
                  { type: "text", value: "Karangan helps students improve writing skills." }
                ]
              }
            ]
          }
        ]
      },

      Mathematics: {
        units: [
          {
            unitId: 1,
            title: "Addition",
            lessons: [
              {
                id: 1,
                title: "What is addition?",
                displayTitle: "Level 1", 
                lessonRoute: "/practice/g1-addition",
                content: [
                  { type: "text", value: "Addition means combining numbers." }
                ]
              }
            ]
          }
        ]
      }
    }
  }
};