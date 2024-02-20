import { ReactNode } from "react";

export const Container = ({children}: {children: ReactNode}) => {
    return(
        <div className="max-w-6xl mx-auto px-3">
            {children}
        </div>
    );
}