import { Suspense, useEffect } from "react";
import dynamic from "next/dynamic";

import { useAppDispatch, useAppSelector } from "@store/store";

const ContentItem = dynamic(() => import("./ContentItem"), { suspense: true });
import ItemSkeleton from "../atomic/ItemSkeleton";

import style from "@styles/components/contents/Contents.module.scss";
import { getItem } from "@store/contentsSlice";

const Contents = () => {
  const contentsList = useAppSelector((state) => state.contentsList);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getItem());
  }, [dispatch]);

  return (
    <div className={style.contents_container}>
      {contentsList?.map((item) => (
        <ContentItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Contents;
