import { CountContext } from "@/contexts/CountContext";
import { useContext } from "react";

export const OnlineUsers = () => {
    const countCtx = useContext(CountContext);
    
    const HandleClickBanAll = () => {
        countCtx?.setOnlineCount(0);
    }

    const HandleClickAddPeople = () => {
        countCtx?.setOnlineCount(countCtx.onlineCount + 1);        
    }

    return(
        <>
            <p>Online: {countCtx?.onlineCount}</p>
            <div className="flex gap-3">
                <button onClick={HandleClickBanAll}
                className="bg-black py-2 px-8 rounded-md text-white"
                >Banir Galera</button>
                
                <button onClick={HandleClickAddPeople}
                className="bg-green-600 py-2 px-8 rounded-md text-white"
                >Adicionar 1 Pessoa</button>
            </div>
        </>
    );
}