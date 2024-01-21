"use client"

import { PhotoItem } from "@/components/PhotoItem";
import { photoList } from "@/data/photoList";

const Page = () => {
  return (
    <div className="w-screen h-max p-10 flex justify-center items-center bg-black">
      <div className="container">
          <h1 className="text-white font-bold text-center text-2xl mb-28">Fotos Intergalaticas</h1>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mx-auto">
              {photoList.map(item=>(
                  <PhotoItem 
                  key={item.id}
                  photo={item}
                  onClick={() => { }}
                  />
              ))};
          </div>
      </div>
    </div>
  );
}

export default Page;