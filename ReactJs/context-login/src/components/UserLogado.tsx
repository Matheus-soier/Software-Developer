import { UserContext } from "@/contexts/UserContext";
import { useContext } from "react";

export const UserLogado = () => {
    const userCtx = useContext(UserContext);
    
    const handleClickChangeUser = () => {
       userCtx?.setUserLogado('');
    }

    return(
        <>
            {userCtx?.userLogado &&
                <>
                    <p className="my-3">Usuário Logado: {userCtx?.userLogado}</p>
                    <button 
                    className="bg-green-600 px-4 py-2 rounded-md text-white"
                    onClick={handleClickChangeUser}
                    >Alterar Usuário Logado</button>
                </>
            }
            {(!userCtx || userCtx?.userLogado === '') &&
                <p className="my-3">Usuário Deslogado</p>
            }
        </>
    );
}