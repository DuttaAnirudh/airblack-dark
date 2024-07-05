import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import BlinkerBox from "./BlinkerBox";
import Button from "./Button";

const CardXL = ({ mainImg, logoImg, title, desc, color = "text-n-1" }) => {
  const ref = useRef();
  const logoImgRef = useRef();
  const textRef = useRef();

  const inView = useInView(ref);
  const logoImgInView = useInView(logoImgRef);
  const textInView = useInView(textRef);

  const variant = {
    initial: { y: "5rem", opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.5,
        type: "spring",
      },
    },
  };

  const logoVariant = {
    initial: { scale: 0.5, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1,
        delay: 1,
        type: "spring",
      },
    },
  };

  const textVariant = {
    initial: { y: "5rem", opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.8,
        type: "spring",
      },
    },
  };

  return (
    <motion.div
      className="flex flex-col items-start justify-start gap-6 w-[30rem]"
      ref={ref}
      variants={variant}
      initial="initial"
      animate={inView && "animate"}
    >
      {/* Image Container */}
      <div className=" w-[30rem] relative">
        {/* Main Image */}
        <div className="w-[31.5rem] -ml-2">
          <img className="w-full h-full" src={mainImg} alt={title} />
        </div>

        {/* Course Logo */}
        <motion.div
          className="absolute top-4 left-6 w-[7rem]"
          ref={logoImgRef}
          variants={logoVariant}
          initial="initial"
          animate={logoImgInView && "animate"}
        >
          <img className="w-full h-full" src={logoImg} alt={`${title} logo`} />
        </motion.div>

        {/* Blinking Text */}
        <div className="absolute top-6 right-8">
          <BlinkerBox text="Admission Open" />
        </div>
      </div>

      {/* text Container */}
      <motion.div
        className="flex flex-col items-start justify-start gap-1"
        ref={textRef}
        variants={textVariant}
        initial="initial"
        animate={textInView && "animate"}
      >
        <motion.h4
          className="font-boska font-semibold tracking-widest text-3xl text-color-1"
          variants={textVariant}
        >
          {title}
        </motion.h4>
        <motion.p
          className="font-extralight text-n-2 text-[1.1rem]"
          variants={textVariant}
        >
          {desc}
        </motion.p>
      </motion.div>

      <Button
        className={`bg-n-1 w-full flex items-center justify-center gap-1 `}
      >
        Explore <HiOutlineArrowLongRight />
      </Button>
    </motion.div>
  );
};

export default CardXL;
