import { useModal } from "../../context/ModalContext";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import Section from "../../ui/Section";
import AdmissionForm from "./AdmissionForm";

const Admission = () => {
  const { openModal } = useModal();

  return (
    <Section>
      <div className="flex flex-col items-center justify-center h-full gap-6">
        <h3 className="font-boska font-bold text-7xl text-color-1 tracking-wider">
          Admission Open
        </h3>
        <h4 className="font-extralight text-2xl text-n-2 text-center">
          Enrol today and embark on a transformative <br /> learning journey at
          Airblack Academy.
        </h4>
        <Button onClick={() => openModal(AdmissionForm)} className={`bg-n-1`}>
          Apply Now
        </Button>
      </div>
      <Modal />
    </Section>
  );
};

export default Admission;
