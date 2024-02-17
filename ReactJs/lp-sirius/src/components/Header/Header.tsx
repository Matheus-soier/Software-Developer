import Link from "next/link";
import { NavBar } from "./NavBar"
import { RightSection } from "./RightSection";
import Image from "next/image";
 
export const Header = () => {
    return(
        <header className="h-fit container mx-auto flex justify-between items-center px-4 py-6">
            <div className="text-white">
                <Link href={'/'}>
                    <Image src={'/logo-sirius-white.png'} alt={"Logo Sirius"} width={150} height={40}/>
                </Link>
            </div>
            <NavBar />
            <RightSection />
        </header>
    );
}