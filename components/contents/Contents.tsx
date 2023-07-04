import dynamic from "next/dynamic";

import { useAppDispatch, useAppSelector } from "@data/store/store";
import Paginate from "./Paginate";
import usePaginate from "./hooks/usePaginate";
import { useEffect } from "react";
import { setItem } from "@data/store/contentsSlice";
import TotalAmout from "./TotalAmout";

const ContentItem = dynamic(() => import("./ContentItem"));

const Contents = () => {
  const dispatch = useAppDispatch();
  const contentsList = useAppSelector((state) => state.contentsList);
  const userName = useAppSelector((state) =>
    state.userName.filter((user) => user.isLoggedIn === true)
  );
  const { handlePage, itemFirstIndex, itemLastIndex, pageNumber, currentPage } =
    usePaginate({ listLength: contentsList.length });

  const paginateData = {
    listLength: contentsList.length,
    handlePage,
    pageNumber,
    currentPage,
  };

  useEffect(() => {
    dispatch(setItem(userName[0]?.name));
  }, [dispatch]);

  return (
    <div className="flex flex-col justify-center items-center w-screen min-h-80 mt-4 pb-120 border-2 border-b-0 border-x-0 border-t-black">
      <TotalAmout
        total={contentsList.reduce((acc, curr) => acc + curr.exchangedMoney, 0)}
      />
      {contentsList?.slice(itemFirstIndex, itemLastIndex).map((item) => (
        <ContentItem key={item.id} item={item} />
      ))}
      <Paginate paginateData={paginateData} />
    </div>
  );
};

export default Contents;
