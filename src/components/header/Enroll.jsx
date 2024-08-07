import { HiMiniArrowRight } from "react-icons/hi2";
import { useModal } from "../../context/ModalContext";
import AdmissionForm from "../admission/AdmissionForm";

const Enroll = () => {
  const { openModal } = useModal();

  return (
    <div className="flex items-center justify-center py-1.5 bg-n-8/70 backdrop-blur">
      <p className="text-xs sm:text-sm text-n-2 flex items-center">
        Enrol in Jul<span className="hidden sm:inline-block">y</span>/Aug
        <span className="hidden sm:inline-block">ust</span>&nbsp;Batch
        <span
          onClick={() => openModal(AdmissionForm)}
          className="text-color-1 underline ml-2 flex items-center gap-1 cursor-pointer "
        >
          Apply Now <HiMiniArrowRight />
        </span>
      </p>
    </div>
  );
};

export default Enroll;
