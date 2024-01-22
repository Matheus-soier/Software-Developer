type Pergunta = {
    id: number;
    pergunta: string;
    respostas: {key: number, pergunta: string}[];
    correta: number;
}

export const ListaPerguntas:Pergunta[] = [
    {
    id: 1, 
    pergunta: "Qual ingrediente não pode faltar?", 
    respostas: [
        {key: 1, pergunta: "Farinha"},
        {key: 2, pergunta: "Corante"},
        {key: 3, pergunta: "Água"},
        {key: 4, pergunta: "Açucar"}
    ],
    correta: 2
    },
    {
    id: 2, 
    pergunta: "Qual ingrediente é doce?", 
    respostas: [
        {key: 1, pergunta: "Água"},
        {key: 2, pergunta: "Arroz"},
        {key: 3, pergunta: "Feijão"},
        {key: 4, pergunta: "Açucar"}
    ],
    correta: 4
    }
];

