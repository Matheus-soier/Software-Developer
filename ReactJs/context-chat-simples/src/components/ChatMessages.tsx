import { useChat } from "@/contexts/ChatContext";
import { useUser } from "@/contexts/UserContext";

export const ChatMessages = () => {
    const chatCtx = useChat();

    return(
        <div className="flex flex-col gap-1">
            {chatCtx?.chat.map(item => (
                <div key={item.id}
                className={`border border-gray-500 text-sm rounded-md p-2 w-max 
                ${item.user === 'bot' ? 
                'self-start text-left' : 
                'self-end text-right'
            }`}
                >
                    <div className="font-bold">{item.user}</div>
                    <p>{item.text}</p>
                </div>
            ))}
        </div>
    );
}