import { useDispatch } from "react-redux";
import { ToastSliceState, clearToast } from "@data/store/toastSlice";

const Toast = ({ toast }: { toast: ToastSliceState }) => {
  const dispatch = useDispatch();
  const bgColor = {
    success: "bg-sky-blue",
    error: "bg-red-light",
    warning: "bg-yellow",
    info: "bg-white",
  };

  return (
    <div
      className={`fixed top-65 right-4 flex flex-col justify-center items-center min-w-200 w-fit h-fit my-4 p-2 rounded-md shadow z-50 ${
        bgColor[toast.type]
      }`}
    >
      <div className="flex justify-between items-end w-full h-fit my-2 border-b-2 border-b-white">
        <h4 className={` text-base text-black ${bgColor[toast.type]}`}>
          {toast.type}
        </h4>
        <button
          className="px-3 border-none bg-transparent text-base text-black"
          onClick={() => dispatch(clearToast(toast.id))}
        >
          X
        </button>
      </div>
      <p className={`text-base text-black ${bgColor[toast.type]}`}>
        {toast.text}
      </p>
    </div>
  );
};

export default Toast;
