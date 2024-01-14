interface Props {
    autor?: string;
}

interface Props {
    frase: string;
}

export const Autor = ({autor, frase}: Props) => {
    return (
        <div className="w-96 border-2 border-red-600 p-3 text-3xl text-center italic">
            <h3 className="text-3xl font-bold italic">{frase}</h3>
            {autor &&
                <p className="text-right text-sm">{autor}</p>
            }
        </div>
    );
}

//Só exibe caso o JSX caso o autor exista {autor &&}

//Operador ternário quando retorna ele mesmo
// antigo -> {autor ? autor : "Autor desconhecido!"}
// novo -> {autor ?? "Autor desconhecido!"}

