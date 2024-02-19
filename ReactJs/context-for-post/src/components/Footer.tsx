import { PostContext } from "@/contexts/PostContext";
import { useContext } from "react";

export const Footer = () => {
    const postCtx = useContext(PostContext);

    return(
        <footer>
            <p>Total de Posts: {postCtx?.posts.length}</p>
        </footer>
    );
}