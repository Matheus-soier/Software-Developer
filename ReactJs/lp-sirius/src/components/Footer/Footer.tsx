import Image from "next/image";
import { Container } from "../Container/Container";
import Link from "next/link";

export const Footer = () => {
    return(
        <Container>
            <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 px-3 text-gray-300 items-start gap-10 border-b border-primary pb-8">
            <div>
                <Link href={'/'}>
                  <Image src={'/logo-sirius-white.png'} alt={'Logo'} width={150} height={40}/>
                </Link>
              </div>
              <div className="flex flex-col gap-2">
    <p className="uppercase">Principal</p>
    <ul className="flex flex-col gap-2">
        <Link href={'/'} className="hover:underline">Início</Link>
        <Link href={'/'} className="hover:underline">Sobre</Link>
        <Link href={'/'} className="hover:underline">Serviços</Link>
        <Link href={'/'} className="hover:underline">Projetos</Link>
        <Link href={'/'} className="hover:underline">Pacotes</Link>
    </ul>
</div>
<div className="flex flex-col gap-2">
    <p className="uppercase">Páginas</p>
    <ul className="flex flex-col gap-2">
        <Link href={'/'} className="hover:underline">Contato</Link>
        <Link href={'/'} className="hover:underline">Termos & condições</Link>
        <Link href={'/'} className="hover:underline">Política de Privacidade</Link>
        <Link href={'/'} className="hover:underline">Instruções</Link>
    </ul>
</div>
<div className="flex flex-col gap-2">
    <p className="uppercase">Utilidades</p>
    <ul className="flex flex-col gap-2">
        <Link href={'/'} className="hover:underline">Guia de Estilos</Link>
        <Link href={'/'} className="hover:underline">Licenças</Link>
        <Link href={'/'} className="hover:underline">Serviços</Link>
        <Link href={'/'} className="hover:underline">Registro de Alterações</Link>
    </ul>
</div>
            </div>
            <p className="text-white text-center mb-5">Desenvolvido por <Link href={'https://github.com/Matheus-soier'} target="_blank" className="underline">Matheus Soier</Link></p>
        </Container>
    );
}