import { ItemState } from "@@types/propsDataTypes";
import { addItem, saveItem, editItem, setItem } from "@data/store/contentsSlice";
import { useAppDispatch, useAppSelector } from "@data/store/store";
import { setToast } from "@data/store/toastSlice";
import { FormEvent } from "react";

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
  const dispatch = useAppDispatch();
  const userName = useAppSelector((state) =>
    state.userName.filter((user) => user.isLoggedIn === true)
  );

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      if (typeCheckFn()) {
        if (action === "write") {
          dispatch(addItem(content));
        }
        if (action === "edit") {
          dispatch(editItem(content));
        }
        dispatch(saveItem(userName[0]?.name));
        dispatch(setItem(userName[0]?.name))
        afterSubmitFn();
        dispatch(setToast({type:"success",text:"입력 성공!"}))
      }
    } catch(error) {
      dispatch(setToast({type:"error",text:`죄송합니다. 다시 시도해주세요. ${error}`}))
    }
  };

  return { onSubmit };
};
