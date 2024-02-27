"use client"

import { User } from "@/types/User";
import { useEffect, useState } from "react";

const Page = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const getUsers = async () => {
    setLoading(true);
    try {
      // Fazendo a Requisição e aguardando a resposta
    const res = await fetch('https://jsonplaceholder.typicode.com/users'); 
    // Transformando a resposta em um JSON
    const json = await res.json();
    // Setando o JSON no array da State
    setUsers(json);
    } catch (err) {
      console.log("Algo deu errado...");
    }
    setLoading(false);
  }
  
  // Assim que o site renderizar executa o Effect e a Requisição
  useEffect(()=>{
    getUsers();
  }, []);

  const handleAddNewPost = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST', // Método POST
      headers: { //Tipo de dado que estamos mandando
        'Content-type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify({ // Mandando os dados da requisição, transformando de um objeto para um JSON
        title: 'Post de Teste',
        body: 'Corpo de Teste',
        userId: 99
      })
    });
    const json = res.json();
  }

  return(
    <div className="container mx-auto">

    <button className="bg-black text-white px-4 py-1 my-10"
    onClick={handleAddNewPost}
    >Adicionar Novo Post</button>

      <h1 className="text-3xl">Lista de Clientes</h1>
      {loading && "Carregando"}
      {!loading && users.length > 0 &&
        <ul>
          {users.map(item => (
        <li className="list-none" 
        key={item.id}>{item.name} - ({item.address.city})</li>
      ))}
        </ul>
      }
      {!loading && users.length === 0 && "Não há usuários para exibir!"}
    </div>
  );
}

export default Page;