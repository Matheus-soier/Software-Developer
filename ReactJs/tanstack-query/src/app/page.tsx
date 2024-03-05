"use client"

import { Post } from "@/types/Post";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Page = () => {

  const query = useQuery({
    queryKey: ['posts'],
    queryFn: async (): Promise<Post[]> => { //Typando retorno da função como um Array de Posts
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      return res.data;
    }
  });

  return(
    <div className="container mx-auto">
      {query.isLoading && "Carregando..."}
      {query.data &&
        <ul>
          {query.data.map(item => (
            <li key={item.id}>{item.title}</li>
            ))}
        </ul>
      }
    </div>
  )
}

export default Page;