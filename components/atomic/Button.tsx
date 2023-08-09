type ButtonState = {
  text: string;
  large: boolean;
  ariaLabel: string;
  type: "button" | "submit" | "reset";
  color?: "blue" | "red";
  value?: string;
  onClick?: any;
};

const Button = ({
  text,
  type,
  large,
  ariaLabel,
  value,
  onClick,
  color,
}: ButtonState) => {
  return (
    <>
      {large ? (
        <button
          type={type}
          value={value}
          aria-label={ariaLabel}
          className={`min-w-fit min-h-fit px-8 py-3 m-6 border-solid border-4 ${
            color === "red" ? "border-yellow" : "border-sky-blue"
          } rounded-2xl shadow font-medium text-2xl tracking-tight text-white ${
            color === "red" ? "bg-red" : "bg-navy"
          } cursor-pointer`}
          onClick={onClick}
        >
          {text}
        </button>
      ) : (
        <button
          type={type}
          value={value}
          aria-label={ariaLabel}
          className="min-w-fit w-65 h-fit px-4 py-1 m-2 border-transparent rounded-2xl text-base text-white bg-navy cursor-pointer hover:bg-sky-blue"
          onClick={onClick}
        >
          {text}
        </button>
      )}
    </>
  );
};

export default Button;
