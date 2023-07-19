import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getToast, removeToast } from "@data/store/toastSlice";
import Toast from "./Toast";

const ToastContainer = () => {
  const toasts = useSelector(getToast);
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(removeToast());
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [toasts, dispatch]);

  return (
    <>
      {toasts.length > 0 &&
        toasts.map((toast) => <Toast key={toast.id} toast={toast} />)}
    </>
  );
};

export default ToastContainer;
