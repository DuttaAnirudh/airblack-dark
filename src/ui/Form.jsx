const Form = ({ children }) => {
  return (
    <form className="w-[30rem] overflow-hidden text-n-8 flex flex-col items-start justify-start gap-10">
      {children}
    </form>
  );
};

export default Form;
