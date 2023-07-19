import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import mascot from "public/mascot/pig.png";
import { useGetUserName } from "@hooks/useGetUserName";
import AuthOutOptions from "./AuthOutOptions";
import ProfileList from "./ProfileList";

const Navigation = () => {
  const [showOptions, setShowOptions] = useState(false);
  const { userName } = useGetUserName();

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
          <ProfileList />
        </li>
        <li className="relative flex flex-row justify-center items-center w-fit h-full text-base font-semibold tracking-tight cursor-pointer">
          <h4 onClick={() => setShowOptions(!showOptions)}>🐽{userName}님</h4>
          {showOptions && <AuthOutOptions />}
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
