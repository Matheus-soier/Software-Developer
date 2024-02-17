import { useContext } from "react";
import { OnlineUsers } from "./OnliseUsers";
import { CountContext } from "@/contexts/CountContext";

export const Header = () => {
    const CountCtx = useContext(CountContext);

    return (
        <header>
            <h1 className="text-3xl">Título da Header ({CountCtx?.onlineCount})</h1>
            <OnlineUsers/>
        </header>
    );
};
