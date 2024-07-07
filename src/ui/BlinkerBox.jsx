import { useRef } from "react";
import { useInView, motion } from "framer-motion";

const BlinkerBox = ({ text }) => {
  const ref = useRef();

  const inView = useInView(ref);

  const boxVariant = {
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

  const blinkerVariant = {
    initial: {
      scale: 1,
      opacity: 1,
    },
    animate: {
      scale: [1, 2, 2],
      opacity: [1, 0, 0],
      transition: {
        duration: 1.5,
        times: [0, 0.75, 1],
        ease: [0, 0, 0.2, 1],
        repeat: Infinity,
        repeatType: "loop",
      },
    },
  };

  return (
    <motion.div
      className="flex items-center gap-2"
      ref={ref}
      variants={boxVariant}
      initial="initial"
      animate={inView && "animate"}
    >
      <motion.div
        className="w-[0.6rem] h-[0.6rem]"
        variants={blinkerVariant}
        initial="initial"
        animate={inView && "animate"}
      >
        <img
          className="w-full h-full"
          src="/blink_dot.svg"
          alt="Blinker icon"
        />
      </motion.div>
      <p className="uppercase text-[0.6rem] md:text-xs text-red-400 font-semibold tracking-widest">
        {text}
      </p>
    </motion.div>
  );
};

export default BlinkerBox;
