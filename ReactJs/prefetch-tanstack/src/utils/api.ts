import { Post } from "@/types/Post";
import { User } from "@/types/User";
import axios from "axios";

const req = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
});

export const getPosts = async (): Promise<Post[]> => (await req.get('/posts')).data;
export const getPost = async (id: number): Promise<Post> => (await req.get(`/posts/${id}`)).data;
export const getUsers = async (): Promise<User[]> => (await req.get('/users')).data;
