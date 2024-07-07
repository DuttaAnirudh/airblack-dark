import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import Card from "../../ui/Card";
import { instructorDetails } from "../../lib/data";

const Instructors = () => {
  const ref = useRef();
  const cardRef = useRef();

  const inView = useInView(ref);
  const cardInView = useInView(cardRef);

  const variant = {
    initial: { y: "15rem", opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.3,
        type: "spring",
      },
    },
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center gap-12 py-[14rem] overflow-x-hidden"
      ref={ref}
      variants={variant}
      initial="initial"
      animate={inView && "animate"}
    >
      <motion.h3
        className="font-boska text-6xl lg:text-7xl font-bold tracking-widest text-center"
        variants={variant}
      >
        India&apos;s Top Experts
      </motion.h3>
      <motion.p
        className="font-extralight text-lg lg:text-xl xl:text-2xl text-n-2 max-w-[80rem] text-center mb-8 px-2 xl:px-0"
        variants={variant}
      >
        Learn directly from industry leaders who bring a wealth of knowledge{" "}
        <br /> and real-world experience
      </motion.p>

      <motion.div
        className="grid grid-cols-[repeat(auto-fit,_minmax(8rem,_18rem))] items-center justify-center gap-x-6 sm:gap-x-[2rem] lg:gap-x-[4rem] gap-y-12 max-w-[87rem]"
        ref={cardRef}
        variants={variant}
        initial="initial"
        animate={cardInView && "animate"}
      >
        {instructorDetails.map((item) => (
          <Card
            key={item.name}
            heading={item.name}
            subHeading={item.desc}
            btnText="Learn more"
            imgSrc={item.imgSrc}
            category={item.category}
            link={item.link}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Instructors;
