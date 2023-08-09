import { useState } from "react";
import { useRouter } from "next/router";
import Button from "@components/atomic/Button";
import Confirm from "@components/atomic/Confirm";
import { handleStorage } from "@data/browserStorage/localStorages";
import { USERNAME } from "@data/browserStorage/keys.constant";

const Logout = () => {
  const [showConfirm, setShowConfirm] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    setShowConfirm(false);
    handleStorage.removeStorage(USERNAME);
    router.push("/");
  };

  return (
    <>
      {showConfirm && (
        <Confirm
          text={"로그아웃하시겠습니까?"}
          positiveAnswer={"네"}
          handleConfirmClick={handleLogout}
          onCancelClick={() => setShowConfirm(false)}
        />
      )}
      <Button
        text={"로그아웃"}
        large={false}
        ariaLabel="로그아웃하기"
        type={"button"}
        onClick={() => setShowConfirm(true)}
      />
    </>
  );
};

export default Logout;
