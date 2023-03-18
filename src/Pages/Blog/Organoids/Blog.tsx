import "../Styles/Blog.css";
import { useStore } from "effector-react";
import Arrow from "../../../Common/Icons/Arrow.svg"
import { useTranslation } from "react-i18next";
import { BlogItem } from "../Molecules/BlogItem";
import { $BlogItemsOriginal } from "../../../Common/Lists/BlogItemsOriginal";

import BlogOne from "../../../Common/Blog/1.jpg"

export const Blog = () => {
  const { t } = useTranslation()
  const BlogItemsOriginal = useStore($BlogItemsOriginal);
  return (
    <div className="Blog">
      <div className="Blog__Header">
        <div className="Blog__Header__Title">
          {t('Blog__Header__Title')}
        </div>
        <img className="Blog__Header__Image" src={Arrow} alt="Arrow" />
      </div>
      <div className="Blog__List">
        {
          BlogItemsOriginal.map((e:any)=>
          <BlogItem title={e.title} image={e.image} description={e.description} text={e.text} id={e.id}/>
          )
        }
      </div>
    </div>
  );
};
