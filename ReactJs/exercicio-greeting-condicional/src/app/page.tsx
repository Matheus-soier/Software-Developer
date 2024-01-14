import { Background } from "@/components/Background";
import { Horas } from "@/components/Horas";

const Page = () => {
  const info: string[] = Background();
  const stylePage: string = 'w-screen h-screen flex flex-col justify-center items-center ' + info[0]; 

  return (
    <div className={stylePage}>
      <Horas/>
      <div className="text-white text-2xl">
        {info[1]}
      </div>
    </div>
  );
}

export default Page;