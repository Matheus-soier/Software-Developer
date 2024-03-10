"use client"

import { keepPreviousData, useQuery } from "@tanstack/react-query"
import { getPosts } from "./api"

//Criando Hook para meu useQuery - Posts
export const usePosts = (limit: number, start: number) => {
    return useQuery({ 
        queryKey: ['posts', { limit, start }], 
        queryFn: () => getPosts(limit, start) ,
        placeholderData: keepPreviousData, //Mantem dados anteriores até dados novos serem recebidos
    });
}
