import Link from "next/link";
import styles from "@styles/components/Header.module.scss";

const Header = () => {
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
            <h4>🐽여기도</h4>
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Header;
