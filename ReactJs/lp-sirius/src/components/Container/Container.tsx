import { ReactNode } from "react";

type Props = {
    children: ReactNode;
  }

export const Container: React.FC<Props> = ({children}) => {
    return(
        <div className="max-w-screen-xl mx-auto px-3 flex flex-col gap-4">
            {children}
        </div>
    );
}