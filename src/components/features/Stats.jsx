import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import StatBox from "../../ui/StatBox";
import { statistics } from "../../lib/data";

const Stats = () => {
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
      className="flex items-center justify-around"
      ref={ref}
      variants={variant}
      initial="initial"
      animate={inView && "animate"}
    >
      {statistics.map((statistic) => (
        <StatBox data={statistic} key={statistic.tagline} />
      ))}
    </motion.div>
  );
};

export default Stats;
