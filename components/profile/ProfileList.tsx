import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editUserName, selectUser } from "@data/store/userNameSlice";
import Confirm from "@components/atomic/Confirm";
import { useGetUserName } from "@hooks/useGetUserName";

const ProfileList = () => {
  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedUserName, setSelectedUserName] = useState("");
  const profileList = useSelector(selectUser);
  const dispatch = useDispatch();
  const { userName } = useGetUserName();

  const handleAnotherNameClick = (user: string) => {
    setSelectedUserName(user);
    setShowConfirm(true);
  };

  const handleProfileChange = () => {
    dispatch(editUserName({ name: userName, isLoggedIn: false }));
    dispatch(editUserName({ name: selectedUserName, isLoggedIn: true }));
    setShowConfirm(false);
  };

  return (
    <div className="flex justify-center w-full min-h-fit">
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
          style="list"
          text={"별명을 전환하시겠습니까?"}
          positiveAnswer={"네"}
          handleConfirmClick={handleProfileChange}
          onCancelClick={() => setShowConfirm(false)}
        />
      )}
    </div>
  );
};

export default ProfileList;
