import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import Button from "../../ui/Button";
import Card from "../../ui/Card";
import Section from "../../ui/Section";
import { newsBoxItems } from "../../lib/data";

const News = () => {
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
      <div className="flex flex-col items-center justify-center gap-16 h-full mb-16 lg:mb-0">
        <motion.h3
          className="font-boska font-semibold text-6xl lg:text-7xl tracking-wider text-n-1"
          ref={ref}
          variants={headingVariant}
          initial="initial"
          animate={inView && "animate"}
        >
          Latest News
        </motion.h3>

        <motion.div
          className="flex flex-col lg:flex-row items-start justify-center gap-8 max-w-[20rem] md:max-w-[25rem] lg:max-w-[80%] mx-auto"
          ref={imgRef}
          variants={imgVariant}
          initial="initial"
          animate={imgInView && "animate"}
        >
          {newsBoxItems.map((item) => (
            <Card
              key={item.date}
              heading={item.heading}
              subHeading={item.date}
              btnText={"Read more"}
              imgSrc={item.imgSrc}
              link={item.link}
            />
          ))}
        </motion.div>

        <Button className={`bg-color-1 `}>Airblack Newsroom</Button>
      </div>
    </Section>
  );
};

export default News;
