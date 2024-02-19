import Image from "next/image";

export const Hero = () => {
    return(
        <div className="grid grid-cols-1 gap-3 rounded-lg bg-primary h-max md:grid-cols-2 relative -z-10">
        <div className="col-span-1 flex flex-col gap-3 p-8 pb-2 md:pb-8">
          <p className="uppercase tracking-widest font-semibold">Seja bem-vindo à Sirius!</p>
          <h1 className="text-3xl ss:text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase font-semibold leading-[40px] sm:leading-[60px] md:leading-[70px] lg:leading-[100px]">
            agência de<br />
            <span
              className="text-primary bg-black px-2">
              marketing
           </span> <br />
            digital
          </h1>
          <p className="text-sm sm:w-1/2 md:w-2/3">Descubra como a Sirius pode <span className="font-semibold">transformar sua presença online!</span> Deixe-nos ser a estrela-guia no universo digital e <span className="font-semibold">veja seu negócio brilhar como nunca antes!</span></p>
        </div>
        <div className="col-span-1 flex justify-center lg:absolute bottom-0 right-[10%] md:pt-8">
            <Image src={'/cell-vendas.png'} width={400} height={400} alt={"Iphone com Dashboard de vendas"} />
        </div>
        
      </div>
    );
}