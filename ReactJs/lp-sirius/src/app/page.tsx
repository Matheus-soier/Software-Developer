import { Container } from "@/components/Container/Container";
import { Hero } from "@/components/Hero/Hero";
import { ColGridMain } from "@/components/Main/ColGridMain";
import { Projects } from "@/components/Main/Projects";
import Image from "next/image";

const page = () => {
  return(
  <div className="mt-20">
      <Container>
        <Hero />
        <div className="grid grid-cols-1 ss:grid-cols-2 gap-3 rounded-lg h-max lg:grid-cols-4">
          <ColGridMain>
            <div className="flex flex-col h-full justify-between">
              <div className="flex flex-col gap-2">
                <div className="mt-2 w-10">
                  <Image src={'/arrow-green.png'} width={50} height={50} alt={'Icone Flecha Verde'} />
                </div>
                <div>
                  <h3 className="text-white uppercase font-semibold
                  text-lg sm:text-4xl">
                    designer
                  </h3>
                </div>
              </div>
              <div className="mt-2">
                <p className="uppercase text-gray-300 text-sm">Voltado para sua Empresa</p>
              </div>
            </div>
          </ColGridMain>
          <ColGridMain>
              <div className="flex flex-col h-full justify-between">
                <div>
                  <p className="uppercase text-gray-300 text-sm">
                    Todo Funil pensado em aumentar suas vendas
                  </p>
                </div>
                <div className="flex w-full justify-between items-center">
                  <p className="text-white font-semibold text-3xl md:text-5xl">
                    360°
                  </p>
                  <Image src={'/seta-giratoria.png'} width={40} height={40} alt={'Icone Seta giratória'}/>
                </div>
              </div>
          </ColGridMain>
          <ColGridMain>
              <div className="flex flex-col w-full h-full justify-between relative">
                <div className="flex justify-between">
                  <div>
                    <p className="uppercase text-gray-300 text-sm">
                      tráfego <br /> pago
                    </p>
                  </div>
                  <div className="absolute top-0 right-0">
                  <Image src={'/seta-elemento.png'} width={40} height={40} alt={'Icone Seta Branca'}/>
                  </div>
                </div>
                <div>
                  <p className="text-white font-semibold text-lg md:text-2xl">
                    Tenha um negócio 100% escalável
                  </p>
                </div>
              </div>
          </ColGridMain>
          <ColGridMain>
              <div className="flex flex-col w-full h-full justify-between relative">
                <div>
                  <p className="uppercase text-gray-300 text-sm">criamos a solução para seu negócio</p>
                </div>
                <div>
                  <p className="text-white font-semibold text-lg md:text-2xl capitalize">sites <br /> únicos</p>
                  <div className="absolute bottom-0 right-0">
                    <Image src={'/seta-lateral.png'} width={40} height={40} alt={'Icone Seta Verde'}/>
                  </div>
                </div>
              </div>
          </ColGridMain>
        </div>
        <Projects />
      </Container>
  </div>
  );
}

export default page;