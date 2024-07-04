const BlinkerBox = ({ text }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="w-[1rem] h-[1rem]">
        <img
          className="w-full h-full"
          src="/blink_dot.svg"
          alt="Blinker icon"
        />
      </div>
      <p className="uppercase text-xs text-red-400 font-semibold tracking-widest">
        {text}
      </p>
    </div>
  );
};

export default BlinkerBox;
