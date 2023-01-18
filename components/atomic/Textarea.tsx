import { ChangeEvent } from "react";

interface TextareaState {
  value: string;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  readOnly: boolean;
  labelText: string;
}

const Textarea = ({
  value,
  onChange,
  labelText,
  readOnly = true,
}: TextareaState) => {
  return (
    <div className="flex flex-col justify-start">
      <label className="w-full text-left tracking-tight">{labelText}</label>
      <textarea
        className="resize-none w-full min-h-8 h-fit border-0 m-2 outline-sky-blue text-right"
        value={value}
        onChange={onChange}
        readOnly={readOnly}
      />
    </div>
  );
};

export default Textarea;
