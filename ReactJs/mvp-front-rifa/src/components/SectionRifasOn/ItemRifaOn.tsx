import { ListaRifasOn } from "@/data/ListaRifasOn";
import Image from "next/image";

export const ItemRifaOn = () => {
    return(
        <>
        {ListaRifasOn.map(item => (
            <div 
            className={`${ListaRifasOn.length === 1 ? 'w-full' : 'w-80'} flex max-h-80 bg-second rounded-lg items-start gap-1`}
            key={item.id}>
                <Image src={item.image} alt={item.title} width={112} height={112} className="rounded-tl-lg rounded-bl-lg"/>
                <div className="flex flex-col justify-between h-full p-2">
                    <div className="flex flex-col gap-2 text-white">
                        <h3 className="font-bold">{item.title}</h3>
                        <p className="text-[14px]">{item.body}</p>
                    </div>
                    <p className="text-white font-semibold bg-red-500 w-max text-[11px] px-4 rounded-sm animate-pulse">
                        Últimas Unidades!
                    </p>
                </div>     
            </div>
        ))}
        </>
    );
}