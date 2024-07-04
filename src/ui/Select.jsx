const Select = ({ options, value, onChange, placeholder }) => {
  return (
    <select
      value={value}
      onChange={onChange}
      className="w-[25rem] bg-n-1 border-[1px] border-n-13/30 rounded-lg p-1 font-light text-sm "
    >
      {placeholder && (
        <option value="" disabled selected>
          {placeholder}
        </option>
      )}
      {options.map((option) => (
        <option value={option} key={option} className="text-n-8 font-light">
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;
