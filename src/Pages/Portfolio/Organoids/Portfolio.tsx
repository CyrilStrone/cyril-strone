import "../Styles/Portfolio.css";
import Arrow from "../../../Common/Icons/Arrow.svg"
import { useStore } from "effector-react";
import { $ProjectItemsOriginal } from "../../../Common/Lists/ProjectItemsOriginal";
import { ProjectItem } from "../../Home/Atoms/ProjectItem";
import { useTranslation } from "react-i18next";
export const Portfolio = () => {
  const CodeItemsOriginal = useStore($ProjectItemsOriginal);
  const { t } = useTranslation()
  return (
    <div className="Portfolio">
      <div className="Portfolio__Header">
        <div className="Portfolio__Header__Title">
          {t('Portfolio__Header__Title')}
        </div>
        <img className="Portfolio__Header__Image" src={Arrow} alt="Arrow" />
      </div>
      <div className="Portfolio__List">
        {CodeItemsOriginal.map((e: any) =>
          <ProjectItem new={e.new} type={e.type} name={e.name} description={e.description} technology={e.technology} link={e.link} preview={e.preview} />
        )}
      </div>
    </div>
  );
};
