import { SignUpForms } from "@/types/SignUpForms";
import { UseControllerProps, useController } from "react-hook-form";

export const Input = (props: UseControllerProps<SignUpForms>) => {
    const { field, fieldState } = useController(props);

    return(
        <div className="w-full">
            <input  
                {...field}
                placeholder={props.name}
                className={`${fieldState.invalid ? "border-red-500" : "border-black"} border px-3 py-1 outline-none w-full`}
                maxLength={20}
            />
            {fieldState.error?.type === "required" && <p className="text-red-500 text-sm">Campo Obrigatório</p>}
            {fieldState.error?.type === "minLength" && <p className="text-red-500 text-sm">Deve ter entre 2 e 20 Caracteres</p>}
            {fieldState.error?.type === "min" && <p className="text-red-500 text-sm">Deve ser ter 18 e 100 anos</p>}
            {fieldState.error?.type === "max" && <p className="text-red-500 text-sm">Deve ser ter 18 e 100 anos</p>}
        </div>
    );
}