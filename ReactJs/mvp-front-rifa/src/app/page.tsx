import { Header } from "@/components/Header/Header";
import { SectionRifasComplete } from "@/components/SectionRifasOn/SectionRifasComplete";

export const Page = () => {
  return(
    <div className="h-max bg-primary">
      <Header />
      <div className="flex w-screen xl:hidden my-4 justify-center">
        <SectionRifasComplete />
      </div>
    </div>
  );
}

export default Page;