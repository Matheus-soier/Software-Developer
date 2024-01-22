"use client"

import { ListaPerguntas } from "@/data/ListaPerguntas";
import { useState } from "react";

const Page = () => {

  let [count, setCount] = useState(0);
  let contador = 0;

  const checkQuestion = (key: number) => {
    if(key === ListaPerguntas[count].correta && ListaPerguntas[count].id < ListaPerguntas.length) {
      setCount(n => n+1);
    }
    if (key === ListaPerguntas[count].correta) {
      ++contador;
    }
    if(contador > ListaPerguntas.length) {
      setQuestions(false);
    }
  }

  let [questions, setQuestions] = useState(true);

  return (
    <div className="w-screen h-screen flex justify-center items-center"> 
      <div className="w-full max-w-96 h-max bg-gray-100 rounded-md shadow-md m-3">
        <div className="w-full p-3 shadow-sm">
          <h1 className="font-bold text-lg">Quiz de Culinária</h1>
        </div>
        {questions && 
        <div>
          <div className="p-3 shadow-sm">
            <p className="font-bold text-lg">{ListaPerguntas[count].id}. {ListaPerguntas[count].pergunta}</p>
            {ListaPerguntas[count].respostas.map(item => (
              <div
              key={item.key}
              className={`px-3 py-1 bg-sky-300/20 rounded-md my-3 cursor-pointer border border-sky-200 hover:bg-sky-300/50`}
              onClick={e => checkQuestion(item.key)}
              >
                <span>{item.pergunta}</span>
              </div>
            ))}
          </div>
          <div className="text-sm text-center p-3">
            <p>{ListaPerguntas[count].id} de {ListaPerguntas.length} perguntas</p>
          </div>
        </div>
        }
        {!questions &&
            <div className="flex justify-center items-center h-60">
              <p className="p-3 font-bold text-3xl">FIM</p>
            </div>
        }
      </div>
    </div>
  );
}

export default Page;