import { useState, useEffect } from "react";

const Alert = ({ title, message }: { title: string; message: string }) => {
  const [showToast, setShowToast] = useState(false);
  useEffect(() => {
    setShowToast(true);
    const showToast = setTimeout(() => {
      setShowToast(false);
    }, 3000);
    return () => clearTimeout(showToast);
  }, []);

  return (
    <>
      {showToast && (
        <div className="absolute top-0 right-0 flex flex-col justify-center items-center min-w-200 w-fit min-h-150 h-fit p-6 m-6 shadow bg-white rounded-2xl z-50">
          <p className="w-full tracking-tight text-base">{title}</p>
          <p className="w-full tracking-tight text-base">{message}</p>
        </div>
      )}
    </>
  );
};

export default Alert;
