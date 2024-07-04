import { HiXMark } from "react-icons/hi2";
import { useModal } from "../context/ModalContext";

const Modal = () => {
  const { isModalVisible, closeModal, ModalContent } = useModal();

  if (!isModalVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-n-8/90 backdrop-blur-sm flex items-center justify-center z-[100]">
      <div className="bg-n-1 py-8 px-10 relative overflow-y-scroll rounded-lg">
        <button
          className="absolute top-2 right-2 bg-none border-0 cursor-pointer text-n-8 hover:bg-n-2 text-2xl w-[1.5rem] h-[1.5rem]"
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
