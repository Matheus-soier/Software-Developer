import { MdModeEdit } from "react-icons/md";
import { PiHeadsetFill } from "react-icons/pi";
import { MdSettings } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import { SectionRifasComplete } from "../SectionRifasOn/SectionRifasComplete";

export const Header = () => {
    return(
        <header className="w-screen h-16 bg-primary flex items-center border-b border-b-second xl:w-96 xl:h-screen xl:items-start xl:flex-col p-4 xl:justify-between xl:border-none">
            <div className="w-full flex flex-col gap-3 justify-between">
                <div className="container mx-auto flex  xl:items-start xl:w-full">
                    <div className="xl:flex xl:justify-start xl:border-b-2 border-b-second xl:w-full">
                        <Image src={'/logo.png'} alt={"Logo Visionário"} width={200} height={90} className="xl:w-56"/>
                    </div>
                </div>
                <div className="hidden xl:flex items-center gap-3  w-full">
                    <div className="w-14 h-14 bg-second rounded-lg">
                        <Image src={'/avatar-user.png'} alt={"avatar usuário"} width={200} height={200} className="xl:w-56 rounded-lg"/>
                    </div>
                    <p className="font-semibold text-lg flex-grow text-white">Matheus Soier</p>
                    <Link href={''} className="bg-second p-3 rounded-lg">
                        <MdModeEdit className="text-white w-5 h-5 " />
                    </Link>
                </div>
                <div className="hidden xl:block">
                    <SectionRifasComplete />
                </div>
            </div>
            <div className="hidden xl:flex flex-col gap-2">
            <div className="flex text-third items-center gap-1 cursor-pointer">
                    <MdSettings />
                    Configurações
                </div>
                <div className="flex text-third items-center gap-1 cursor-pointer">
                    <PiHeadsetFill />
                    Suporte
                </div>
            </div>
        </header>
    );
}