import Logout from "./Logout";
import SignOut from "./SignOut";

const AuthOutOptions = () => {
  return (
    <ul className="absolute w-150 translate-y-80 bg-white shadow">
      <li className="relative flex flex-row justify-center items-center w-full">
        <Logout />
      </li>
      <li className="relative flex flex-row justify-center items-center w-full">
        <SignOut />
      </li>
    </ul>
  );
};

export default AuthOutOptions;
