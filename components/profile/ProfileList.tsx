import { useEffect, MouseEvent } from "react";
import { useAppSelector, useAppDispatch } from "@store/store";
import { editUserName, getUserList, saveUserName } from "@store/userNameSlice";

const ProfileList = () => {
  const profileList = useAppSelector((state) => state.userName);
  const dispatch = useAppDispatch();

  const handleProfileChange = (e: MouseEvent<HTMLButtonElement>) => {
    dispatch(editUserName({ name: getCurrentUser(), isLoggedIn: false }));
    dispatch(saveUserName());
    dispatch(
      editUserName({ name: e.currentTarget.innerText, isLoggedIn: true })
    );
    dispatch(saveUserName());
  };

  const getCurrentUser = () => {
    const user = profileList.filter((user) => user.isLoggedIn === true);
    return user[0].name;
  };

  useEffect(() => {
    dispatch(getUserList());
  }, [dispatch]);

  return (
    <ul className="flex flex-row justify-center items-center w-fit h-20">
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
              onClick={(e) => handleProfileChange(e)}
              className="px-2 py-1 border-2 border-black bg-stone tracking-tighter cursor-pointer"
            >
              {user.name}
            </button>
          )}
        </li>
      ))}
    </ul>
  );
};

export default ProfileList;
