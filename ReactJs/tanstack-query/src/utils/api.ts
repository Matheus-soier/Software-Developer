import { Post } from "@/types/Post";
import { User } from "@/types/User";
import axios from "axios";

const req = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

export const getPosts = async (): Promise<Post[]> => {
    const res = await req.get('/posts');
      return res.data;
}

export const getUsers = async (): Promise<User[]> => {
    const res = await req.get('/users');
      return res.data;
}

export const getPost = async (id: number): Promise<Post> => {
    const res = await req.get(`/posts/${id}`);
    return res.data;
}