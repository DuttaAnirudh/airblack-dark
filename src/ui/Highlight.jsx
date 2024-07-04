const Highlight = ({ category }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="w-[0.9rem] h-[0.9rem]">
        <img className="w-full h-full" src={`${category}_tick.svg`} alt="" />
      </div>
      <div>
        <p
          className={`uppercase font-medium text-[0.9rem] 
            ${category === "beauty" && "text-red-400"}  
            ${category === "culinary" && "text-color-1"} 
            ${category === "guest" && "text-color-5"}`}
        >
          {category === "beauty" || category === "culinary"
            ? `Airblack ${category} Expert`
            : "Guest Expert"}
        </p>
      </div>
    </div>
  );
};

export default Highlight;
