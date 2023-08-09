interface InputTypes {
  type: "form" | "item" | "number";
  name: string;
  value: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  labelText: string;
  placeholder?: string;
  readOnly?: boolean;
  onEnter?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const Input = ({
  type,
  name,
  value,
  onChange,
  placeholder,
  required = true,
  labelText,
  readOnly = false,
  onEnter,
}: InputTypes) => {
  return (
    <>
      <div className="flex flex-col justify-start">
        <label className="w-full text-left tracking-tight" htmlFor={name}>
          {labelText}
        </label>
        {type === "form" && (
          <input
            id={name}
            type="text"
            name={name}
            value={value}
            onChange={onChange}
            className="px-4 py-1 m-3 outline-red-light rounded-lg border-2 border-solid border-yellow"
            placeholder={placeholder}
            required={required}
            readOnly={readOnly}
            onKeyUp={onEnter}
          />
        )}
        {type === "number" && (
          <input
            id={name}
            type="number"
            name={name}
            onKeyUp={onEnter}
            value={value}
            onChange={onChange}
            className="px-4 py-1 m-3 outline-red-light rounded-lg border-2 border-solid border-yellow"
            placeholder={placeholder}
            required={required}
            readOnly={readOnly}
          />
        )}
        {type === "item" && (
          <input
            id={name}
            type="text"
            name={name}
            value={value}
            onChange={onChange}
            className="border-0 outline-sky-blue pl-2 m-2 text-right"
            required={required}
            readOnly={readOnly}
          />
        )}
      </div>
    </>
  );
};

export default Input;
