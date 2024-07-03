const Button = ({ className, children }) => {
  return (
    <button
      className={`w-[20rem] text-lg font-semibold py-3 px-1 rounded ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
