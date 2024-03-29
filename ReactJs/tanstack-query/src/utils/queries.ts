"use client"

import { useQuery } from "@tanstack/react-query";
import { getPost, getPosts } from "./api";

export const usePosts = (enabled: boolean) => useQuery({ queryKey: ['posts'], queryFn: getPosts, enabled, staleTime: Infinity });
export const usePost = (id: number) => useQuery({ queryKey: ['post', id], queryFn: () => getPost(id) });



