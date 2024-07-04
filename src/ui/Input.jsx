const Input = ({ type, id, disabled, onChange, placeholder }) => {
  return (
    <input
      type={type}
      id={id}
      disabled={disabled}
      placeholder={placeholder}
      onChange={onChange}
      className="w-[25rem] bg-n-1 border-[1px] border-n-13/30 rounded-lg p-1 placeholder:font-extralight placeholder:text-sm"
    />
  );
};

export default Input;
