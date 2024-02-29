"use client"
import { useState } from "react";

const Page = () => {
  const [legendInput, setLegendInput] = useState<string>('');
  return(
   <div className="container mx-auto">
      <h1 className="text-3xl">Upload de Imagem</h1>
      <div className="flex flex-col gap-3 border border-dotted border-gray-500 p-3 mt-4 max-w-2xl">
        <input 
        type="file" 
        name="file" 
        id="file" />
        <input 
        type="text"
        placeholder="Digite uma legenda" 
        className="outline-none border border-g p-2 rounded-md ray-500" />
        <button className="bg-black rounded-md text-white p-2">
          Enviar Imagem
        </button>
      </div>
    </div>
  );
}

export default Page;