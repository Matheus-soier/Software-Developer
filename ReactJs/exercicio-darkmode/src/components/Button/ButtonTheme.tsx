
import { useTheme } from "@/contexts/ThemeContext";
import { MdOutlineDarkMode } from "react-icons/md";

type ButtonType = {
    label: string;
    onClick: () => void;
}

export const ButtonTheme = ({label, onClick}: ButtonType) => {

    const themeCtx = useTheme();

    return(
        <button 
        className="px-4 py-2 rounded-lg font-semibold flex items-center flex-row-reverse gap-1 dark:bg-white dark:text-slate-900 bg-slate-900 text-white"
        onClick={onClick}
        >
            {label}
            <MdOutlineDarkMode className="w-6 h-6"/>
        </button>
    );
}