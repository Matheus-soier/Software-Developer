import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getPost, getPosts, getUsers } from "./api";
import { queryClient } from "./queryClient";

export const usePosts = () => useQuery({ queryKey: ['posts'], queryFn: getPosts});

export const usePost = (id: number, enabled: boolean) => useQuery({ queryKey: ['post', id], queryFn: () => getPost(id), enabled, placeholderData: keepPreviousData});

export const useUsers = () => useQuery({ queryKey: ['users'], queryFn: getUsers });

//Prefetch
export const useUsersPrefetch = async () => {
    await queryClient.prefetchQuery({
        queryKey: ['users'],
        queryFn: getUsers,
        staleTime: Infinity
    });
}