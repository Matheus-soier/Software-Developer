"use client"
import { useState } from "react"

const Page = () => {

  const [showSecret, setShowSecret] = useState(false);
  const handleClickButton = () => {
    setShowSecret(!showSecret);
  }

  const[nameInput, setNameInput] = useState('');

  return (
    <main className="w-screen h-screen flex flex-col items-center justify-center">
     <div className="flex flex-col items-center gap-10">
       <div className="flex flex-col items-center">
         <button onClick={handleClickButton} className="bg-black px-3 py-1 text-white rounded-md">{showSecret ? "Ocultar" : "Mostrar"}</button>
         {showSecret &&
           <div className="bg-sky-500 p-3 rounded-md mt-3 text-white">💰Área Secreta💰</div>
         }
       </div>
       <div className="space-x-3">
         <input
         type="text"
         name="name"
         id="name"
         className="border border-black rounded-md px-3 py-1"
         placeholder="Digite seu nome"
         onChange={e => setNameInput(e.target.value)}
         />
        </div>
        <p>Seu nome é: {nameInput}</p>
     </div>
     </main>
  )
}

export default Page;