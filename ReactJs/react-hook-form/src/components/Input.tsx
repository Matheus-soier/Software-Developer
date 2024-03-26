import { SignUpForms } from "@/types/SignUpForms";
import { UseControllerProps, useController } from "react-hook-form";

type PropsType = {
    type: 'text' | 'number' | 'email';
}

export const InputNativo = ({ type, ...props }: PropsType & Partial<UseControllerProps<SignUpForms>>) => {
    const { field, fieldState } = useController(props as UseControllerProps<SignUpForms>);
   
    return(
        <div className="w-full">
            <input
            type={type} 
            {...field} 
            placeholder={props.name || ""}
            className={`${fieldState.invalid ? `border-red-500` : `border-black`} border px-3 py-1 outline-none w-full`}
            maxLength={20}
            />
            {fieldState.error?.type === "required" && <p className="text-sm text-red-500">Campo obrigatório</p>}
            {fieldState.error?.type === "minLength" && <p className="text-sm text-red-500">Deve ter entre 2 e 20 caracteres</p>}
            {fieldState.error?.type === "min" && <p className="text-sm text-red-500">Deve ter no mínimo 18 anos</p>}
            {fieldState.error?.type === "max" && <p className="text-sm text-red-500">Deve ter no maximo 100 anos</p>}
        </div>
    );
}