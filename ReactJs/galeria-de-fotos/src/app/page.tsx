"use client"

import { Modal } from "@/components/Modal";
import { PhotoItem } from "@/components/PhotoItem";
import { photoList } from "@/data/photoList";
import { useState } from "react";

const Page = () => {
  
  const [showModal, setShowModal] = useState(false);
  const [imageOfModal, setImageOfModal] = useState('');

  const openModal = (id: number) => {
    const photo = photoList.find(item => item.id === id);
    if (photo) {
      setImageOfModal(photo.url);
      setShowModal(true);
    }
  }

  const closeModal = () => {
    setShowModal(false);
  }

  return (
    <div className="w-screen h-max flex justify-center items-center bg-black">
      <div className="container p-10">
          <h1 className="text-white font-bold text-center text-2xl mb-5">Fotos Intergalaticas</h1>
          <div className="grid grid-cols-1 max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-3 mx-auto">
              {photoList.map(item=>(
                  <PhotoItem 
                  key={item.id}
                  photo={item}
                  onClick={() => openModal(item.id)}
                  />
              ))};
          </div>
          {showModal &&
            <Modal 
            image={imageOfModal}
            closeModal={closeModal}
            />
          }
      </div>
    </div>
  );
}

export default Page;