import Link from "next/link";
import styles from "@styles/components/Header.module.scss";
import { useAppSelector } from "@store/store";

const Header = () => {
  const userName = useAppSelector((state) => state.userName.value);

  return (
    <nav className={styles.header_nav}>
      <ul className={styles.header_first_ul}>
        <Link href={"/"}>
          <li className={styles.header_li}>
            <span>돼지는여행중</span>
          </li>
        </Link>
        <Link href={"/mypage"}>
          <li className={styles.header_li}>
            <h4>🐽{userName}님</h4>
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Header;
