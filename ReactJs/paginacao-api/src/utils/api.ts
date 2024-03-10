import { Post } from "@/types/Posts";
import axios from "axios";

const req = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

//Pegando o Data da Requisição
export const getPosts = async (limit: number, start: number): Promise<Post[]> => {
    const res = await req.get(`/posts?_limit=${limit}&_start=${start}`);
    return res.data;
}

