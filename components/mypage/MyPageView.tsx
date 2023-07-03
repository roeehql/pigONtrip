import { MyPageDataState } from "@@types/propsDataTypes";
import DeleteAllButton from "./DeleteAllButton";
import Logout from "./Logout";
import Input from "@components/atomic/Input";
import Button from "@components/atomic/Button";

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
        <Logout />
        <DeleteAllButton />
      </div>
    </div>
  );
};

export default MyPageView;
