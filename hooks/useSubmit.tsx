import { ItemState } from "@@types/propsDataTypes";
import Alert from "@components/atomic/Alert";
import { addItem, saveItem, editItem } from "@store/contentsSlice";
import { useAppDispatch } from "@store/store";
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
        dispatch(saveItem());
        afterSubmitFn();
        return <Alert title="🍴꿀꿀🐽" message="등록되었습니다." />;
      }
    } catch {
      console.error();
      return <Alert title="🤒죄송합니다." message="다시 시도해주세요." />;
    }
  };

  return { onSubmit };
};
