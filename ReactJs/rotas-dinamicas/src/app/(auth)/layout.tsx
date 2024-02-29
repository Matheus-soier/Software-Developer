import { ReactNode } from "react";

type Props = {
    children: ReactNode;
}

const Page = ({children}: Props) => {
    return(
        <div className="bg-black text-white">
            {children}
        </div>
    );
}

export default Page;