import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import { useModal } from "../../context/ModalContext";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import Section from "../../ui/Section";
import AdmissionForm from "./AdmissionForm";

const Admission = () => {
  const { openModal } = useModal();

  const ref = useRef();
  const inView = useInView(ref);

  const variant = {
    initial: { y: "15rem", opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.2,
        type: "spring",
      },
    },
  };

  return (
    <Section>
      <motion.div
        className="flex flex-col items-center justify-center h-screen xl:h-full gap-6 "
        ref={ref}
        variants={variant}
        initial="initial"
        animate={inView && "animate"}
      >
        <motion.h3
          className="font-boska font-bold text-6xl lg:text-7xl text-color-1 tracking-wider text-center"
          variants={variant}
        >
          Admission Open
        </motion.h3>
        <motion.h4
          className="font-extralight text-lg lg:text-xl xl:text-2xl text-n-2 text-center px-2 xl:px-0"
          variants={variant}
        >
          Enrol today and embark on a transformative <br /> learning journey at
          Airblack Academy.
        </motion.h4>
        <Button
          onClick={() => openModal(AdmissionForm)}
          className={`bg-n-1 max-[350px]:w-[18rem]`}
        >
          Apply Now
        </Button>
      </motion.div>
      <Modal />
    </Section>
  );
};

export default Admission;
