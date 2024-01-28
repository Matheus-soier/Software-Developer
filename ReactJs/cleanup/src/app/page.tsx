"use client"

import Square from "@/components/Square";
import { useState } from "react";

const Page = () => {
  
  const [show, setShow] = useState(false)
  
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <button 
      onClick={() => setShow(!show)}>
        Mostrar/Esconder</button>
      {show &&
        <Square />
      }
    </div>
  );
}

export default Page;