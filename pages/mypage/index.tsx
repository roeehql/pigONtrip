import { NextPage } from "next";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useHandleInput from "@hooks/useHandleInput";
import style from "@styles/Mypage.module.scss";
import Button from "@components/atomic/Button";
import Input from "@components/atomic/Input";

const MyPage: NextPage = () => {
  const [active, setActive] = useState(false);
  const [editedName, setEditedName] = useState<string | null>(null);
  const {
    value: editName,
    onChange: onEditNameChange,
    setValue: setEditName,
  } = useHandleInput("");
  //위에 hooks 괄호 안에 기존 유저이름 들어가야된다

  const handleAllContentsDelete = () => {
    localStorage.clear();
  };

  const handleEditUserName = async () => {
    setActive(false);
    //1. 유저닉네임 바뀐 이름으로 셋
  };

  useEffect(() => {
    setEditedName(localStorage.getItem("username"));
  }, [active]);

  return (
    <div className={style.mypage_container}>
      <h1>회원정보</h1>
      <div className={style.mypage_box}>
        <div className={style.mypage_item}>
          {active ? (
            <>
              <Input
                type="text"
                name="username"
                value={editName}
                onChange={onEditNameChange}
                required={true}
                labelText="별명 변경"
              />
              <Button
                text="수정"
                type="button"
                large={false}
                onClick={handleEditUserName}
              />
              <Button
                text="취소"
                type="button"
                large={false}
                onClick={() => setActive(false)}
              />
            </>
          ) : (
            <>
              <p className={style.mypage_p}>
                별명
                <span className={style.mypage_span}>
                  ✅여기 유저이름 표시 되야됩니다.
                </span>
              </p>
              <Button
                text="수정"
                large={false}
                type="button"
                onClick={() => setActive(true)}
              />
            </>
          )}
        </div>
        <div className={style.mypage_item}>
          <Button
            text="전체 데이터 삭제"
            type="button"
            large={true}
            onClick={handleAllContentsDelete}
          />
        </div>
      </div>
    </div>
  );
};

export default MyPage;
