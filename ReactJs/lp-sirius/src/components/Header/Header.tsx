"use client"

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { GetStarted } from "../Button/GetStarted";
import { HiOutlineXMark, HiOutlineBars3 } from "react-icons/hi2";
 
export const Header = () => {

    type LinksProps = {
        name: string;
        link: string;
      }
    
      let LinkList: LinksProps[] = [
        {name: 'Início', link: '/'},
        {name: 'Sobre', link: '/'},
        {name: 'Serviços', link: '/'},
        {name: 'Projetos', link: '/'},
        {name: 'Pacotes', link: '/'}
      ]
    
      let[isOpen, setIsOpen] = useState(false);

    return(
        <header className="w-full fixed left-0 top-0 z-10 bg-black">
          <div className="px-3 py-4 bg-black mx-auto flex justify-between items-center max-w-screen-xl">
              <div>
                <Link href={'/'}>
                  <Image src={'/logo-sirius-white.png'} alt={'Logo Agência Sirius'} width={150} height={40}/>
                </Link>
              </div>
              
              <div
                onClick={() => setIsOpen(!isOpen)}
                className="cursor-pointer lg:hidden text-white">
                {isOpen ? <HiOutlineXMark className="w-8 h-8" /> : <HiOutlineBars3 className="w-8 h-8"/>}
              </div>
              <ul className={`lg:flex lg:pl-0 md:gap-8 lg:items-center absolute lg:static lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:top-auto transition-all bg-black duration-200 ease-in pb-7 lg:pb-0 lg:border-none ${isOpen ? 'top-14' : 'top-[-400px]'}`}>
                {LinkList.map((link, index) => (
                  <li key={index} className="ml-9 my-7 lg:ml-0 lg:my-0 text-white transition ease-in lg:hover:translate-y-[-2px]"
                  onClick={() => setIsOpen(!isOpen)}
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
                  <div className="block lg:hidden ml-7">
                      <GetStarted />
                  </div>
              </ul>
              <div className="hidden lg:block">
                      <GetStarted />
              </div>
          </div>
      </header>
    );
}