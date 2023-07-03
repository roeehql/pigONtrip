import Link from "next/link";
import Image from "next/image";
import { useAppSelector } from "@store/store";
import ProfileList from "./ProfileList";
import mascot from "public/mascot/pig.png";

const Header = () => {
  const userName = useAppSelector((state) =>
    state.userName.filter((user) => user.isLoggedIn === true)
  );

  return (
    <nav className="fixed top-0 flex flex-row justify-center items-center w-full h-65 bg-yellow overflow-x-hidden">
      {userName.length !== 0 && (
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
          <li className="flex flex-row justify-center items-center w-fit h-full px-2 text-base tracking-tight cursor-pointer">
            <ProfileList />
          </li>
          <Link href={"/mypage"} className="no-underline decoration-black">
            <li className="flex flex-row justify-center items-center w-fit h-full text-base font-semibold tracking-tight cursor-pointer">
              <h4>🐽{userName[0].name}님</h4>
            </li>
          </Link>
        </ul>
      )}
    </nav>
  );
};

export default Header;
