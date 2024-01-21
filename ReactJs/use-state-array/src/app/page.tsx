"use client"

import { useState } from "react";
import { TodoList } from "@/types/TodoList";
import { list } from "postcss";

const Page = () => {

  const [itemInput, setItemInput] = useState('');
  
  const handleAddButton = () => {
    if(itemInput !== '') {
    setList([...list, {label: itemInput, check: false}]);
    }
    setItemInput('');
  }

  const [list, setList] = useState<TodoList[]>([
    {label: "Escovar os dentes", check: false},
    {label: "Arrumar a cama", check: false}
  ]);

  const deleteItem = (index: number) => {
    //Filter adiciona apenas itens como true
    setList(list.filter((item, key) => key !== index));
  }

  const toggleCheck = (index: number) => {
    let newList = [...list];
    newList[index].check = !newList[index].check;
    setList(newList);
  }

  return (
   <div className="w-screen h-screen flex justify-center items-start p-4">
    <div className="flex flex-col items-center gap-3">
      <h1 className="text-3xl font-bold">Lista de Tarefas</h1>
      <div className="bg-gray-800 px-10 py-5 flex gap-3 rounded-md border-2 border-gray-600">
        <input
        type="text"
        name="itemList" id="itemList"
        placeholder="O que deseja Fazer?"
        className="rounded-md outline-none text-black px-2 py-1"
        value={itemInput}
        onChange={e => setItemInput(e.target.value)}
        />
        <button 
        className="bg-white text-black px-2 py-1 rounded-md"
        onClick={handleAddButton}
        >Adicionar</button>
      </div>
      
      <p>{list.length > 0 ? `${list.length} itens na lista` : `${list.length} itens na lista, adiciona algo aí🙄`}</p>

      <ul className="flex flex-col items-center w-full max-w-lg pl-5">
        {list.map((item, index) => (
         <li 
          key={index}
          className="flex gap-2 items-center"
          >
            <input type="checkbox" checked={item.check} className="cursor-pointer" onClick={() => toggleCheck(index)}/>
            {item.label} - <button onClick={() => deleteItem(index)} className="hover:underline text-red-700">apagar</button></li>
        ))}
        </ul>
    </div>
   </div>
  );
}

export default Page;
