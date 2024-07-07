import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import CardXL from "../../ui/CardXL";
import { courses } from "../../lib/data";

const Courses = () => {
  const ref = useRef();
  const inView = useInView(ref);

  const variant = {
    initial: { y: "15rem", opacity: 0 },
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
      className="flex flex-col items-center justify-center gap-5"
      ref={ref}
      variants={variant}
      initial="initial"
      animate={inView && "animate"}
    >
      <motion.h2
        className="font-boska font-semibold tracking-wider text-6xl lg:text-7xl text-color-2 "
        variants={variant}
      >
        Our School
      </motion.h2>
      <motion.p
        className="font-extralight text-lg lg:text-xl xl:text-2xl text-n-2 max-w-[80rem] text-center mb-8 px-2 xl:px-0"
        variants={variant}
      >
        Airblack Academy&apos;s specialized divisions offer a broad spectrum of
        essential skills, enabling individuals to achieve meaningful lives and
        livelihoods through focused learning
      </motion.p>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 xl:gap-24">
        {courses.map((item) => (
          <CardXL
            key={item.title}
            mainImg={item.imgSrc}
            logoImg={item.logoImgSrc}
            title={item.title}
            desc={item.desc}
            color={item.color}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Courses;
