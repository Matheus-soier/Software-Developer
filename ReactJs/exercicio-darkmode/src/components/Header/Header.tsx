"use client"
import { useTheme } from "@/contexts/ThemeContext";
import { ButtonTheme } from "../Button/ButtonTheme";

export const Header = () => {

    const ThemeCtx = useTheme();

    const handleToggleTheme = () => {
        if(ThemeCtx) {
            ThemeCtx.setTheme(ThemeCtx.theme === 'dark' ? 'light' : 'dark');
        }
    }
    
    return(
        <header className="w-full h-16 flex justify-center bg-white dark:bg-slate-900">
            <div className={`flex-grow max-w-6xl flex justify-between items-center px-4`}>
                <div className=" w-10 h-10 rounded-full dark:bg-white bg-slate-900"></div>
                <ButtonTheme label={`${ThemeCtx?.theme === 'dark' ? 'Light Mode' : 'Dark Mode'}`} onClick={handleToggleTheme} />
            </div>
        </header>
    );
}