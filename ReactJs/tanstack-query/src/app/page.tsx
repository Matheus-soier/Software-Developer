"use client"

import { usePost, usePosts } from "@/utils/queries";
import { useState } from "react";

const Page = () => {

  const [canLoading, setCanLoading] = useState(false);

  const posts = usePosts(canLoading);
  const post = usePost(5);

  const handleTriggerLoading = () => {
    setCanLoading(true);
  }

  return(
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mt-5 mb-8 text-center">Lista de Posts</h1>
      <div className="grid grid-cols-2 gap-5">
          <div>
            <h1 className="font-bold text-3xl mb-5">Exibindo Todos os Posts Disponíveis</h1>
            {!canLoading &&
              <button className="border border-black w-fit h-fit px-5 py-2 rounded-xl"
              onClick={handleTriggerLoading}>
                Carregar Posts
              </button>
            }
            {posts.isLoading && "Carregando..."}
            {!post.isLoading && post.isFetching && "Está Recarregando..."}
            {posts.data &&
            <ul>
                {posts.data.map(item => (
                  <div key={item.id}>
                    <h2 className="font-bold text-lg">{item.title}</h2>
                    <p>{item.body}</p>
                  </div>
                  ))}
              </ul>
            }
            {post.isLoading && "Carreganddo..."}
          </div>
          {post.data && 
          <div>
            <h1 className="font-bold text-2xl mb-5">Exibindo 1 Post Específico</h1>
            <h2 className="text-lg font-bold">{post.data.title}</h2>
            <p>{post.data.body}</p>
          </div>
          }
      </div>
    </div>
  )
}

export default Page;

// Passos para criação das API's
// Criar Provider -> api -> queries -> types 