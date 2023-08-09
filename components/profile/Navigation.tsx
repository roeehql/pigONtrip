import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import mascot from "public/mascot/pig.png";
import AuthOutOptions from "./AuthOutOptions";
import ProfileList from "./ProfileList";
import { handleStorage } from "@data/browserStorage/localStorages";
import { USERNAME } from "@data/browserStorage/keys.constant";

const Navigation = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedUserName, setSelectedUserName] = useState("");

  const handleSetUSerName = (userName: string) => {
    setSelectedUserName(userName);
  };

  useEffect(() => {
    setSelectedUserName(JSON.parse(handleStorage.getStorage(USERNAME)));
  }, []);

  return (
    <nav className="fixed top-0 flex flex-row justify-center items-center w-full h-fit bg-yellow">
      <ul className="flex flex-row justify-around items-center w-full h-65">
        <Link href={"/home"} className="no-underline decoration-black">
          <li className="flex flex-row justify-center items-center w-fit h-full text-base tracking-tight cursor-pointer">
            <div className="mr-2">
              <Image src={mascot} alt="mascot pig" width={45} height={50} />
            </div>
            <span className="bg-logo text-black p-1 rounded-xl border-4 border-double border-red font-semibold">
              돼지는여행중
            </span>
          </li>
        </Link>
        <li className="flex flex-row justify-center items-center w-fit h-full text-base font-semibold tracking-tight cursor-pointer">
          <ProfileList
            selectedUserName={selectedUserName}
            handleSetUSerName={handleSetUSerName}
          />
        </li>
        <li className="relative flex flex-row justify-center items-center w-fit h-full text-base font-semibold tracking-tight cursor-pointer">
          <h4 onClick={() => setShowOptions(!showOptions)}>
            🐽{selectedUserName}님
          </h4>
          {showOptions && <AuthOutOptions />}
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
