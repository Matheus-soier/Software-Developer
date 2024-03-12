"use client"

import { usePost, usePosts, useUsersPrefetch } from "@/utils/queries";
import { useState } from "react";

const Page = () => {
  useUsersPrefetch();

  const [canLoading, setcanLoading] = useState<boolean>(false);
  const [id, setId] = useState<number>(1);
  const [value, setValue] = useState<string>('');

  const posts = usePosts();
  const post = usePost(id ,canLoading);
  
  const handleInsertId = () => setId(parseInt(value, 10));

  return(
    <div className="flex flex-col items-center">
      <div className="flex flex-col gap-3 items-center">
        <button className="bg-black text-white px-4 py-1 rounded-md my-4 w-fit" onClick={() => setcanLoading(!canLoading)}>Exibir Apenas 1 Post</button>
        {canLoading &&
        <div className="flex flex-col gap-3 items-center">
            <input type="number" className="border border-black outline-none" value={value} onChange={e => setValue(e.target.value)} />
            <button onClick={handleInsertId}>Pesquisar</button>
            <p className="font-semibold">{post.data?.id}. {post.data?.title}</p>
            <p>{post.data?.body}</p>
        </div>
        }
      </div>
      {!canLoading &&
      <>
        {posts.isLoading && "Carregando..."}
        {posts.data &&
          <ul>
          {posts.data.map(item => (
            <li key={item.id}
            className="font-semibold">
              {item.id}. {item.title}
            </li>
          ))}
          </ul>
        }
        </>
      }
    </div>
  );
}

export default Page;