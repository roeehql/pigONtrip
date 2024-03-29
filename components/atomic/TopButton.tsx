import { useScroll } from "@hooks/useScroll";
import { FaArrowUp } from "react-icons/fa";

const TopButton = () => {
  const { y } = useScroll();
  const handleTopButton = () => {
    window.scrollTo({
      top: 0,
    });
  };
  return (
    <>
      {y > 150 && (
        <button
          onClick={handleTopButton}
          aria-label="화면 상단으로 이동하기"
          className="fixed bottom-0 right-0 m-6 p-4 bg-black border-0 text-white"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
};

export default TopButton;
