const images = [
  { name: "forbes", src: "/forbes.webp" },
  { name: "yourstory", src: "/yourstory.png" },
  { name: "toi", src: "/toi.svg" },
  { name: "economic", src: "/economic.webp" },
  { name: "entrepreneur", src: "/entrepreneur.webp" },
  { name: "livemint", src: "/livemint.webp" },
];

const SeenOn = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      {/* HEADING */}
      <div className="flex items-center  gap-4 w-full">
        <hr className="border-[1px] border-n-4 w-[45%] ml-auto" />
        <p className="font-light text-n-4">Seen on</p>
        <hr className="border-[1px] border-n-4 w-[45%] mr-auto" />
      </div>

      {/* CONTENT */}
      <div className="flex flex-wrap items-center justify-center gap-12">
        {images.map((image) => (
          <div className="w-[10rem]" key={image.name}>
            <img
              className="w-full h-full"
              src={image.src}
              alt={`${image.name} logo`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeenOn;
