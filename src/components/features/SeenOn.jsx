import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { imagesNewsIcons as images } from "../../lib/data";

const SeenOn = () => {
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
    <motion.div
      ref={ref}
      className="flex flex-col items-center justify-center gap-4 mb-[10rem] xl:mb-0"
      variants={variant}
      initial="initial"
      animate={inView && "animate"}
    >
      {/* HEADING */}
      <div className="flex items-center  gap-4 w-full mb-6 xl:mb-0">
        <hr className="border-[1px] border-n-4 w-[32%] sm:w-[38%] md:w-[42%] lg:w-[45%] ml-auto" />
        <p className="font-light text-n-4 text-center text-md lg:text-base">
          Seen on
        </p>
        <hr className="border-[1px] border-n-4 w-[32%] sm:w-[38%] md:w-[42%] lg:w-[45%] mr-auto" />
      </div>

      {/* CONTENT */}
      <div className="flex flex-wrap items-center justify-center gap-12 px-2 xl:px-0">
        {images.map((image) => (
          <div className="w-[10rem]" key={image.name}>
            <img
              className="w-full h-full"
              src={image.src}
              alt={`${image.name} logo`}
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default SeenOn;
