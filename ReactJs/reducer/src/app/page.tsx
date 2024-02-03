"use client"

import { listReducer } from "@/reducers/listReducer";
import { useReducer, useState} from "react";
import { IoIosSearch } from "react-icons/io";

const Page = () => {
  
  const [list, dispatch] = useReducer(listReducer, []);
  const [addField, setAddField] = useState('');

  const handleAddClick = (item: string) => {
    if(item == null || item.trim() == "") return;
    dispatch({
      type: "add",
      payload: {
        text: item.trim()
      }
    });
    setAddField('');
  }

 const handleToggleClick = (id: number) => {
  dispatch({
    type: 'toggle',
    payload: { id }
  })
 }

 const handleRemoveItem = (id: number) => {
  if(!window.confirm("Tem certeza que deseja excluir?")) return false;
  dispatch({
    type: 'remove',
    payload: { 
      id: id 
    }
  })
 }

 const handleEdit = (id: number) => {
  const item = list.find(it => it.id === id);
  if (!item) return false;

  const newText = window.prompt('Editar Tarefa', item.text);
  if (!newText || newText.trim() === '') return false;

  dispatch({
    type: 'editText',
    payload: {
      id: id,
      text: newText  
    }
  })
 }

 return(
    <div className="flex w-screen h-screen items-start flex-col">
        <div className="w-full flex items-center flex-col gap-2 justify-center py-5 shadow-md md:flex-row md:justify-start md:px-10 md:gap-5">
          <h1 className="text-lg font-bold uppercase">Cadastro de Produtos</h1>
          <div className="flex items-center border border-black w-max">
                <input className=" placeholder:text-gray-300 placeholder:text-md w-60 outline-none pl-2 text-lg md:text-md md:placeholder:text-sm py-2 md:py-1" type="text" name="text" id="textInput" required autoFocus placeholder="Ex: Arroz"
                value={addField}
                maxLength={15}
                onChange={e => setAddField(e.target.value)}
                />
                <button onClick={() => handleAddClick(addField)} className="flex justify-center items-center text-black cursor-pointer w-12 h-full text-2xl md:text-lg">
                  <IoIosSearch />
                </button>
          </div>
        </div>
        <div className="w-screen md:w-1/2">
        {list.map(item => (
  <li key={item.id} className="px-8 mt-5 flex gap-3 justify-between">
    <div className="flex items-center gap-1">
      <input
        type="checkbox"
        className="w-6 h-6 cursor-pointer md:w-4 md:h-4"
        checked={item.done}
        onClick={e => handleToggleClick(item.id)}
      />
      <p className="text-lg">{item.text}</p>
    </div>
    <div className="space-x-1">
      <button className="bg-black text-white px-2 py-1 rounded-md text-sm"
      onClick={e => handleEdit(item.id)}
      >Editar</button>
      <button className="bg-red-500 text-white px-2 py-1 rounded-md text-sm"
      onClick={e => handleRemoveItem(item.id)}
      >Excluir</button>
    </div>
  </li>
))}
        </div>
    </div>
  );
}

export default Page;