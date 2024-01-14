import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

export const Children = ({children}: Props) => {
    return (
        <div className="w-80 border border-red-500 p-3 my-4">
            {children}
        </div>
    );
}