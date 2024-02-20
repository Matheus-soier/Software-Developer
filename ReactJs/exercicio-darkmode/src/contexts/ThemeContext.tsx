"use client"
import { ReactNode, createContext, useContext, useEffect, useState } from "react";

type ThemeContextType = {
    theme: string;
    setTheme: (newTheme: string) => void;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);

const STORAGE_KEY = 'themeContextKey';

export const ThemeProvider = ({children}: {children: ReactNode;}) => {
    
    const [theme, setTheme] = useState(localStorage.getItem(STORAGE_KEY) || 'light');

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, theme);
    }, [theme]);
    
    return(
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => useContext(ThemeContext);