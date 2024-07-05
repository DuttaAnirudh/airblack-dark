import { useEffect } from "react";
import { HiXMark } from "react-icons/hi2";
import { useModal } from "../context/ModalContext";

const Modal = () => {
  const { isModalVisible, closeModal, ModalContent } = useModal();

  useEffect(() => {
    if (isModalVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalVisible]);

  if (!isModalVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-n-8/90 backdrop-blur-sm flex items-center justify-center z-[100]">
      <div className="relative">
        <button
          className="absolute top-4 right-8 bg-none border-0 cursor-pointer text-n-8 hover:bg-n-2 text-3xl text-center w-[1.9rem] h-[1.9rem] z-[50]"
          onClick={closeModal}
        >
          <HiXMark />
        </button>
        {ModalContent && <ModalContent />}
      </div>
    </div>
  );
};

export default Modal;
