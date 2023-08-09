import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Confirm from "@components/atomic/Confirm";
import { handleStorage } from "@data/browserStorage/localStorages";
import { USERNAME } from "@data/browserStorage/keys.constant";
import { selectUser } from "@data/store/userListSlice";
import { saveUserName } from "@data/store/userNameSlice";

const ProfileList = ({
  selectedUserName,
  handleSetUSerName,
}: {
  selectedUserName: string;
  handleSetUSerName: (userName: string) => void;
}) => {
  const dispatch = useDispatch();
  const [showConfirm, setShowConfirm] = useState(false);
  const profileList = useSelector(selectUser);

  const handleAnotherNameClick = (user: string) => {
    setShowConfirm(true);
    handleSetUSerName(user);
  };

  const handleProfileChange = () => {
    handleStorage.setStorage(USERNAME, selectedUserName);
    dispatch(saveUserName(selectedUserName));
    setShowConfirm(false);
  };

  return (
    <div className="flex justify-center w-full min-h-fit">
      <ul className="flex flex-row justify-center items-center w-fit min-h-20 h-fit">
        {profileList.map((user) => (
          <li
            key={user}
            className="px-1 py-2 text-base tracking-tight text-white cursor-pointer"
          >
            {user === selectedUserName ? (
              <button className="px-2 py-1 border-2 border-black bg-white tracking-tighter text-red">
                ✅{user}
              </button>
            ) : (
              <button
                onClick={() => handleAnotherNameClick(user)}
                className="px-2 py-1 border-2 border-black bg-stone tracking-tighter cursor-pointer"
              >
                {user}
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
