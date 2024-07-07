import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import Highlight from "./Highlight";

const Card = ({
  heading,
  subHeading,
  btnText,
  imgSrc,
  link = "#",
  category = null,
}) => {
  return (
    <div className="flex flex-col items-start justify-start gap-1 self-stretch ">
      <div className="w-full mb-2 shadow-lg shadow-n-5">
        <img
          className="w-full h-full object-cover"
          src={imgSrc}
          alt={heading}
        />
      </div>
      {category && <Highlight category={category} />}
      <div className="flex flex-col items-start justify-start gap-1 h-full">
        <h2 className="font-light">{heading}</h2>
        <p className="text-xs text-n-2 ">{subHeading}</p>
        <a
          href={link}
          target="_blank"
          className="text-xs text-n-13 hover:text-n-2 font-semibold flex items-center gap-1 mt-auto"
        >
          {btnText} <HiArrowTopRightOnSquare />
        </a>
      </div>
    </div>
  );
};

export default Card;
