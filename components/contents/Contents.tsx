import style from "@styles/components/contents/Contents.module.scss";
import ContentItem from "./ContentItem";
import ItemSkeleton from "./ItemSkeleton";

const Contents = () => {
  return (
    <div className={style.contents_container}>
      <ContentItem />
      <ItemSkeleton />
      <ContentItem />
      <ContentItem />
    </div>
  );
};

export default Contents;
