import { ButtonBuy } from "../ButtonBuy/ButtonBuy";
import { SectionRifasOn } from "./SectionRifasOn";

export const SectionRifasComplete = () => {
    return(
        <div className="flex flex-col gap-2">
            <div className="flex w-full h-max p-2 bg-second rounded-lg justify-center items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
                <p className="text-white">Acontecendo agora!</p>
            </div>
            <div className="block">
                <SectionRifasOn />
            </div>
            <div className="flex w-full">
                <ButtonBuy />
            </div>
        </div>
    );
}