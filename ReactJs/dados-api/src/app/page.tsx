'use client'

import { SignUpForm } from "@/types/SignUpForm";
import { Form, useForm } from "react-hook-form";

const Page = () => {
  const {register, control} = useForm<SignUpForm>();

  const handleSucess = () => {
    alert("Deu tudo certo!");
  }

  const handleError = () => {
    alert('Deu erro!');
  }

   return(
    <div className="w-screen h-screen flex justify-center items-center">

      <Form 
      control={control} 
      action={'https://jsonplaceholder.typicode.com/posts'}
      onSuccess={handleSucess}
      onError={handleError}
      className="flex flex-col gap-3 max-w-md items-center">

        <input {...register('title', {required: true})} className="border border-black outline-none px-3 text-black"/>
        <input {...register('body', {required: true})} className="border border-black outline-none px-3 text-black"/>
        <input {...register('userId', {required: true})} className="border border-black outline-none px-3 text-black"/>

        <button className="bg-black text-white px-3 py-1 w-full">enviar</button>

      </Form>
    </div>
  );
}

export default Page;

