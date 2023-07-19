import { ChangeEvent } from "react";
import Input from "../atomic/Input";
import Button from "../atomic/Button";
import Small from "../atomic/Small";

const AuthForm = ({
  userName,
  message,
  buttonText,
  title,
  handleInputChange,
  handleFormBtnClick,
}: {
  userName: string;
  message: boolean;
  buttonText: string;
  title: string;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleFormBtnClick: () => void;
}) => {
  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen h-full">
      <div className="flex flex-col h-300 p-6 bg-white rounded-xl shadow">
        <h1 className="mb-4 tracking-tighter">{title}</h1>
        <div className="h-10">
          {message && (
            <Small message="로그인에 실패했습니다. 별명은 3개까지 만드실 수 있습니다." />
          )}
        </div>
        <Input
          type="form"
          name="username"
          value={userName}
          onChange={handleInputChange}
          placeholder="돼지짱"
          labelText="별명"
          required={true}
          readOnly={false}
        />
        <div className=" h-6">
          {userName.length > 15 && (
            <Small message="별명을 15자 이하로 정해주세요." />
          )}
          {userName === "" && <Small message="별명을 입력해주세요." />}
        </div>
        {userName !== "" && userName.length < 16 && (
          <Button
            type="submit"
            text={buttonText}
            onClick={handleFormBtnClick}
            large={true}
          />
        )}
      </div>
    </div>
  );
};

export default AuthForm;
