"use client"

import { Input } from "@/components/Input";
import { SignUpForms } from "@/types/SignUpForms";
import { SubmitHandler, useForm } from "react-hook-form";

const Page = () => {
  const {control, setValue, handleSubmit, register, formState: {errors}} = useForm<SignUpForms>();

  const handleFormSubmit: SubmitHandler<SignUpForms>  = (data) => {
    console.log(data);
  }

  return(
    <div className="w-screen flex flex-col items-center px-3">
      
      <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-5 flex flex-col items-center my-5 w-72">

        <Input 
        control={control}
        name="name"
        rules={{ required: true, minLength: 2, maxLength: 20 }}
        />

        <Input 
        control={control}
        name="lastName"
        rules={{ required: true, minLength: 2, maxLength: 20 }}
        />

        <Input 
        control={control}
        name="age"
        rules={{ required: true, min: 18, max: 100 }}
        />
        
        <input type="submit" value="Enviar" className="bg-black text-white w-full h-10 font-semibold cursor-pointer"/>

      
      </form>
      <button onClick={() => setValue('age', 18)}>Definir como maior de idade</button>
    </div>
  );
}

export default Page;