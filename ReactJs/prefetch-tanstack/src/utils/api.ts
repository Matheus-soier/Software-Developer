import { Post } from "@/types/Post";
import { User } from "@/types/User";
import axios from "axios";

const req = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
});

//Querys
export const getPosts = async (): Promise<Post[]> => (await req.get('/posts')).data;
export const getPost = async (id: number): Promise<Post> => (await req.get(`/posts/${id}`)).data;
export const getUsers = async (): Promise<User[]> => (await req.get('/users')).data;

//Mutation
export const addPost = async (data: Omit<Post, 'id'>) => (await req.post('/posts', data)).data;