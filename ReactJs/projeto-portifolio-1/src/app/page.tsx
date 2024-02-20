import { Container } from "@/components/Container/Container";
import Image from "next/image";

const Page = () => {
  return(
    <div className="w-screen h-screen relative">
      <Container>
        <div className="absolute w-56 h-80 bg-primary top-0 left-1/2 translate-x-[-50%] md:w-96 md:h-96">
            <div className="flex h-full w-full items-center flex-col justify-between">
              <p className="text-white text-3xl capitalize font-bold">FoodBar</p>
              <Image src={'/prato-1.png'} alt={"Prato de comida 1"} width={500} height={500} className=""/>
            </div>
        </div>
      </Container>
    </div>
  );
}

export default Page;