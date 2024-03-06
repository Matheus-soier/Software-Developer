"use client"

import { useQuery } from "@tanstack/react-query";
import { getPost, getPosts } from "./api";

export const usePosts = () => useQuery({ queryKey: ['posts'], queryFn: getPosts });

export const usePost = (id: number) => useQuery({ queryKey: ['post', id], queryFn: () => getPost(id) });

