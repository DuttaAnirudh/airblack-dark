const Button = ({ className, children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`w-[20rem] text-lg text-n-8 font-semibold py-3 px-1 rounded-sm ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
