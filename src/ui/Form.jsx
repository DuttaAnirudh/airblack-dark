const Form = ({ onSubmit, className, children }) => {
  return (
    <form
      onSubmit={onSubmit}
      className={`w-[35rem] max-h-[67vh] pt-[5.8rem] pb-8 px-10 text-n-8 flex flex-col items-start justify-start gap-8 ${className} bg-n-1 overflow-y-scroll rounded-lg relative`}
    >
      {children}
    </form>
  );
};

export default Form;
