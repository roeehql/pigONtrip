import { PaginateDataState } from "@@types/propsDataTypes";

const Paginate = ({ paginateData }: PaginateDataState) => {
  return (
    <div className="flex justify-evenly items-center w-300 my-4 py-2 rounded-2xl bg-grey">
      <button
        className=" hover:text-red"
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
        onClick={() => paginateData.handlePage("다음")}
      >
        다음
      </button>
    </div>
  );
};

export default Paginate;
