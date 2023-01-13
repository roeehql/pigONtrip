import { useEffect } from "react";
import dynamic from "next/dynamic";

import { useAppDispatch, useAppSelector } from "@store/store";
import { getItem } from "@store/contentsSlice";

const ContentItem = dynamic(() => import("./ContentItem"), { suspense: true });

const Contents = () => {
  const contentsList = useAppSelector((state) => state.contentsList);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getItem());
  }, [dispatch]);

  return (
    <div className="flex flex-col justify-center items-center w-screen min-h-80 mt-4 pb-120 border-2 border-b-0 border-x-0 border-t-black">
      {contentsList?.map((item) => (
        <ContentItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Contents;
