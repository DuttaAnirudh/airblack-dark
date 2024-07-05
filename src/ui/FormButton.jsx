const FormButton = ({
  width,
  textSize,
  fixed = false,
  disabled,
  className,
  children,
}) => {
  return (
    <button
      type="submit"
      disabled={disabled}
      className={`${width ? `w-[${width}]` : "w-[25rem]"} ${
        disabled
          ? "bg-slate-100 text-gray-400 border-gray-300 cursor-not-allowed"
          : "bg-n-8  hover:bg-n-1 text-n-1 hover:text-blue-500  hover:border-blue-500 cursor-pointer"
      } ${fixed ? "fixed bottom-[12rem]" : ""} ${
        textSize === "small" ? "text-xs font-semibold" : "text-base"
      } border-[1px] py-4 ${className}`}
    >
      {children}
    </button>
  );
};

export default FormButton;
