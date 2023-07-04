import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "@data/store/store";
import { removeToast } from "@data/store/toastSlice";
import Toast from "./Toast";

const ToastContainer = () => {
  const toasts = useAppSelector((state) => state.toast);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(removeToast());
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [toasts]);
  return (
    <>
      {toasts.map((toast) => (
        <Toast key={toast.id} toast={toast} />
      ))}
    </>
  );
};

export default ToastContainer;
