export const DataAtual = (): string[] => {    
        const date = new Date();
        let horas = date.getHours();
        let minutos = date.getMinutes();

        function formatarHoras(hora: number): string {
            return hora < 10 ? `0${hora}` : hora.toString();
        }

        let horaFormatada: string = formatarHoras(horas);
        let minutoFormatado: string = formatarHoras(minutos);

        let objHours = [horaFormatada, minutoFormatado];

        return objHours;
}
