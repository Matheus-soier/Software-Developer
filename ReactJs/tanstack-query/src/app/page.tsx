"use client"

import { usePost, usePosts } from "@/utils/queries";

const Page = () => {

  const posts = usePosts();
  const post = usePost(5);

  return(
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mt-5 mb-8 text-center">Lista de Posts</h1>
      <div className="grid grid-cols-2 gap-5">
          {posts.isLoading && "Carregando..."}
          {posts.data &&
            <ul>
              <h1 className="font-bold text-3xl mb-5">Exibindo Todos os Posts Disponíveis</h1>
              {posts.data.map(item => (
                <div key={item.id}>
                  <h2 className="font-bold text-lg">{item.title}</h2>
                  <p>{item.body}</p>
                </div>
                ))}
            </ul>
          }
          {post.isLoading && "Carreganddo..."}
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