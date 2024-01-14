import { DataAtual } from "@/data/dataAtual";

export const Background = (): string[] => {
    
    const horaAtual = DataAtual();
    let horas: number = parseInt(horaAtual[0]);

    let info;

    if(horas > 0 && horas < 12) {
        return info = ['bg-gradient-to-r from-purple-500 to-pink-500', 'Bom Dia 🌅'];
    } else if (horas >= 12 && horas < 19) {
        return info = ['bg-gradient-to-r from-sky-500 to-indigo-500', 'Boa Tarde ☀️'];
    } else {
        return info = ['bg-gradient-to-r from-violet-500 to-fuchsia-500', 'Boa Noite 🌙'];
    }
}