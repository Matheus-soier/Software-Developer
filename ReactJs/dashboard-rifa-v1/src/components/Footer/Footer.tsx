import { FaHouse } from "react-icons/fa6";
import { MdPayments } from "react-icons/md";
import { LuArrowDownUp } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";

export const Footer = () => {
    return (
        <div className="fixed flex justify-around item-center bg-white h-16 w-screen bottom-0 left-0 border-t border-gray-200 text-gray-500">
            <div className="flex flex-col items-center justify-center">
                <FaHouse className="text-2xl"/>
                <p className="text-sm">Home</p>
            </div>
            <div className="flex flex-col items-center justify-center">
                <MdPayments className="text-2xl"/>
                <p className="text-sm">Pagamentos</p>
            </div>
            <div className="flex flex-col items-center justify-center">
                <LuArrowDownUp className="text-2xl"/>
                <p className="text-sm">Carteira</p>
            </div>
            <div className="flex flex-col items-center justify-center">
                <IoSearch className="text-2xl"/>
                <p className="text-sm">Pesquisar</p>
            </div>
        </div>
    );
}