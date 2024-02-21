"use client"

import { ReactNode, createContext, useContext, useState } from "react";

//Criando o type do Contexto passando as variaveis do state
type UserContextType = {
    user: string;
    setUser: (newUser: string) => void;
}

//Criando o contexto
export const UserContext = createContext<UserContextType | null>(null);

//Provider (Provedor, dá acesso ao conteúdo para outros elementos)
export const UserProvider = ({children}: {children: ReactNode}) => {    
    const [user, setUser] = useState<string>('');
    
    return(
        //Value sempre vai receber o objeto com as váriaveis da state
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}

//Hook para facilitar o uso
export const useUser = () => useContext(UserContext);