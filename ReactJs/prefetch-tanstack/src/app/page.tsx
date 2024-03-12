"use client"

import { useAddPost } from "@/utils/mutations";
import { usePost, usePosts, useUsersPrefetch } from "@/utils/queries";
import { useState } from "react";

const Page = () => {
  useUsersPrefetch();

  const [canLoading, setcanLoading] = useState<boolean>(false);
  const [id, setId] = useState<number>(1);
  const [value, setValue] = useState<string>('');

  const posts = usePosts();
  const post = usePost(id ,canLoading);
  const addPost = useAddPost();

  const handleInsertId = () => setId(parseInt(value, 10));

  // const addMutation = useMutation({
  //   mutationFn: addPost,
  //   onMutate: (data) => console.log(data),
  //   onError: (error, data, context) => console.log(),
  //   onSuccess: (error, data, context) => console.log(),
  //   //Maneira 1 de resetar o status da mutation
  //   onSettled: (retorno, error, data, contexto) => resetMutation()
  // });

  // const resetMutation = () => {
  //   addMutation.reset();
  // }

  const handleAddNewPost = () => {
    addPost.mutate({
      userId: 1,
      body: "Oii",
      title: "Título de teste"
    }, {
      //Maneira 2 de resetar o status da mutation
      onSettled: () => addPost.reset()
    });
  }

  return(
    <div className="flex flex-col items-center p-3">
      <div className="flex flex-col gap-3 items-center">
        <button className="bg-black text-white px-4 py-1 rounded-md my-4 w-fit" onClick={() => setcanLoading(!canLoading)}>{canLoading ? "Ver Todos Posts" : "Ver 1 Post"}</button>
        {canLoading &&
        <div className="flex flex-col gap-3 items-center">
            <input type="number" className="border border-black outline-none" value={value} onChange={e => setValue(e.target.value)} onKeyDown={e => {e.key === "Enter" && handleInsertId()}} />
            <button onClick={handleInsertId}>Pesquisar</button>
            <p className="font-semibold">{post.data?.id}. {post.data?.title}</p>
            <p>{post.data?.body}</p>
            <div className="border border-black rounded w-full text-center p-5 space-y-4">
              <p className="font-semibold">Adicione um Novo Post</p>
              <p>{`Status: ${addPost.status}`}</p>
              <button disabled={addPost.isPending} className="bg-green-500 text-white px-5 py-1 rounded disabled:bg-gray-400" onClick={handleAddNewPost}>Adicionar</button>
            </div>
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