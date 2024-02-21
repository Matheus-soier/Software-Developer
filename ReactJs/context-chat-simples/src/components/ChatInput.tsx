import { useChat } from "@/contexts/ChatContext";
import { KeyboardEvent, useState } from "react";

type Props = {
    name: string;
}

export const ChatInput = ({ name }: Props) => {
    const chatCtx = useChat();
    const [textInput, setTextInput] = useState<string>('');
    
    const handleKeyUpAction = (event: KeyboardEvent<HTMLInputElement>) => {
        if(event && event.code && event.code.toLowerCase() === 'enter') {
            if(textInput.trim() !== '') {
                chatCtx?.addMessage(name, textInput.trim());
                setTextInput('');
            }
        }
    }


    return(
        <input 
            className="outline-none w-full bg-transparent text-black"
            placeholder={`${name}, digite uma mensagem (e aperte enter)`}
            value={textInput}
            onChange={e => setTextInput(e.target.value)}
            onKeyUp={handleKeyUpAction}
        />
    );
}