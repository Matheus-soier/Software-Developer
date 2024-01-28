import { useEffect } from "react";

const Square = () => {
    
    useEffect(() => {
        console.log("Conectado!");

        return () => {
            console.log("Desconectado!")
        }
    });    
    
    return (
        <div className="w-96 h-96 bg-red-500"></div>
    );
}

export default Square;