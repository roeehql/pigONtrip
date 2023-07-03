import { useEffect } from "react";
import dynamic from "next/dynamic";

import { useAppDispatch, useAppSelector } from "@store/store";
import { getItem } from "@store/contentsSlice";
import Paginate from "./Paginate";
import usePaginate from "./hooks/usePaginate";

const ContentItem = dynamic(() => import("./ContentItem"), { suspense: true });

const Contents = () => {
  const contentsList = useAppSelector((state) => state.contentsList);
  const dispatch = useAppDispatch();
  const { handlePage, itemFirstIndex, itemLastIndex, pageNumber, currentPage } =
    usePaginate({ listLength: contentsList.length });

  useEffect(() => {
    dispatch(getItem());
  }, [dispatch]);

  const paginateData = {
    listLength: contentsList.length,
    handlePage,
    pageNumber,
    currentPage,
  };
  return (
    <div className="flex flex-col justify-center items-center w-screen min-h-80 mt-4 pb-120 border-2 border-b-0 border-x-0 border-t-black">
      {contentsList?.slice(itemFirstIndex, itemLastIndex).map((item) => (
        <ContentItem key={item.id} item={item} />
      ))}
      <Paginate paginateData={paginateData} />
    </div>
  );
};

export default Contents;
