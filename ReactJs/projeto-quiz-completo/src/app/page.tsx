"use client"

import { QuestionItem } from "@/components/QuestionItem";
import { Results } from "@/components/Results";
import { questions } from "@/data/questions";
import { useState } from "react";

const Page = () => {

  const [answers, setAnswers] = useState<number[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const title = "Quiz de culinária"

  const loadNextQuestion = () => {
    if(questions[currentQuestion + 1]) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  }

  const handleAnswer = (answer: number) => {
    setAnswers([...answers, answer]);
    loadNextQuestion();
  }

  const handleRestartButton = () => {
    setAnswers([]);
    setCurrentQuestion(0);
    setShowResult(false);
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-blue-600">
      <div className="w-full max-w-xl rounded-md bg-white text-black shadow shadow-black">
          <div className="p-5 font--bold text-2xl border-b border-gray-300">{title}</div>
          <div className="p-5">
            {!showResult &&
              <QuestionItem
              question={questions[currentQuestion]}
              count={currentQuestion + 1}
              onAnswer={handleAnswer}
            />}
            {showResult &&
              <Results questions={questions} answers={answers} />
            }
          </div>
          <div className="p-5 text-center border-t border-gray-300">
            {!showResult &&
              `${currentQuestion + 1} de ${questions.length} ${questions.length === 1 ? "pergunta" : "perguntas"}`
            }
            {showResult &&
              <button 
              className="px-5 py-3 bg-blue-500 text-white rounded-md"
              onClick={handleRestartButton}
              >Reiniciar Quiz</button>
            }
          </div>
      </div>
    </div>
  );
}

export default Page;