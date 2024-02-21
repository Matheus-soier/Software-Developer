"use client"
import { useUser } from "@/contexts/UserContext";
import { useState } from "react";
import React, { KeyboardEvent } from 'react';

export const NameInput = () => {

    const userCtx = useUser();
    const [nameInput, setNameInput] = useState<string>('');

    const handleKeyUpAction = (event: KeyboardEvent<HTMLInputElement>) => {
        if(event && event.code && event.code.toLowerCase() === 'enter') {
            if(nameInput.trim() !== '' && nameInput !== 'bot') {
                userCtx?.setUser(nameInput.trim());
            }
        }  
    }

    return(
        <div className="mt-14">
            <p className="text-xl mb-4">Qual seu nome?</p>
            <div className="flex gap-3 items-center text-lg">
                <input type="text" name="name" id="name"
                className="flex-1 border border-black rounded-md px-4 py-3 outline-none"
                value={nameInput}
                onChange={e => setNameInput(e.target.value)}
                onKeyUp={handleKeyUpAction}
                />
            </div>
        </div>
    );
}