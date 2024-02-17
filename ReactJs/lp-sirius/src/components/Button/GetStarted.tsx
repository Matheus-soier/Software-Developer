import { ArrowRight } from "../Icons/ArrowRight";

export const GetStarted = () => {
    return(
        <button className="uppercase bg-primary px-4 py-3 rounded-full text-black sm:flex items-center group hidden">
            <span className=" mr-2">Entrar em Contato</span>
            <ArrowRight />
        </button>
    );
}