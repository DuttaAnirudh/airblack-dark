import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import ImageCarousel from "../../ui/ImageCarousel";
import { heroImagesMob, heroImagesTab } from "../../lib/data";

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
    <div className="relative h-[90vh] flex flex-col gap-12 sm:gap-0">
      <motion.div
        className="w-full relative z-20 h-[40vh] sm:h-[55vh] lg:h-auto"
        ref={ref}
        variants={imageVariant}
        initial="initial"
        animate={imageInView && imageLoaded && imageInView && "animate"}
      >
        {/* MOBILE SCREEN HERO */}
        <div className="block sm:hidden h-full">
          <ImageCarousel images={heroImagesMob} />
        </div>

        {/* TAB SCREEN HERO */}
        <div className="hidden sm:block lg:hidden h-full">
          <ImageCarousel images={heroImagesTab} />
        </div>

        {/* DESKTOP SCREEN HERO */}
        <div className="hidden lg:block w-full h-[32rem] xl:[34rem] 2xl:h-[36.5rem] relative z-20">
          <img
            src="/hero.webp"
            className="w-full h-full object-cover"
            alt="Hero Image"
            onLoad={handleImageLoad}
          />
        </div>
      </motion.div>
      <motion.div
        className="relative z-10"
        variants={headingVariant}
        initial="initial"
        animate={imageLoaded && imageInView && "animate"}
      >
        <h1 className="flex flex-col items-center gap-3 text-center">
          <span className="uppercase lg:font-medium tracking-[.4rem] text-[0.9rem] sm:text-[1.2rem] lg:text-[1.37rem] text-center mt-8 mb-2">
            Welcome to Airblack
          </span>
          <span className="font-boska font-semibold tracking-widest text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-color-1 text-center w-[20rem] sm:w-auto">
            India&apos;s Top Skilling Academy
          </span>
          <span className="text-lg sm:text-xl lg:text-2xl font-extralight text-center">
            Launch a successfull creative career <br /> with India&apos;s top
            experts
          </span>
        </h1>
      </motion.div>
    </div>
  );
};

export default Hero;
