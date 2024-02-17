import { ReactNode, createContext, useState } from "react";

type UserContextType = {
    userLogado: string;
    setUserLogado: (u:string) => void;
}

export const UserContext = createContext<UserContextType | null>(null);

export const UserProvider = ({children}: {children: ReactNode}) => {
    const [userLogado, setUserLogado] = useState<string>('Matheus Soier');
    return(
        <UserContext.Provider value={{userLogado, setUserLogado}}>
            {children}
        </UserContext.Provider>
    );
}