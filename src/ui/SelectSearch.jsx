import Select from "react-select";

const SelectSearch = ({
  options,
  placeholder,
  name = "",
  isDisabled = false,
  isLoading = false,
  isClearable = true,
  isSearchable = false,
  value,
  onChange,
}) => {
  return (
    <Select
      className="w-[25rem] bg-n-1 rounded-lg font-light text-sm h-[auto]"
      classNames={"relative z-[100]"}
      options={options}
      name={name}
      placeholder={placeholder}
      isDisabled={isDisabled}
      isLoading={isLoading}
      isClearable={isClearable}
      isSearchable={isSearchable}
      value={value}
      onChange={onChange}
    />
  );
};
export default SelectSearch;
