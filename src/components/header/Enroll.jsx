import { HiMiniArrowRight } from "react-icons/hi2";

const Enroll = () => {
  return (
    <div className="flex items-center justify-center py-1.5 bg-n-8/70 backdrop-blur">
      <p className="text-sm text-n-2 flex items-center">
        Enrol in July/August Batch{" "}
        <span className="text-color-1 underline ml-2 flex items-center gap-1 cursor-pointer ">
          Apply Now <HiMiniArrowRight />
        </span>
      </p>
    </div>
  );
};

export default Enroll;