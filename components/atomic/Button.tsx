import styles from "@styles/components/atomic/Button.module.scss";

type ButtonState = {
  text: string;
  large: boolean;
  type: "button" | "submit" | "reset";
  value?: string;
  onClick?: any;
};

const Button = ({ text, type, large, value, onClick }: ButtonState) => {
  return (
    <button
      type={type}
      value={value}
      className={large ? styles.big_button : styles.small_button}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
