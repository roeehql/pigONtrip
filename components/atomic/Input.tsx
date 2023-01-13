type InputTypes = {
  name: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required: boolean;
  labelText: string;
  placeholder?: string;
};

const Input = ({
  name,
  value,
  onChange,
  placeholder,
  required,
  labelText,
}: InputTypes) => {
  return (
    <div>
      <label
        className="w-full text-left tracking-tight font-serif"
        htmlFor={name}
      >
        {labelText}
      </label>
      <input
        id={name}
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        className="px-4 py-1 m-3 outline-red-light rounded-lg border-2 border-solid border-yellow"
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default Input;
