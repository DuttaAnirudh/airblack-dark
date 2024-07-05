import { useRef } from "react";
import { useInView, motion } from "framer-motion";

const Button = ({ className, children, onClick }) => {
  const ref = useRef();
  const inView = useInView(ref);

  const variant = {
    initial: { y: "5rem", opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        type: "spring",
      },
    },
  };

  return (
    <motion.button
      onClick={onClick}
      className={`w-[20rem] text-lg text-n-8 font-semibold py-3 px-1 rounded-sm ${className}`}
      ref={ref}
      variants={variant}
      initial="initial"
      animate={inView && "animate"}
    >
      {children}
    </motion.button>
  );
};

export default Button;
