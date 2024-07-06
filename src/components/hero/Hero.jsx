import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const ref = useRef();
  const imageInView = useInView(ref);

  const imageVariant = {
    initial: { y: "-100%", opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  const headingVariant = {
    initial: { y: "-15rem", opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.95,
      },
    },
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="relative h-[90vh]">
      <motion.div
        className="w-full h-[37.5rem] relative z-20"
        ref={ref}
        variants={imageVariant}
        initial="initial"
        animate={imageLoaded && imageInView ? "animate" : "initial"}
      >
        <img
          src="/hero.webp"
          className="w-full h-full object-cover"
          alt="Hero Image"
          onLoad={handleImageLoad}
        />
      </motion.div>
      <motion.div
        className="relative z-10"
        variants={headingVariant}
        initial="initial"
        animate={imageLoaded && imageInView ? "animate" : "initial"}
      >
        <h1 className="flex flex-col items-center gap-3">
          <span className="uppercase font-medium tracking-[.4rem] text-[1.37rem] mt-8 mb-2">
            Welcome to Airblack
          </span>
          <span className="font-boska font-semibold tracking-widest text-7xl text-color-1">
            India&apos;s Top Skilling Academy
          </span>
          <span className="text-2xl font-extralight text-center">
            Launch a successfull creative career <br /> with India&apos;s top
            experts
          </span>
        </h1>
      </motion.div>
    </div>
  );
};

export default Hero;
