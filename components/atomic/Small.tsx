const Small = ({
  message,
  plusStyle,
}: {
  message: string;
  plusStyle?: string;
}) => {
  return (
    <small
      role="alert"
      className={`w-full h-fit text-sm text-red ${plusStyle}`}
    >
      {message}
    </small>
  );
};

export default Small;
