const Select = ({ options, value, onChange }) => {
  return (
    <select
      value={value}
      onChange={onChange}
      className="w-[5rem] bg-n-1 border-[1px] border-n-13/30 rounded-lg p-1 font-light text-sm "
    >
      {options.map((option) => (
        <option
          value={option.value}
          key={option.label}
          className="text-n-8 font-light"
        >
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
