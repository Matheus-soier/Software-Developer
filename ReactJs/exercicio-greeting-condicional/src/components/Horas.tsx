import { DataAtual } from "@/data/dataAtual";

export const Horas = () => {
    const horaAtual = DataAtual();
    
    return (
        <div className="text-white text-7xl font-bold">
            {horaAtual[0]} : {horaAtual[1]}
        </div>
    );
}