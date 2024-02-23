import { AiFillPlusCircle } from "react-icons/ai";

export const ButtonBuy = () => {
    return(
        <button className="flex items-center gap-1 text-white bg-buttonBuy w-full justify-center py-3 rounded-lg font-semibold">
            <AiFillPlusCircle className="w-5 h-5"/>
            Compre seus Bilhetes agora!
        </button>
    );
}