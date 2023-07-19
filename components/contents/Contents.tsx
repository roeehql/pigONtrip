import { useSelector } from "react-redux";
import { selectContents } from "@data/store/contentsSlice";
import usePaginate from "./hooks/usePaginate";
import { useGetUserName } from "@hooks/useGetUserName";

import TotalAmout from "./view/TotalAmoutView";
import Paginate from "./view/PaginateView";
import Summary from "./view/Summary";

const Contents = () => {
  const contentsList = useSelector(selectContents);
  const { userName } = useGetUserName();
  const { handlePage, itemFirstIndex, itemLastIndex, pageNumber, currentPage } =
    usePaginate({ listLength: contentsList.length });

  const paginateData = {
    handlePage,
    pageNumber,
    currentPage,
  };

  return (
    <div className="flex flex-col justify-center items-center w-screen min-h-80 mt-4 pb-120 border-2 border-b-0 border-x-0 border-t-black">
      <TotalAmout
        total={contentsList
          .filter((item) => item.userName === userName)
          .reduce((acc, curr) => acc + curr.exchangedMoney, 0)}
      />
      <div className="flex flex-col items-center p-6 mt-8 bg-grey rounded shadow-sm">
        <p className="mb-2">클릭하시면 상세 내용을 볼 수 있습니다.</p>
        {contentsList
          ?.filter((item) => item.userName === userName)
          .slice(itemFirstIndex, itemLastIndex)
          .map((item) => (
            <Summary key={item.id} item={item} />
          ))}
      </div>
      <Paginate paginateData={paginateData} />
    </div>
  );
};

export default Contents;
