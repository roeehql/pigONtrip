interface FormButtonState {
  type: "button" | "submit";
  text: string;
  ariaLabel: string;
  onClick?: () => void;
}

const FormButton = ({ type, text, ariaLabel, onClick }: FormButtonState) => {
  return (
    <button
      className="outline-none py-2 px-4 m-1 border-none rounded-xl bg-navy text-white cursor-pointer hover:bg-sky-blue"
      type={type}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default FormButton;
