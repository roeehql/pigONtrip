const Spinner = () => {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="w-80 h-80 rounded-full border-4 border-red-light animate-spin">
        <span className="absolute w-4 h-4 rounded-full bg-yellow"></span>
      </div>
    </div>
  );
};

export default Spinner;
