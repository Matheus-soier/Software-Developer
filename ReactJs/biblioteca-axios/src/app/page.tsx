"use client"

import { api } from "@/utils/ipt";
import axios from "axios";
import Link from "next/link";
import { useRef } from "react";

const Page = () => {

  //Fazendo uma requisição assíncrona do tipo POST com axios
  const handleAddPosts = async () => {
    const res = await api.post('/posts', {
      userId: 98,
      title: "Titulo do post",
      body: 'corpo do post'
    });
    if(res.data.id) {
      console.log("Inserido!");
    } else ("Não inserido")
  }

  //Fazendo uma requisição assíncrona do tipo GET com axios
  const handleGetPosts = async () => {
    const requestParams = { postId: 1 };
    const res = await api.get('/comments', {params: requestParams});
    console.log(res);
  }

  const fileInput = useRef<HTMLInputElement>(null);

  const handleSendFile = async () => {
    if(fileInput.current?.files && fileInput.current.files.length > 0) {
      const file = fileInput.current.files[0];
      const data = new FormData()
      data.append('name', 'Matheus');
      data.append('file', file);

      const res = await axios.post('/posts', data);
      console.log(res.data);
    }
  }

  return(
    <div className="container mx-auto space-y-5 flex flex-col">
        <button onClick={handleAddPosts}>
          Inserir Post
        </button>
      <button onClick={handleGetPosts}> 
        Pegar Posts
      </button>
      <div className="p-5 border border-black flex flex-col gap-2">
        <input ref={fileInput} type="file" name="file" id="file" />
        <button className="bg-black text-white px-4 py-1 rounded-md" onClick={handleSendFile}>Enviar arquivo</button>
      </div>

      <Link href={'/cancel'}>Ir para Página de Cancelar Request</Link>
    </div>
  );
}

export default Page;