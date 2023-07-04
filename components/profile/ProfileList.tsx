import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useAppSelector, useAppDispatch } from "@data/store/store";
import { editUserName, getUserList } from "@data/store/userNameSlice";
import { setItem } from "@data/store/contentsSlice";
import Confirm from "@components/atomic/Confirm";

const ProfileList = () => {
  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedUserName, setSelectedUserName] = useState("");
  const profileList = useAppSelector((state) => state.userName);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleAnotherNameClick = (userName: string) => {
    setSelectedUserName(userName);
    setShowConfirm(true);
  };

  const handleProfileChange = () => {
    setShowConfirm(false);
    dispatch(editUserName({ name: getCurrentUser(), isLoggedIn: false }));
    dispatch(editUserName({ name: selectedUserName, isLoggedIn: true }));
    dispatch(setItem(selectedUserName));
    router.push("/home");
  };

  const getCurrentUser = () => {
    const user = profileList.filter((user) => user.isLoggedIn === true);
    return user[0].name;
  };

  useEffect(() => {
    dispatch(getUserList());
  }, [dispatch]);

  return (
    <>
      <ul className="flex flex-row justify-center items-center w-fit min-h-20 h-fit">
        {profileList.map((user) => (
          <li
            key={user.name}
            className="px-1 py-2 text-base tracking-tight text-white cursor-pointer"
          >
            {user.isLoggedIn ? (
              <button className="px-2 py-1 border-2 border-black bg-white tracking-tighter text-red">
                ✅{user.name}
              </button>
            ) : (
              <button
                onClick={() => handleAnotherNameClick(user.name)}
                className="px-2 py-1 border-2 border-black bg-stone tracking-tighter cursor-pointer"
              >
                {user.name}
              </button>
            )}
          </li>
        ))}
      </ul>
      {showConfirm && (
        <Confirm
          text={"별명을 전환하시겠습니까?"}
          positiveAnswer={"네"}
          handleConfirmClick={handleProfileChange}
          onCancelClick={() => setShowConfirm(false)}
        />
      )}
    </>
  );
};

export default ProfileList;
