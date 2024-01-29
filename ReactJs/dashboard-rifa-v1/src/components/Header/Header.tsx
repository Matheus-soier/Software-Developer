import { FaUserCircle } from "react-icons/fa";

export const Header = () => {

    const paginaAtual = "Home";

    return (
        <div className="w-screen h-max bg-white shadow-sm p-2 flex justify-between text-center items-center">
            <div className="flex justify-center items-center w-12 h-12 rounded-full text-4xl text-gray-500">
                <FaUserCircle />
            </div>
              <div className="font-bold text-lg absolute left-1/2 translate-x-[-50%]">
                <p>{paginaAtual}</p>
              </div>
          </div>
    );
}
