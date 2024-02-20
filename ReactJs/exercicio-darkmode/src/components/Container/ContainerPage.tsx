"use client"

import { useTheme } from "@/contexts/ThemeContext";
import { ReactNode } from "react";

export const ContainerPage = ({children}: {children: ReactNode}) => {

    const themeCtx = useTheme();

    return(
        <div className={`w-screen h-screen
            ${themeCtx?.theme === 'dark' ? 'bg-slate-900 text-white': 'bg-white text-slate-900'}
        `}>
            <div className="max-w-6xl mx-auto px-3">
                {children}
            </div>
        </div>
    );
}