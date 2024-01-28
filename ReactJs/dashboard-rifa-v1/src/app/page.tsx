"use client"

import { useState } from "react";

const Page = () => {

  const [name, setName] = useState("Gustavo");

  const handleChangeName = () => {
    setName("Matheus");
  }

  return (
    <div className="w-screen h-screen bg-black flex flex-col items-center justify-center">
      <p className="text-white">{name}</p>
      <button className="bg-white px-3 py-1 rounded-md mt-2"
      onClick={handleChangeName}
      >Mudar nome</button>
    </div>
  );
}

export default Page;