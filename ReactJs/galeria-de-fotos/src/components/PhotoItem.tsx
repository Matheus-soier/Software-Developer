import { Photo } from "@/types/Photo";
import Image from "next/image";

type Props = {
    photo: Photo;
    onClick: () => void;
}

export const PhotoItem = ({photo, onClick}: Props) => {
    return (
        <div onClick={onClick} className="cursor-pointer hover:opacity-80">
            <img src={`/assets/${photo.url}`} alt="Imagem Galaxia" className="w-full"/>
        </div>
    );
}