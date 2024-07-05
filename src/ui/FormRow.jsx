function FormRow({ label, id, error, alignment, className, children }) {
  return (
    <div
      className={`flex flex-col gap-2 items-start justify-start ${alignment} ${className}`}
    >
      {label && (
        <label htmlFor={id} className={`font-light ${alignment}`}>
          {label}
        </label>
      )}
      <div className="flex items-center justify-start gap-2">{children}</div>
      {error && <p className="text-red-600 text-xs">{error}</p>}
    </div>
  );
}

export default FormRow;
