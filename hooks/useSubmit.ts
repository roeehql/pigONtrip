import { FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, editItem, setItem } from "@data/store/contentsSlice";
import { setToast } from "@data/store/toastSlice";
import { ItemState } from "@@types/ContentsTypes";
import { selectUserName } from "@data/store/userNameSlice";

export interface SubmitPropsState {
  content: ItemState;
  action: "write" | "edit";
  typeCheckFn: () => boolean | JSX.Element;
  afterSubmitFn: () => void;
}

export const useSubmit = ({
  content,
  action,
  typeCheckFn,
  afterSubmitFn,
}: SubmitPropsState) => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName)

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
      if (typeCheckFn()) {
        if (action === "write") {
          dispatch(addItem({userName, ...content}));
        }
        if (action === "edit") {
          dispatch(editItem({userName,...content}));
        }
        dispatch(setItem())
        dispatch(setToast({type:"success",text:"입력 성공!"}))
        afterSubmitFn();
      }
  };

  return { onSubmit };
};
