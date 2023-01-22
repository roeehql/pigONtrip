import dynamic from "next/dynamic";
const Button = dynamic(() => import("@components/atomic/Button"));
const Input = dynamic(() => import("@components/atomic/Input"));

import { MyPageDataState } from "@@types/propsDataTypes";

const MyPageView = ({ data }: MyPageDataState) => {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen">
      <h1 className="text-2xl tracking-tight mb-8">회원정보</h1>
      <div className="flex flex-col justify-center items-center w-fit min-w-90 rounded-lg shadow p-3">
        <div className="flex flex-col justify-around items-center w-full p-4 border-2 border-solid border-grey rounded-lg">
          <Input
            type="form"
            name="username"
            value={data.editName}
            onChange={data.onEditNameChange}
            required={true}
            labelText={data.isOnEdit ? "별명 변경" : "별명"}
            readOnly={data.isOnEdit ? false : true}
          />
          {data.isOnEdit ? (
            <div>
              <Button
                text="수정"
                type="button"
                large={false}
                onClick={data.handleEditUserName}
              />
              <Button
                text="취소"
                type="button"
                large={false}
                onClick={data.onCancelButtonClick}
              />
            </div>
          ) : (
            <Button
              text="수정"
              large={false}
              type="button"
              onClick={data.onEditButtonClick}
            />
          )}
        </div>
        <div className="flex flex-row justify-around items-center w-full px-4 border-solid border-grey rounded-lg">
          <Button
            text="전체 데이터 삭제"
            type="button"
            large={true}
            onClick={data.handleAllContentsDelete}
          />
        </div>
      </div>
    </div>
  );
};

export default MyPageView;
