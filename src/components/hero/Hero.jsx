const Hero = () => {
  return (
    <div className="relative h-[90vh]">
      <div className="w-full h-[37.5rem]">
        <img
          src="/hero.webp"
          className="w-full h-full object-cover"
          alt="Hero Image"
        />
      </div>
      <div>
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
      </div>
    </div>
  );
};

export default Hero;
