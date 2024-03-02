"use client"

import { api } from "@/utils/ipt";

const Page = () => {

    const controller = new AbortController();
    
    const handleStartRequest = async () => {
        try {
            const res = await api.get('/posts', {
                signal: controller.signal
            });
        } catch (error) {
            console.log("Deu um erro...");
        }
    }

    const handleCancelRequest = () => {
        controller.abort();
    }
    
    return(
        <div className="w-screen h-screen bg-black flex flex-col items-center justify-center text-white space-y-4">
            <button onClick={handleStartRequest}>Fazer Request</button>
            <button onClick={handleCancelRequest}>Cancelar Request</button>
        </div>
    );
}

export default Page;