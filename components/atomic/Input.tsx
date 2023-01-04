import styles from "@styles/components/atomic/Input.module.scss";

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
      <label className={styles.label} htmlFor={name}>
        {labelText}
      </label>
      <input
        id={name}
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        className={styles.input}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default Input;
