function FormRow({ label, error, children }) {
  return (
    <div className="flex flex-col gap-2 items-start justify-start">
      {label && (
        <label htmlFor={children.props.id} className="font-light">
          {label}
        </label>
      )}
      {children}
      {error && <p className="text-red-600 text-xs">{error}</p>}
    </div>
  );
}

export default FormRow;
