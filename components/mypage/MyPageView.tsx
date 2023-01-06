import dynamic from "next/dynamic";
const Button = dynamic(() => import("@components/atomic/Button"));
const Input = dynamic(() => import("@components/atomic/Input"));

import { MyPageDataState } from "@@types/dataTypes";
import style from "@styles/components/Mypage.module.scss";

const MyPageView = ({ data }: MyPageDataState) => {
  return (
    <div className={style.mypage_container}>
      <h1>회원정보</h1>
      <div className={style.mypage_box}>
        <div className={style.mypage_item}>
          {data.active ? (
            <>
              <Input
                name="username"
                value={data.editName}
                onChange={data.onEditNameChange}
                required={true}
                labelText="별명 변경"
              />
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
            </>
          ) : (
            <>
              <p className={style.mypage_p}>
                별명
                <span className={style.mypage_span}>{data.userName}</span>
              </p>
              <Button
                text="수정"
                large={false}
                type="button"
                onClick={data.onEditButtonClick}
              />
            </>
          )}
        </div>
        <div className={style.mypage_item}>
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
