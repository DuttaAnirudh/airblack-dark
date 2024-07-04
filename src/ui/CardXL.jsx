import { HiOutlineArrowLongRight } from "react-icons/hi2";
import BlinkerBox from "./BlinkerBox";
import Button from "./Button";

const CardXL = ({ mainImg, logoImg, title, desc, color = "text-n-1" }) => {
  return (
    <div className="flex flex-col items-start justify-start gap-6 w-[30rem]">
      {/* Image Container */}
      <div className=" w-[30rem] relative">
        {/* Main Image */}
        <div className="w-[31.5rem] -ml-2">
          <img className="w-full h-full" src={mainImg} alt={title} />
        </div>

        {/* Course Logo */}
        <div className="absolute top-4 left-6 w-[7rem]">
          <img className="w-full h-full" src={logoImg} alt={`${title} logo`} />
        </div>

        {/* Blinking Text */}
        <div className="absolute top-6 right-8">
          <BlinkerBox text="Admission Open" />
        </div>
      </div>

      {/* text Container */}
      <div className="flex flex-col items-start justify-start gap-1">
        <h4 className="font-boska font-semibold tracking-widest text-3xl text-color-1">
          {title}
        </h4>
        <p className="font-extralight text-n-2 text-[1.1rem]">{desc}</p>
      </div>

      <Button
        className={`bg-n-1 w-full flex items-center justify-center gap-1 `}
      >
        Explore <HiOutlineArrowLongRight />
      </Button>
    </div>
  );
};

export default CardXL;
