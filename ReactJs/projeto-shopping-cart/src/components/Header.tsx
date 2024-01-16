import { SearchBar } from "./SearchBar";
import { IoCartOutline } from "react-icons/io5";

export const Header = () => {
    return(
        <header className="w-screen h-max flex justify-center bg-yellow-300 fixed">
          <div className="w-full max-w-7xl flex justify-between px-4 py-2 gap-3">
               <SearchBar/>
               <button className="bg-white rounded-sm shadow-sm w-11 flex items-center justify-center">
                    <IoCartOutline className="text-sm md:text-lg text-gray-800"/>
                </button>
         </div>
        </header>
    );
}