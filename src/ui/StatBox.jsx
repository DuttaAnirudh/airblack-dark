const StatBox = ({ data }) => {
  return (
    <div
      className="flex flex-col items-center justify-center gap-4"
      key={data.tagline}
    >
      {data.img && (
        <div className="w-[4rem] md:w-[5rem] lg:w-[6rem] mb-2">
          <img className="w-full h-full" src={data.img} alt={data.tagline} />
        </div>
      )}
      {data.heading && (
        <h3 className="font-extralight text-2xl md:text-3xl">{data.heading}</h3>
      )}
      <h3 className="font-boska text-5xl lg:text-7xl text-color-2 tracking-widest">
        {data.stat}
      </h3>
      <h3 className="font-extralight text-xl md:text-2xl">{data.tagline}</h3>
    </div>
  );
};

export default StatBox;
