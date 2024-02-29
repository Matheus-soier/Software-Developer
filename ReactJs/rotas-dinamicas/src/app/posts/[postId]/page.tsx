import { Post } from "@/types/Posts";
import { Metadata } from "next";

type Props = {
    params: {
        postId: string;
    }
}

export const generateMetadata = async ({params}: Props): Promise<Metadata> => {
    
    const postRequest = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
    const post: Post = await postRequest.json();
    
    return {
        title: `${post.title}`
    }
}

const Page = async ({params}: Props) => {
    const postRequest = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
    const post: Post = await postRequest.json();

    if(!post.id) return <div className="text-center mt-10">Post não encontrado!</div>

    return(
            <div className="text-center max-w-2xl mx-auto"> 
                <div>ID: {post.id}</div>
                <h1 className="text-3xl uppercase my-3">{post.title}</h1>
                <p>{post.body}</p>
            </div>
    );
}

export default Page;


// Só funciona no build, renderizza todos os items no SS (Server Side)
export const gerenateStaticParams = async () => {
    const postRequest = await fetch(`https://jsonplaceholder.typicode.com/posts}`);
    const post: Post[] = await postRequest.json();

    return post.map(post=>({
        postId: post.id.toString()
    }));
}