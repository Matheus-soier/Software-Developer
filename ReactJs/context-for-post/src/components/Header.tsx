import { PostContext } from "@/contexts/PostContext";
import { useContext, useState } from "react";

export const Header = () => {
    const [titleInput, setTitleInput] = useState('');
    const [bodyInput, setBodyinput] = useState('');

    const postCtx = useContext(PostContext);

    const handleAddButton = () => {
        if(titleInput && bodyInput) {
            postCtx?.addPost(titleInput, bodyInput);
            setTitleInput('');
            setBodyinput('');
        }
    }

    return(
        <header className="my-5">
            <h1 className="text-3xl">Título da Página</h1>
            <div className=" my-5 border border-dotted border-gray-400 p-3 flex flex-col gap-3 max-w-xl">
                <input 
                    type="text" 
                    name="title" id="title" 
                    placeholder="Digite um Título" 
                    className="border border-gray-300 p-2 text-black text-xl"
                    value={titleInput}
                    onChange={e => setTitleInput(e.target.value)}
                    />
                <textarea 
                    name="body" 
                    id="body" 
                    placeholder="Digite um corpo" 
                    className="border border-gray-300 p-2 text-black text-xl h-24"
                    value={bodyInput}
                    onChange={e => setBodyinput(e.target.value)}
                    ></textarea>
                <button 
                    className="bg-blue-500 text-white p-3 rounded-md"
                    onClick={handleAddButton}
                >Adicionar</button>
            </div>
        </header>
    );
}