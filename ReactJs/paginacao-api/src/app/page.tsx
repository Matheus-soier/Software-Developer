"use client"
import { usePosts } from "@/utils/queries";
import { useState } from "react";

const Page = () => {

  const [page, setPage] = useState<number>(0);
  const limit = 4;
  const start = limit * page;
  const posts = usePosts(limit, start);
  console.log(posts);

  return(
    <div className="w-sceen h-screen flex flex-col justify-start p-5 items-center">
      <h1 className="font-bold text-2xl uppercase">Paginação com TanStack</h1>
      <div className="flex items-center gap-3 border border-black p-3 mt-3">
        <h3 className="text-md">Itens Por Página: {limit}</h3>
        <p>|</p>
        <h3 className="text-md">Página Atual: {page + 1}</h3>
      </div>
      <div className="flex items-center gap-3 text-white mt-3">
        
        <button className="bg-red-400 px-3 py-1" 
        onClick={() => setPage( page === 0 ? 0 : page - 1 )}>
          Página anterior
        </button>
        
        <button className="bg-green-400 px-3 py-1" 
        onClick={() => setPage(page + 1)}>
          Próxima Página
        </button>
      
      </div>
      {posts.isLoading && "Carregando..."}
      {posts.data &&
        <ul className="my-8 space-y-3 w-96">
          {posts.data.map(item => (
            <div key={item.id}>
              <h3 className="font-bold">{`${item.id}. ${item.title}`}</h3>
              {/* <p>{item.body}</p> */}
            </div>
          ))}
        </ul>
      }
    </div>
  );
}

export default Page;