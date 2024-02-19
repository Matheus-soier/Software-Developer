import { ArrowRight } from "../Icons/ArrowRight";

export const GetStarted = () => {
    return(
        <button className=" bg-primary px-4 py-3 rounded-full text-black flex items-center group font-semibold">
            <span className="mr-2">Entrar em Contato</span>
            <ArrowRight />
        </button>
    );
}