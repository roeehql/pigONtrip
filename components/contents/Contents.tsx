import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

import { useAppDispatch, useAppSelector } from "@store/store";
import { getItem } from "@store/contentsSlice";
import { current } from "@reduxjs/toolkit";

const ContentItem = dynamic(() => import("./ContentItem"), { suspense: true });

const Contents = () => {
  const contentsList = useAppSelector((state) => state.contentsList);
  const dispatch = useAppDispatch();

  const [query, setQuery] = useState("");

  const [isFetch, setIsFetch] = useState(false);
  const [windowOnScroll, setWindowOnScroll] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [itemOffset, setItemOffset] = useState(0);
  const [pageNum, setPageNum] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = contentsList.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(contentsList.length / itemsPerPage);

  const handleRefetch = (pageNum: number) => {
    const newOffset = (pageNum * itemsPerPage) % contentsList.length;
    setItemOffset(newOffset);
  };

  const getUserScrollState = () => {
    if (windowOnScroll >= document.body.offsetHeight) {
      setIsFetch(!isFetch);
    }
  };

  useEffect(() => {
    dispatch(getItem());
  }, [dispatch]);

  return (
    <div className="flex flex-col justify-center items-center w-screen min-h-80 mt-4 pb-120 border-2 border-b-0 border-x-0 border-t-black">
      {contentsList?.slice(0, 10).map((item) => (
        <ContentItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Contents;
