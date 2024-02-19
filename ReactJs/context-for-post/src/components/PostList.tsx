import { PostContext } from "@/contexts/PostContext";
import { useContext } from "react";

export const PostList = () => {
    const postCtx = useContext(PostContext);
    
    const handleRemovePost = (id: number) => {
        postCtx?.removePost(id);
    }
    
    return(
        <div>
            {postCtx?.posts.map(item => (
                <div key={item.id} className="border-b border-gray-500 p-3 mb-3 flex items-start justify-between">
                    <div>
                        <div className="text-xl font-bold mb-2">{item.title}</div>
                        <div className="text-sm">{item.body}</div>
                    </div>
                    <button 
                    className="bg-sky-500 px-4 py-1 text-white rounded-md"
                    onClick={() => handleRemovePost(item.id)}
                    >Remove Post</button>
                </div>
            ))}
        </div>
    );
}