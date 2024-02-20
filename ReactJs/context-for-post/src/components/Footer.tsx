import { usePosts } from "@/contexts/PostContext";

export const Footer = () => {
    const postCtx = usePosts();

    return(
        <footer>
            <p>Total de Posts: {postCtx?.posts.length}</p>
        </footer>
    );
}