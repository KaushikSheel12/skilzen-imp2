import questions from "@/data/questions";
import { create } from "zustand";

const initialState = {
  unseen: true,
  attempted: false,
  pending: true,
  time: 0,
  type: "maths",
};

export const useZustand = create((set) => ({
  data: [],
  addData: (item) => set((state) => ({ data: [...state.data, item] })),

  questionIds: [],
  addQuestion: (questionId) =>
    set((state) => {
      if (!state.questionIds.includes(questionId)) {
        return {
          questionIds: [...state.questionIds, questionId],
        };
      }
      return null; // Return null if the ID already exists
    }),

  selectedAnswers: [],
  setSelectedAnswers: (newAnswers) => set({ selectedAnswers: newAnswers }),

  questions: questions,
  setQuestions: (newQuestions) => set({ questions: newQuestions }),

  currentQuestion: {},
  setCurrentQuestion: (currentQuestion) => set({ currentQuestion }),

  showInstructions: false,
  setShowInstructions: (showInstructions) => set({ showInstructions }),

  showAllQuestions: false,
  setShowAllQuestions: (showAllQuestions) => set({ showAllQuestions }),

  showQuiz: true,
  setShowQuiz: (showQuiz) => set({ showQuiz }),
}));

//for Resorses
const useToggleStore = create((set) => ({
  isToggel: false,
  setIsToggel: (value: any) => set({ isToggel: value }),
}));

export default useToggleStore;
