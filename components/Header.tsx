import Link from "next/link";
import { useAppSelector } from "@store/store";

const Header = () => {
  const userName = useAppSelector((state) => state.userName.value);

  return (
    <nav className="fixed top-0 flex flex-row justify-center items-center w-full h-65 bg-yellow overflow-x-hidden">
      <ul className="flex flex-row justify-around items-center w-full h-65">
        <Link href={"/"} className="no-underline decoration-black">
          <li className="flex flex-row justify-center items-center w-fit h-full text-base tracking-tight cursor-pointer">
            <span className="bg-logo text-black p-1 rounded-xl border-4 border-double border-red font-semibold">
              돼지는여행중
            </span>
          </li>
        </Link>
        <Link href={"/mypage"} className="no-underline decoration-black">
          <li className="flex flex-row justify-center items-center w-fit h-full text-base font-semibold tracking-tight cursor-pointer">
            <h4>🐽{userName}님</h4>
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Header;
