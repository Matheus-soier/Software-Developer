"use client"

import { listReducer } from "@/reducers/listReducer";
import { useReducer} from "react";

const Page = () => {
  
  const [list, dispatch] = useReducer(listReducer, []);

  const handleAddClick = () => {
    dispatch({
      type: "add",
      payload: {
        text: "Novo Item"
      }
    });
  }

 const handleEditClick = () => {

 }

 const handleToggleClick = () => {

 }

 const handleRemoveClick = () => {
    
 }

 return(
    <div className="flex w-screen h-screen justify-center items-center">
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <button
          className="bg-black text-white px-4 py-1 rounded-md"
          onClick={handleAddClick}>Adicionar</button>
          <button
          className="bg-black text-white px-4 py-1 rounded-md"
          onClick={handleEditClick}>Editar</button>
        </div>
        <div className="flex gap-2">
          <button
          className="bg-black text-white px-4 py-1 rounded-md"
          onClick={handleToggleClick}>Trocar</button>
          <button
          className="bg-black text-white px-4 py-1 rounded-md"
          onClick={handleRemoveClick}>Remover</button>
        </div>
      </div>
    </div>
  );
}

export default Page;