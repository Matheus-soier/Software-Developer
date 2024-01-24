"use client"

import { useEffect, useState } from "react";

const Page = () => {
  
  const [name, setName] = useState<string>('Matheus');
  const [age, setAge] = useState<number>(20);
  
  useEffect(() => {
    console.log("Rodou o Effect");
  }, [name]);

  return (
    <div className="w-scree h-screen flex flex-col justify-center items-center">
      <p className="text-2xl">Meu nome é {name} e eu tenho {age} anos!</p>
      <div className="mt-8 flex gap-5">
        <button className="bg-sky-500 text-white px-5 py-2 rounded-md" onClick={()=>{setName("Pedro")}}>Mudar nome para Pedro</button>
        <button className="bg-sky-500 text-white px-5 py-2 rounded-md" onClick={()=>{setName("Matheus")}}>Mudar nome para Matheus</button>
        <button className="bg-sky-500 text-white px-5 py-2 rounded-md" onClick={()=>{setAge(90)}}>Mudar idade para 90</button>
        <button className="bg-sky-500 text-white px-5 py-2 rounded-md" onClick={()=>{setAge(20)}}>Mudar idade para 20</button>
      </div>
    </div>
  );
}

export default Page;