import { useContext } from "react";
import { UserLogado } from "./UserLogado";
import { UserContext } from "@/contexts/UserContext";

export const Header = () => {
    const UserCtx = useContext(UserContext);
    
    return(
        <header>
            <h1 className="text-3xl">Titulo da página {UserCtx?.userLogado}</h1>
            <UserLogado />
        </header>
    );
}