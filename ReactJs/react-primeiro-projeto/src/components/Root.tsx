export const Root = () => {
    const info = {
        name: "Elon Musk",
        avatar: "https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcTwRq4pHo9yCQkObujXQYVREJkW3yWmkxdkZKpnUZgPiIZVG0lwnBmjkuLx53qguGjg",
        cargos: ["CEO da Tesla", "CEO da SpaceX"]
    }
    
    const apresentacao = () => {
        return `Nome: ${info.name}`;
    }

    const getDayWeekend = () => {
        let day = new Intl.DateTimeFormat('pt-BR', {weekday: 'long'}).format(new Date());
        return day.charAt(0).toUpperCase() + day.slice(1);
    }

    return (
        //Elemento Root - Fragment
        <>
            <div className="flex flex-col gap-2">
                <div>
                    <h1 style={{color: 'red'}}>{apresentacao()} - {getDayWeekend()}</h1>
                    <img className="w-48" alt={info.name} src={info.avatar} />
                </div>
                <ul>
                    <li>{info.cargos[0]}</li>
                    <li>{info.cargos[1]}</li>
                </ul>
            </div>
        </>
    );
};

