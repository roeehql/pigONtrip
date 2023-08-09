import { PaginateDataState } from "@@types/ContentsTypes";

const Paginate = ({ paginateData }: PaginateDataState) => {
  return (
    <div
      aria-label="숫자 버튼을 이용해 페이지를 이동할 수 있습니다"
      className="flex justify-evenly items-center w-300 my-4 py-2 rounded-2xl bg-grey"
    >
      <button
        className=" hover:text-red"
        aria-label="목록의 시작으로 이동하기"
        onClick={() => paginateData.handlePage("이전")}
      >
        이전
      </button>
      <ol className="flex justify-evenly">
        {Array(paginateData.pageNumber)
          .fill(0)
          .map((_, i) => i + 1)
          .map((idx) => (
            <li
              key={idx}
              aria-label={`${idx}번째 페이지로 이동하기`}
              className={
                paginateData.currentPage === idx
                  ? "list-none px-2 mx-1 rounded-full cursor-pointer bg-white"
                  : "list-none px-2 mx-1 rounded-full cursor-pointer hover:bg-white"
              }
              onClick={() => paginateData.handlePage(idx)}
            >
              {idx}
            </li>
          ))}
      </ol>
      <button
        className=" hover:text-red"
        aria-label="목록의 끝으로 이동하기기"
        onClick={() => paginateData.handlePage("다음")}
      >
        다음
      </button>
    </div>
  );
};

export default Paginate;
