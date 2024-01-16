import { IoIosSearch } from "react-icons/io";

export const SearchBar = () => {
    
    return(
        <form className="items-center flex bg-white  shadow-sm rounded-sm">

            <input 
            className="text-sm sm:text-lg border-none pl-3 py-1 outline-none w-full rounded-sm" 
            type="search" 
            placeholder="Buscar Produtos" 
            required/>

            <button className="flex items-center justify-center border-l-2 border-gray-100 h-full w-11" type="submit">
                <IoIosSearch className="text-gray-800 text-sm sm:text-lg" />
           </button>
        </form>
    );
}