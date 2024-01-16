import Image from "next/image";

type Props = {
    value: string
    image: string
    alt: string
}

export const ListaInfo = ({value, image, alt}: Props) => {
    return (
        <li className="flex items-center gap-9 py-9 border-b border-opacity-gray last:border-none last:pt-9 last:pb-0">
            <div className="w-7 h-7 flex items-center justify-center">
                <Image
                    src={image}
                    alt={alt}
                />
            </div>
            <p className="flex-1 text-txt-gray pr-2">
                {value}
            </p>
        </li>
    );
}