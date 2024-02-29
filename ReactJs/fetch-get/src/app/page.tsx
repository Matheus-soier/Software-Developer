"use client"

import { User } from "@/types/User";
import { useEffect, useState } from "react";

const Page = () => {

  const [loading, setLoading] = useState<boolean>(true);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(()=>{
    fetch('c')
      .then(res => res.json()) 
      .then(json => {
        setUsers(json); //array de user salvo no state
      }).catch(()=>{ //Executado quando não funcionar
        console.log("Deu um erro!");
      }).finally(()=>{ //Executado quando funciocoinar e não funcionar
        setLoading(false);
      })
  }, []);

  return(
    <div className="container mx-auto">
        <h1 className="text-3xl">Lista de Usuários</h1>
        {loading && "Carregando..."}
        {!loading && users.length > 0 && 
          <ul>
          {users.map(item => (
            <li key={item.id}>{item.name} - ({item.address.city})</li>
          ))}
        </ul>
        }
        {!loading && users.length === 0 && "Não há usuários para exibir."}
    </div>
  );
}

export default Page;