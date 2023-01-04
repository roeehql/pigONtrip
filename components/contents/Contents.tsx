import { useEffect } from "react";
import dynamic from "next/dynamic";

import { useAppDispatch, useAppSelector } from "@store/store";
import { getItem } from "@store/contentsSlice";

const ContentItem = dynamic(() => import("./ContentItem"), { suspense: true });

import style from "@styles/components/contents/Contents.module.scss";

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
