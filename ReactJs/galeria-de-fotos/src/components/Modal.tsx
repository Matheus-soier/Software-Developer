import { ModalProps } from "@/types/ModalProps";

export const Modal = ({image, closeModal}:ModalProps ) => {
    return (
        <>
            <div onClick={closeModal} className="fixed left-0 right-0 top-0 bottom-0 flex justify-center items-center bg-black/90">
                <img src={`/assets/${image}`} alt="Image Galaxia" className="max-w-screen max-h-screen"/>
            </div>
            <div onClick={closeModal} className="fixed top-5 right-5 w-10 h-10 cursor-pointer text-white text-5xl">
                x
            </div>
        </>
    );
}