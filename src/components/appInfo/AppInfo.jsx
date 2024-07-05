import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import Section from "../../ui/Section";

const AppInfo = () => {
  const ref = useRef();
  const imgRef = useRef();

  const inView = useInView(ref);
  const imgInView = useInView(imgRef);

  const headingVariant = {
    initial: { scale: 0.3, y: "15rem", opacity: 0 },
    animate: {
      scale: 1,
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
        type: "spring",
      },
    },
  };

  const imgVariant = {
    initial: { y: "15rem", opacity: 0 },
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
    <Section>
      <div className="flex flex-col items-center justify-start gap-16">
        <motion.h3
          className="font-boska text-7xl font-bold tracking-widest text-center"
          ref={ref}
          variants={headingVariant}
          initial="initial"
          animate={inView && "animate"}
        >
          Seamless learning through the <br /> Airblack app
        </motion.h3>

        <motion.div
          className="w-[60%]"
          ref={imgRef}
          variants={imgVariant}
          initial="initial"
          animate={imgInView && "animate"}
        >
          <img
            className="w-full h-full"
            src="/appWeb.webp"
            alt="Mobile App UI"
          />
        </motion.div>
      </div>
    </Section>
  );
};

export default AppInfo;
